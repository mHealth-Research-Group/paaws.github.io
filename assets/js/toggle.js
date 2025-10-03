document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('main.page-content .wrapper');
  if (!container) return;

  // Strip trailing "{#id}" anchor text from headings and set as real id.
  function stripTrailingId(el) {
    // Walk backwards to find the last non-empty text node
    let node = el.lastChild;
    while (node && (node.nodeType !== Node.TEXT_NODE || node.textContent === null)) {
      node = node.previousSibling;
    }
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const text = node.textContent;
    const m = text && text.match(/\s*\{#([^}]+)\}\s*$/);
    if (m) {
      node.textContent = text.replace(/\s*\{#([^}]+)\}\s*$/, '');
      if (!el.id) el.id = m[1];
    }
  }

  Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6')).forEach(stripTrailingId);

  // Remove stray empty H2 (lines that were just "##")
  Array.from(container.querySelectorAll('h2'))
    .filter(h => h.textContent.trim() === '')
    .forEach(h => h.remove());

  // Build collapsible sections for H1 and H2, but ignore the first H1 (page title)
  const headings = Array.from(container.querySelectorAll('h1, h2'));
  if (headings.length === 0) return;
  const firstH1 = headings.find(h => h.tagName === 'H1');
  let uid = 0;

  function levelOf(tag) { return tag === 'H1' ? 1 : tag === 'H2' ? 2 : 99; }

  headings.forEach(h => {
    const isFirstPageTitle = h.tagName === 'H1' && h === firstH1;
    if (isFirstPageTitle) return; // leave the first H1 alone

    const currentLevel = levelOf(h.tagName);
    const sectionNodes = [];
    let n = h.nextSibling;
    while (n) {
      const next = n.nextSibling;
      const isHeading = n.nodeType === Node.ELEMENT_NODE && /^(H1|H2)$/.test(n.tagName);
      if (isHeading) {
        const nextLevel = levelOf(n.tagName);
        if (nextLevel <= currentLevel) break;
      }
      sectionNodes.push(n);
      n = next;
    }
    if (sectionNodes.length === 0) return;

    const body = document.createElement('div');
    body.className = 'collapsible-body';
    body.id = body.id || `collapsible-body-${++uid}`;
    sectionNodes.forEach(node => body.appendChild(node));
    h.after(body);

    const klass = h.tagName === 'H1' ? 'collapsible-h1' : 'collapsible-h2';
    h.classList.add(klass);
    h.setAttribute('role', 'button');
    h.setAttribute('tabindex', '0');
    h.setAttribute('aria-expanded', 'true');
    h.setAttribute('aria-controls', body.id);

    function toggle() {
      const collapsed = body.classList.toggle('collapsed');
      h.setAttribute('aria-expanded', String(!collapsed));
    }

    h.addEventListener('click', toggle);
    h.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
});
