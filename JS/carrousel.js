document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carrouse__image');
    const textContainer = document.querySelector('.carrousel__text'); // Contenedor del texto
    const titleElement = document.querySelector('.carrousel__title');
    const descriptionElement = document.querySelector('.carrousel__description');
    const dotsContainer = document.querySelector('.carousel__dots');

    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel__dot');
        if (index === currentIndex) dot.classList.add('active');

        dot.addEventListener('click', () => {
            showImage(index);
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.carousel__dot');

    function initializeText() {
        const { title, description } = images[currentIndex].dataset;
        titleElement.textContent = title;
        descriptionElement.textContent = description;
    }

    function showImage(index) {
        if (index === currentIndex) return;

        // Aplica fade-out al contenedor de texto
        textContainer.classList.remove('fade-in');
        textContainer.classList.add('fade-out');

        // Cambia la imagen y el índice antes de que el texto termine de desvanecerse
        images[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        setTimeout(() => {
            currentIndex = index;

            // Cambia la nueva imagen y activa el punto correspondiente
            images[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');

            // Cambia el texto al de la nueva imagen
            const { title, description } = images[currentIndex].dataset;
            titleElement.textContent = title; // Actualiza el título
            descriptionElement.textContent = description; // Actualiza la descripción

            // Aplica fade-in para mostrar el nuevo texto
            textContainer.classList.remove('fade-out');
            textContainer.classList.add('fade-in');
        }, 500); // Este tiempo debe coincidir con la duración de la transición en CSS
    }

    function showNextImage() {
        const nextIndex = (currentIndex + 1) % images.length;
        showImage(nextIndex);
    }

    let carouselInterval = setInterval(showNextImage, 5000);

    function resetInterval() {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(showNextImage, 5000);
    }

    initializeText();
});
