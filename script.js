// Плавное появление секций при прокрутке
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");

  const options = {
    threshold: 0.1,
  };

  const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = "0.2s";
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  fadeEls.forEach(el => {
    fadeInOnScroll.observe(el);
  });
});
