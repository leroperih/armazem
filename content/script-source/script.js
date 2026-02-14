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