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
    heroCta.addEventListener("click", () => {a
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // TODO (Optional): Add your own interaction below
  // e.g. dark mode toggle, form validation, etc.
});