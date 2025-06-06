document.addEventListener('DOMContentLoaded', function() {
    const heroImages = [
        "../filmes/img/wp13375644-persona-3-reload-wallpapers.jpg",
        "../filmes/img/whicerrrrs.jpg",
        "../filmes/img/filmagem-completa-da-familia-correndo-no-prado.jpg"
    ];

    let heroIndex = 0;
    const heroImg = document.querySelector("body");

    // Cria overlay escuro
    if (heroImg && heroImages.length > 0) {
        let overlay = document.createElement('div');
        overlay.className = 'hero-img-overlay';
        overlay.style.position = 'absolute';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.6)';
        overlay.style.pointerEvents = 'none';
        overlay.style.opacity = 0;
        overlay.style.transition = 'opacity 1s';

        // Define posição relativa para o body
        heroImg.style.position = 'relative';
        heroImg.appendChild(overlay);

        setInterval(() => {
            // Fade-out escuro
            overlay.style.opacity = 1;
            setTimeout(() => {
                heroIndex = (heroIndex + 1) % heroImages.length;
                heroImg.style.backgroundImage = `url(${heroImages[heroIndex]})`;
                heroImg.style.backgroundSize = 'cover'; 
                heroImg.style.backgroundPosition = 'center'; 
                // Fade-in escuro
                overlay.style.opacity = 0;
            }, 800);
        }, 5000);
    }
});