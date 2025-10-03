document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('main.page-content .wrapper');
  if (!container) return;

  // Fix headings that include trailing "{#id}" by turning them into real ids
  const fixHeadingIds = (selector) => {
    Array.from(container.querySelectorAll(selector)).forEach(h => {
      const html = h.innerHTML;
      const m = html.match(/\s*\{#([^}]+)\}\s*$/);
      if (m) {
        h.innerHTML = html.replace(/\s*\{#([^}]+)\}\s*$/, '');
        if (!h.id) h.id = m[1];
      }
    });
  };
  fixHeadingIds('h1, h2, h3, h4, h5, h6');

  // Remove stray empty H2 (lines that were just "##")
  Array.from(container.querySelectorAll('h2'))
    .filter(h => h.textContent.trim() === '')
    .forEach(h => h.remove());

  // Turn each H2 into a collapsible section: wraps content until next H1/H2
  const h2s = Array.from(container.querySelectorAll('h2'));
  if (h2s.length === 0) return;

  let uid = 0;
  h2s.forEach(h2 => {
    const sectionNodes = [];
    let n = h2.nextSibling;
    while (n) {
      const next = n.nextSibling;
      const isHeading = n.nodeType === Node.ELEMENT_NODE && /^(H1|H2)$/.test(n.tagName);
      if (isHeading) break;
      sectionNodes.push(n);
      n = next;
    }
    if (sectionNodes.length === 0) return;

    const body = document.createElement('div');
    body.className = 'collapsible-body';
    body.id = body.id || `collapsible-body-${++uid}`;
    sectionNodes.forEach(node => body.appendChild(node));
    h2.after(body);

    // Make H2 interactive
    h2.classList.add('collapsible-h2');
    h2.setAttribute('role', 'button');
    h2.setAttribute('tabindex', '0');
    h2.setAttribute('aria-expanded', 'true');
    h2.setAttribute('aria-controls', body.id);

    function toggle() {
      const collapsed = body.classList.toggle('collapsed');
      h2.setAttribute('aria-expanded', String(!collapsed));
    }

    h2.addEventListener('click', toggle);
    h2.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
});
