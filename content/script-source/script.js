

// GLOBAL VARIABLES _______________________________________________________________________________

const botao = document.querySelector('div#container-burge');
const linso = document.querySelector("div#container-linso");
const night = document.getElementById('wrap-parallax');
const parallaxText = document.getElementById('parallax-text');
const socialBar = document.getElementById('social-bar');
const shield = document.getElementById('shield');

const style = getComputedStyle(document.documentElement);
const sizeIcons = parseInt(style.getPropertyValue('--size-icons')); // Fallback 48px
const sizeHeaderArmazem = parseInt(style.getPropertyValue('--Armazem--size-header-height'));
const minSize = sizeIcons || 48; // Fallback 48px
const maxSize = 128; // Tamanho máximo (8em aprox.)







// MENU BURGER ____________________________________________________________________________________

document.addEventListener('click', function (evento) {
    // safety: ensure elements exist before accessing contains/classList
    const clickedInsideBotao = botao && botao.contains(evento.target);
    const clickedInsideLinso = linso && linso.contains(evento.target);
    if (!clickedInsideBotao && !clickedInsideLinso) {
        if (linso && linso.classList)
            linso.classList.remove('openBurge');
    }
})

function ClickBurge() {
    if (linso && linso.classList)
        linso.classList.toggle('openBurge');
}












// Triggers The Parallax Effect

window.addEventListener('load', () => {

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);

});


// Simple scroll-based parallax handler
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY || window.pageYOffset;

    if (night) {
        // move background slower than scroll for depth effect
        night.style.transform = `translateY(${scrolled * 0.2}px) scale(1.1)`;
    }

    if (parallaxText) {
        // move title slightly faster for foreground effect
        parallaxText.style.transform = `translateY(${100 + scrolled * 0.18}px)`;
    }

    if (shield) {
        // move shield
        shield.style.transform = `translateY(${scrolled}px)`;
    }

});






