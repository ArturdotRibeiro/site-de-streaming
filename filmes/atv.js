function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Adicionando modo escuro
document.addEventListener("DOMContentLoaded", function () {
    let darkModeStyle = document.createElement("style");
    darkModeStyle.innerHTML = `
        .dark-mode {
            background-color: #000;
            color: #fff;
        }
    `;
    document.head.appendChild(darkModeStyle);

// Swiper
    if (typeof Swiper !== "undefined") {
        new Swiper('.swiper', {
            slidesPerView: 4,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

// Banner rotativo
    const images = document.querySelectorAll(".banner img");
    let current = 0;
    if (images.length > 0) {
        images[current].classList.add("active");
        setInterval(() => {
            images[current].classList.remove("active");
            current = (current + 1) % images.length;
            images[current].classList.add("active");
        }, 5000);
    }
});