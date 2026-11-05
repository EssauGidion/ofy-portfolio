const body = document.body;
const themeButton = document.getElementById("theme-toggle");

function applyTheme(theme) {
    const isLight = theme === "light";

    body.classList.toggle("light-mode", isLight);

    if (themeButton) {
        themeButton.textContent = isLight ? "☀️" : "🌙";
        themeButton.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    }

    try {
        localStorage.setItem("theme", theme);
    } catch (error) {
        // Ignore browser storage restrictions.
    }
}

function toggleTheme() {
    const nextTheme = body.classList.contains("light-mode") ? "dark" : "light";
    applyTheme(nextTheme);
}

if (themeButton) {
    let savedTheme = "dark";

    try {
        savedTheme = localStorage.getItem("theme") || "dark";
    } catch (error) {
        savedTheme = "dark";
    }

    applyTheme(savedTheme);
    themeButton.type = "button";
    themeButton.addEventListener("click", toggleTheme);
}