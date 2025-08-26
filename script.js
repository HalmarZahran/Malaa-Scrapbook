AOS.init({
  duration: 800,
  once: true,
});

document.querySelectorAll('.nav-menu a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('data-section');

    // Remove active class from all menu
    document.querySelectorAll('.nav-menu a').forEach((el) => el.classList.remove('active'));

    // Add active to clicked menu
    link.classList.add('active');

    // Hide all sections
    document.querySelectorAll('.section').forEach((sec) => sec.classList.remove('active'));

    // Show target section
    const targetSection = document.getElementById(targetId);
    targetSection.classList.add('active');

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Animate business process items on scroll
const processItems = document.querySelectorAll('.process-item');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);
processItems.forEach((item) => observer.observe(item));
