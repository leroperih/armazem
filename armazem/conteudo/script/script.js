

function sizeWindow() { 
liso = document.querySelector("div#links-social")
menu = document.querySelector("div#menu-social")

    if ( window.innerWidth > '600' ) {
    liso.style.display = 'block'
} else {
    liso.style.display = 'none'
}
}



function clickMenu() {
liso = document.querySelector("div#links-social")
conso = document.querySelector("div#container-social")

    if ( naso.style.display == 'none' ) {
    liso.style.display = 'block'
    conso.style.backgroundColor = '#050505'
} else {
    liso.style.display = 'none'
    conso.style.backgroundColor = '#05050500'
}
}