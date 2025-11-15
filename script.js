// script.js
// Basic JS file for the landing page.
// Each team member can add simple interactions here.

/*
  Suggested ideas for the JS interaction person:
  - Smooth scroll when clicking the "Learn More" button
  - Toggle dark mode for the page
  - Show an alert or a small popup when the form is submitted
*/

// Example: smooth scroll from hero button to "About" section
// (Feel free to modify or replace this with your own idea)

document.addEventListener("DOMContentLoaded", () => {
  const heroCta = document.getElementById("hero-cta");
  const aboutSection = document.getElementById("about");
  
  if (heroCta && aboutSection) {
    heroCta.addEventListener("click", () => {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

  // TODO (Optional): Add your own interaction below
  // e.g. dark mode toggle, form validation, etc.
});