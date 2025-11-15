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

  // Theme toggle logic
  const THEME_KEY = "theme"; // "light" | "dark" or null = follow system
  const toggle = document.getElementById("theme-toggle");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (toggle) { toggle.textContent = "☀️"; toggle.setAttribute("aria-pressed", "true"); }
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (toggle) { toggle.textContent = "🌙"; toggle.setAttribute("aria-pressed", "false"); }
    }
  }

  // Load saved or system preference
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
  } else {
    applyTheme(prefersDark && prefersDark.matches ? "dark" : "light");
  }

  // If no explicit saved value, respond to system changes
  if (prefersDark) {
    prefersDark.addEventListener("change", (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
  }

  // Toggle click handler
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  // TODO (Optional): Add your own interaction below
  // e.g. form validation, etc.
});