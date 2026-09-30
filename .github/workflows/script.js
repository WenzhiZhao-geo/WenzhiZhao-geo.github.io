// Progressive enhancement: the entire page remains readable without JavaScript.
(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const running = new Set();
  const reveal = (element, delay = 0) => {
    if (motion.matches || !element.animate) return;
    const animation = element.animate(
      [{ opacity: 0.55, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 650, delay, easing: 'cubic-bezier(.2,.7,.2,1)' }
    );
    running.add(animation);
    animation.finished.then(() => running.delete(animation)).catch(() => running.delete(animation));
  };
  motion.addEventListener('change', () => {
    if (motion.matches) running.forEach(animation => animation.cancel());
  });
  if (!location.hash || location.hash === '#home') {
    document.querySelectorAll('.hero-copy > *, .portrait').forEach((element, index) => reveal(element, index * 55));
  }
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section').forEach(section => observer.observe(section));
  }
  const links = [...document.querySelectorAll('nav a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  const progress = document.querySelector('.reading-progress');
  const header = document.querySelector('.site-header');
  let queued = false;
  function update() {
    queued = false;
    const available = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${available > 0 ? Math.min(1, Math.max(0, scrollY / available)) : 0})`;
    let active = -1;
    const boundary = header.getBoundingClientRect().height + 100;
    sections.forEach((section, index) => {
      if (section.getBoundingClientRect().top <= boundary) active = index;
    });
    if (available > 0 && scrollY >= available - 3) active = sections.length - 1;
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function schedule() {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  addEventListener('load', schedule);
  update();
})();
