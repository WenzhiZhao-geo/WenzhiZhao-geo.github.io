(() => {
  const profile = window.profileLinks || {};
  const labels = { scholar: 'Google Scholar profile', github: 'GitHub profile', linkedin: 'LinkedIn profile', orcid: 'ORCID record', cv: 'Open CV (PDF)', map: 'View campus map' };
  document.querySelectorAll('[data-profile]').forEach(container => {
    const key = container.dataset.profile;
    const value = typeof profile[key] === 'string' ? profile[key].trim() : '';
    if (!value) return;
    const isEmail = key === 'email';
    if (isEmail && !/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(value)) return;
    if (!isEmail && !/^https:\/\//i.test(value) && !(key === 'cv' && /^assets\/[\w./-]+\.pdf$/i.test(value))) return;
    const link = document.createElement('a');
    link.href = isEmail ? `mailto:${value}` : value;
    link.textContent = container.dataset.label || (isEmail ? value : labels[key]);
    if (!isEmail) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    container.replaceChildren(link);
  });
  document.querySelectorAll('[data-contact]').forEach(element => {
    const value = window.contactDetails?.[element.dataset.contact];
    if (typeof value === 'string' && value.trim()) element.textContent = value;
  });

  const dialog = document.querySelector('.lightbox');
  const items = [...document.querySelectorAll('.gallery-link')];
  if (!dialog || typeof dialog.showModal !== 'function') return;
  let selected = 0;
  let trigger;
  let oldOverflow;
  const display = index => {
    selected = (index + items.length) % items.length;
    const item = items[selected];
    const image = dialog.querySelector('.lightbox-image');
    image.src = item.href;
    image.alt = item.querySelector('img').alt;
    dialog.querySelector('#lightbox-caption').textContent = item.dataset.caption;
    dialog.querySelector('#lightbox-count').textContent = `${selected + 1} / ${items.length}`;
  };
  items.forEach((item, index) => item.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    trigger = item;
    display(index);
    oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
  }));
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.lightbox-prev').addEventListener('click', () => display(selected - 1));
  dialog.querySelector('.lightbox-next').addEventListener('click', () => display(selected + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      display(selected + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  });
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = oldOverflow || '';
    trigger?.focus({ preventScroll: true });
  });
})();
