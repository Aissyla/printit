// Tableau des slides avec les informations d'image et de tagline
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

// Index du slide actuel
let currentIndex = 0;

// Variables pour les éléments du DOM
const bannerImg = document.querySelector('.banner-img');
const taglineContainer = document.getElementById('tagline-container');
const dotsContainer = document.querySelector('.dots');
const arrows = document.querySelectorAll('.arrow');
// const allDots = document.querySelectorAll('.dot');

// Fonction pour mettre à jour le slide avec l'index actuel
function updateSlide() {
    const slide = slides[currentIndex];
    // Met à jour l'image du banner
    bannerImg.src = `./assets/images/slideshow/${slide.image}`;
    // Met à jour le tagline en utilisant insertAdjacentHTML()
    taglineContainer.innerHTML = '';
    taglineContainer.insertAdjacentHTML('beforeend', `<p id="tagline">${slide.tagLine}</p>`);
    // Met à jour la classe sélectionnée pour les points de navigation
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentIndex);
    });
}

// Ajoute un écouteur d'événement pour chaque flèche
arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
        // Détermine la direction de la navigation en fonction de la classe de la flèche
        const direction = arrow.classList.contains('arrow_right') ? 1 : -1;
        // Calcule le nouvel index du slide sans utiliser le modulo
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        } else if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        // Met à jour le slide
        updateSlide();
    });
});

// Initialise les points de navigation
slides.forEach((slide, index) => {
    const dotHTML = `<div class="dot${index === 0 ? ' dot_selected' : ''}"></div>`;
    dotsContainer.insertAdjacentHTML('beforeend', dotHTML);
});

// Ajoute un écouteur d'événement pour chaque point de navigation
dotsContainer.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlide();
    });
});

// Met à jour le slide pour afficher le premier slide au chargement de la page
updateSlide();