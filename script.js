// Contact form feedback
const form = document.getElementById("contactForm");
const message = document.getElementById("message");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    message.textContent = "Message sent successfully!";
    form.reset();
  });
}

// GSAP animations (no pinning, just fade/slide on scroll)
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-text h2", { duration: 1, y: -50, opacity: 0 });
gsap.from(".hero-text h3", { duration: 1, y: -50, opacity: 0, delay: 0.3 });
gsap.from(".hero-text p", { duration: 1, y: -50, opacity: 0, delay: 0.6 });
gsap.from(".hero-image img", { duration: 1, scale: 0.8, opacity: 0, delay: 1 });

// Animate sections when they scroll into view
gsap.utils.toArray(".panel").forEach(panel => {
  gsap.from(panel, {
    scrollTrigger: {
      trigger: panel,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

// Smooth nav scrolling
gsap.registerPlugin(ScrollToPlugin);
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    gsap.to(window, {
      duration: 1,
      scrollTo: targetId,
      ease: "power2.inOut"
    });
  });
});

// Active nav highlighting
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
