// ==============================================================
// SETTINGS: turn features on (true) or off (false)
// ==============================================================
const SETTINGS = {
  darkModeButton: true,    // show the button that switches to dark mode
  fadeInOnScroll: true,    // sections gently fade in as you scroll
  rememberDarkMode: true   // the site remembers if a visitor picked dark mode
};


// ==============================================================
// 1. Put the current year in the footer automatically
// ==============================================================
document.getElementById("year").textContent = new Date().getFullYear();


// ==============================================================
// 2. Phone menu: the ☰ button shows and hides the nav links
// ==============================================================
const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Close the menu after tapping a link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});


// ==============================================================
// 3. Dark mode button
// ==============================================================
const modeButton = document.getElementById("mode-btn");
const page = document.documentElement; // the <html> tag

if (!SETTINGS.darkModeButton) {
  modeButton.remove();
} else {
  // If the visitor chose dark mode last time, turn it back on
  if (SETTINGS.rememberDarkMode && savedMode() === "dark") {
    page.setAttribute("data-mode", "dark");
    modeButton.textContent = "Light";
  }

  modeButton.addEventListener("click", function () {
    if (page.getAttribute("data-mode") === "dark") {
      page.removeAttribute("data-mode");
      modeButton.textContent = "Dark";
      saveMode("light");
    } else {
      page.setAttribute("data-mode", "dark");
      modeButton.textContent = "Light";
      saveMode("dark");
    }
  });
}

// Helpers for remembering the choice (some browsers block this, so we're careful)
function savedMode() {
  try { return localStorage.getItem("mode"); } catch (e) { return null; }
}
function saveMode(mode) {
  if (!SETTINGS.rememberDarkMode) return;
  try { localStorage.setItem("mode", mode); } catch (e) { /* ignore */ }
}


// ==============================================================
// 4. Fade sections in as you scroll down to them
// ==============================================================
if (SETTINGS.fadeInOnScroll && "IntersectionObserver" in window) {
  const sections = document.querySelectorAll(".section");

  const watcher = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        watcher.unobserve(entry.target); // only animate once
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(function (section) {
    section.classList.add("fade-in");
    watcher.observe(section);
  });
}
