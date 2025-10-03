document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('main.page-content .wrapper');
  if (!container) return;

  // 1) Remove stray empty H2 ("##" with no text) if any slipped through
  Array.from(container.querySelectorAll('h2'))
    .filter(h => h.textContent.trim() === '')
    .forEach(h => h.remove());

  // 2) Make the top-level H1 collapse/expand the rest of the page content
  const h1 = container.querySelector('h1');
  if (!h1) return;

  // Only proceed if there is content after the H1
  const following = [];
  let n = h1.nextSibling;
  while (n) {
    const next = n.nextSibling;
    if (n.nodeType === Node.ELEMENT_NODE || (n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== '')) {
      following.push(n);
    } else if (n.nodeType === Node.TEXT_NODE) {
      // Keep minimal whitespace between sections
      following.push(n);
    }
    n = next;
  }
  if (following.length === 0) return;

  const body = document.createElement('div');
  body.className = 'collapsible-body';
  following.forEach(node => body.appendChild(node));
  h1.after(body);

  // Enhance H1 with toggle behavior
  h1.classList.add('collapsible-h1');
  h1.setAttribute('role', 'button');
  h1.setAttribute('tabindex', '0');
  h1.setAttribute('aria-expanded', 'true');

  function toggle() {
    const collapsed = body.classList.toggle('collapsed');
    h1.setAttribute('aria-expanded', String(!collapsed));
  }

  h1.addEventListener('click', toggle);
  h1.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});

