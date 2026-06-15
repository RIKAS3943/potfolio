(function () {
  "use strict";

  var navToggle = document.querySelector(".nav__toggle");
  var navMenu = document.querySelector(".nav__menu");
  var navLinks = document.querySelectorAll(".nav__link");
  var themeToggle = document.querySelector(".theme-toggle");
  var themeIcon = document.querySelector(".theme-toggle__icon");
  var yearEl = document.getElementById("year");
  var sections = document.querySelectorAll("section[id]");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeIcon) {
      themeIcon.innerHTML = theme === "dark" ? "&#9728;" : "&#9790;";
    }
  }

  var savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("nav__menu--open");
      navToggle.setAttribute("aria-expanded", isOpen);
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navMenu) {
        navMenu.classList.remove("nav__menu--open");
      }
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      }
    });
  });

  function highlightNav() {
    var scrollY = window.scrollY + 100;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove("nav__link--active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("nav__link--active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();
})();
