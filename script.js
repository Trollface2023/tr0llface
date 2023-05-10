let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay:200, origin:'top'});
sr.reveal('.hero-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll-down', {delay:500, origin:'right'});
sr.reveal('.whitepaper-img', {delay:500, origin:'left'});
sr.reveal('.whitepaper-text', {delay:500, origin:'right'});
sr.reveal('.tokenomics-text', {delay:500, origin:'left'});
sr.reveal('.tokenomics-img', {delay:500, origin:'right'});
sr.reveal('.card', {delay:500, origin:'right'});
sr.reveal('.trollface4', {delay:500, origin:'left'});