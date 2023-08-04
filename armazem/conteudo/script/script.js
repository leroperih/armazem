

function clickMen() {
nalin = document.querySelector("nav#links-socials")
contso = document.querySelector("div#container-nav")


    if ( nalin.style.display == 'none' ) {
    nalin = document.querySelector("nav#links-socials")
    contso = document.querySelector("div#container-nav")
    nalin.style.display = 'block'
    contso.style.backgroundColor = '#050505'
} else {
    nalin = document.querySelector("nav#links-socials")
    contso = document.querySelector("div#container-nav")
    nalin.style.display = 'none'
    contso.style.backgroundColor = '#05050500'
}
}