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

// Active nav highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

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

