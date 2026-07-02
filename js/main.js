// Flag JS availability so reveal styles only hide content when we can unhide it.
document.documentElement.classList.add('js');

// Solidify the nav once the hero scrolls past.
const header = document.getElementById('site-header');
if (header && !header.classList.contains('scrolled')) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Reveal-on-scroll for elements marked with data-reveal.
const revealables = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealables.forEach((el) => observer.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-visible'));
}
