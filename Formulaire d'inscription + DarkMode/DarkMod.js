document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.querySelector("#darkModeToggle");

    // Ajoute un événement pour basculer le mode sombre
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Change l'icône du bouton selon le mode
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "☀️"; // Soleil pour le mode sombre
        } else {
            darkModeToggle.textContent = "🌙"; // Lune pour le mode clair
        }
    });
});
