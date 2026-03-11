


// MENU BURGER ____________________________________________________________________________________

botao = document.querySelector('div#container-burge');
linso = document.querySelector("div#container-linso");

document.addEventListener('click', function(evento) {
    if (!botao.contains(evento.target) && !linso.contains(evento.target)) {
      linso.classList.remove('openBurge');
    }
})

function ClickBurge() {
    linso.classList.toggle('openBurge');
}






// PARALLAX EFFECT ________________________________________________________________________________

// O script deve ser colocado antes do fechamento do </body>
window.addEventListener('scroll', function () {

    const scrollValue = window.scrollY;
    const bg = document.getElementById('night-parallax');
    const text = document.getElementById('parallax-text');

    // Move o fundo 0.5px para cada 1px de scroll (mais lento)
    bg.style.transform = `translateY(${scrollValue * 0.5}px)`;

    // text.style.transform = `translateY(${scrollValue}px)`;

});

window.addEventListener('load', () => {

    window.scrollBy( 0 , 1 );
    window.scrollBy( 0 , -1 );

});