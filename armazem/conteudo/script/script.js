div_dis_op = document.querySelector("div#header-container-links")

function clickMen() {

  if ( div_dis_op.style.display == 'none' ) {
    div_dis_op = document.querySelector("div#header-container-links")
    div_dis_op.style.display = 'block'
  } else {
    div_dis_op = document.querySelector("div#header-container-links")
    div_dis_op.style.display = 'none'
  }
}