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

// Fonction pour mettre à jour le slide avec l'index actuel
function updateSlide() {
    const slide = slides[currentIndex];
    // Met à jour l'image du banner
    document.querySelector('.banner-img').src = `./assets/images/slideshow/${slide.image}`;
    // Met à jour le tagline
    document.getElementById('tagline').innerHTML = slide.tagLine;
    // Met à jour la classe sélectionnée pour les points de navigation
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentIndex);
    });
}

// Ajoute un écouteur d'événement pour chaque flèche
document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener("click", () => {
        // Détermine la direction de la navigation en fonction de la classe de la flèche
        const direction = arrow.classList.contains('arrow_right') ? 1 : -1;
        // Calcule le nouvel index du slide en utilisant le modulo pour boucler entre les slides
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        // Met à jour le slide
        updateSlide();
    });
});

// Ajoute un écouteur d'événement pour chaque point de navigation
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Met à jour l'index du slide avec celui du point cliqué
        currentIndex = index;
        // Met à jour le slide
        updateSlide();
    });
});

// Met à jour le slide pour afficher le premier slide au chargement de la page
updateSlide();