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

// GSAP stacked scroll effect
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.utils.toArray(".panel").forEach(panel => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
});

// Smooth nav scrolling with GSAP ScrollTo
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
