

// GLOBAL VARIABLES _______________________________________________________________________________


    const botao = document.querySelector('div#container-burge');
    const linso = document.querySelector("div#container-linso");









window.addEventListener('load', () => {

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);

    const eventoResize = new Event('resize');
    window.dispatchEvent(eventoResize);

});






// #########################################################################################
//  MENU BURGER
// #########################################################################################
    const container_burger = document.querySelector("div#container-burge");
    const settings_list = document.querySelector("div#container-burge > div:nth-of-type(2)");
// #########################################################################################

// document.addEventListener('click', function (evento) {
//     // safety: ensure elements exist before accessing contains/classList
//     const clickedInsideBotao = botao && botao.contains(evento.target);
//     const clickedInsideLinso = linso && linso.contains(evento.target);
//     if (!clickedInsideBotao && !clickedInsideLinso) {
//         if (linso && linso.classList)
//             linso.classList.remove('openBurge');
//     }
// })

function ClickBurge() {
    if (linso && linso.classList)
        settings_list.classList.toggle('show-settings');


}









// #########################################################################################
//  PARALAX EFFECT
// #########################################################################################
    const parallaxWrap = document.getElementById('wrap-parallax');
    const parallaxText = document.getElementById('parallax-text');
// #########################################################################################

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY || window.pageYOffset;

    if (parallaxWrap) {
        parallaxWrap.style.transform = `translateY(${scrolled * 0.2}px) scale(1.1)`;
    }

    if (parallaxText) {
        parallaxText.style.transform = `translateY(${100 + scrolled * 0.18}px)`;
    }



});










// #########################################################################################
//  STUDY IMAGE ANIMATION
// #########################################################################################
    const all_container_study_img = document.querySelectorAll('div.container-study-elements');
// #########################################################################################

all_container_study_img.forEach(container_study_image => {

    const imagem = container_study_image.querySelector('img');

    if (imagem) {
        imagem.style.transition = 'transform 1s linear';
        imagem.style.transform = 'scale(1)';

        container_study_image.addEventListener('mouseenter', () => {
            imagem.style.transform = 'scale(1.1)';
        });

        container_study_image.addEventListener('mouseleave', () => {
            imagem.style.transform = 'scale(1)';
        });
    }
});














// #########################################################################################
//  SOCIAL BAR RESPONSIVITY
// #########################################################################################
    const social_bar = document.querySelector("div#bg-social-bar");
    const social_bar_lesro_div = document.querySelector("div#bg-social-bar > div:nth-of-type(1)");
    const social_bar_links_div = document.querySelector("div#bg-social-bar > div:nth-of-type(2)");
    const container_burge_social_links = document.querySelector("div#container-burge div#container-linso");
// #########################################################################################

window.addEventListener('resize', () => {
    // 1. Pega as larguras REAIS e ATUAIS no momento do redimensionamento (.width)
    const social_bar_width = social_bar.getBoundingClientRect().width;
    social_bar_links_div.style.display = "flex";
    const social_bar_div_01_width = social_bar_lesro_div.getBoundingClientRect().width;
    const social_bar_div_02_width = social_bar_links_div.getBoundingClientRect().width;

    // Se a barra principal sumir ou for zero, evita divisão por zero
    if (social_bar_width === 0) return;

    // 2. Calcula as porcentagens com base nos valores atuais
    const social_bar_div_01_percent = (social_bar_div_01_width / social_bar_width) * 100;
    const social_bar_div_02_percent = (social_bar_div_02_width / social_bar_width) * 100;

    const social_bar_consume_percent = social_bar_div_01_percent + social_bar_div_02_percent;

    // 3. Usa Math.round para evitar problemas com números quebrados (ex: 49.999px)
    if (Math.round(social_bar_consume_percent) > 80) {
        social_bar_links_div.style.display = "none";
        container_burge_social_links.style.display = "flex";
    } else {
        social_bar_links_div.style.display = "flex";
        container_burge_social_links.style.display = "none";
    }

    const footer = document.querySelector("footer");

    footer.innerHTML = `estão consumindo extamente: ${social_bar_consume_percent}% do social-bar`;

});