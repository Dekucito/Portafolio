document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carrouse__image');
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

    function showImage(index) {
        if (index === currentIndex) return;

        images[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');

        currentIndex = index;

        images[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
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
});
