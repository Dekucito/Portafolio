
let lastScrollTop = 0;
const header = document.querySelector('.container__header');

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
