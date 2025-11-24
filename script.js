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
  var darkModeToggle = document.getElementById("theme-toggle");
  var body = document.body;


  if (heroCta && aboutSection) {
    heroCta.addEventListener("click", () => {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }
  
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
    });
  }
  // TODO (Optional): Add your own in teraction below
  // e.g. dark mode toggle, form validation, etc.
});