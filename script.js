// Contact form
const form = document.getElementById("contactForm");
const message = document.getElementById("message");
form.addEventListener("submit", e => {
  e.preventDefault();
  message.textContent = "Message sent successfully!";
  form.reset();
});

// GSAP stacked scroll effect
gsap.utils.toArray(".panel").forEach(panel => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false
  });
});