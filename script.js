// Contact form feedback with Formspree
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

if (form) {
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        message.textContent = "Message sent successfully!";
        message.style.color = "green";
        form.reset();
      } else {
        message.textContent = "Oops, something went wrong. Please try again.";
        message.style.color = "red";
      }
    } catch (error) {
      message.textContent = "Network error. Please try again.";
      message.style.color = "red";
    }
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
