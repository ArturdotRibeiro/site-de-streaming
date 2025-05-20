function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Adicionando modo escuro
document.addEventListener("DOMContentLoaded", function () {
    let darkModeButton = document.createElement("style");
    darkModeButton.innerHTML = `
        .dark-mode {
            background-color: #000;
            color: #fff;
        }
    `;
    document.head.appendChild(darkModeButton);
});
