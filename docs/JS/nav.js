let lastScrollTop = 0;
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const buttonJob = document.getElementById('buttonJob');
const navList = document.getElementById('navList');
const navItems = document.querySelectorAll('.nav__item');
const line = document.getElementById('line');
const navSvgs = document.querySelectorAll('.nav__svg');
const iconMenu = document.getElementById('iconMenu');
const body = document.body;
const html = document.documentElement; // Para agregar la clase también al html
const containerResponsive = document.querySelector('.container__responsive');
const itemContact = document.getElementById('itemContact');


window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo
        header.classList.remove('visible', 'scrolled');
        header.classList.add('hidden');
    } else {
        // Scroll hacia arriba
        header.classList.remove('hidden');
        header.classList.add('visible');
        if (scrollTop > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    lastScrollTop = scrollTop;
});









function addClass(){
    // Si no está activo, agregar las clases y bloquear el scroll
    header.classList.add('container__responsive');
    nav.classList.add('nav__responsive');
    buttonJob.classList.add('button--responsive');
    navList.classList.add('nav__list-responsive');
    navItems.forEach((item) => {
        item.classList.add('nav__item-responsive');
    });
    line.classList.add('line__responsive');
    navSvgs.forEach((svg) => {
        svg.classList.add('nav__svg-responsive');
    });
    iconMenu.classList.add('icon-menu--active');
    body.classList.add('no-scroll'); // Bloquear el scroll
    html.classList.add('no-scroll'); // Bloquear también el html
}

function removeClass(){
    // Si está activo, quitar las clases y desbloquear el scroll
    header.classList.remove('container__responsive');
    nav.classList.remove('nav__responsive');
    buttonJob.classList.remove('button--responsive');
    navList.classList.remove('nav__list-responsive');
    navItems.forEach((item) => {
        item.classList.remove('nav__item-responsive');
    });
    line.classList.remove('line__responsive');
    navSvgs.forEach((svg) => {
        svg.classList.remove('nav__svg-responsive');
    });
    iconMenu.classList.remove('icon-menu--active');
    body.classList.remove('no-scroll'); // Desbloquear el scroll
    html.classList.remove('no-scroll'); // Desbloquear también el html
}













// Agregar el evento de clic al icono del menú
iconMenu.addEventListener('click', () => {
    // Verificar si el menú está activo o no
    const isActive = iconMenu.classList.contains('icon-menu--active');

    if (isActive) {
        removeClass();
        // Verificar si la opción seleccionada fue itemContact

    } else {
        addClass();
    }
});

itemContact.addEventListener('click', () => {
    removeClass();
});

