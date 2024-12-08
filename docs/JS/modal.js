document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los elementos del DOM
    const modalVideo = document.querySelector(".modal__video");
    const closeModal = document.querySelector(".close-btn");
    const buttonVideo = document.getElementById("buttonVideo");
    const iframe = modalVideo.querySelector("iframe");

    // Mostrar el modal y bloquear el scroll usando un overlay
    buttonVideo.addEventListener("click", () => {
        modalVideo.style.display = "flex"; // Mostrar el modal
        document.addEventListener("wheel", preventScroll, { passive: false }); // Bloquear scroll
        document.addEventListener("keydown", preventKeyScroll); // Bloquear scroll con teclado
    });

    // Función para cerrar el modal y restaurar el scroll
    const closeModalHandler = () => {
        modalVideo.style.display = "none"; // Ocultar el modal
        document.removeEventListener("wheel", preventScroll); // Restaurar scroll
        document.removeEventListener("keydown", preventKeyScroll); // Restaurar scroll con teclado
        iframe.src = iframe.src; // Detener el video reiniciando src
    };

    // Cerrar modal al hacer clic en el botón de cerrar
    closeModal.addEventListener("click", closeModalHandler);

    // Cerrar modal al hacer clic fuera del contenido
    modalVideo.addEventListener("click", (e) => {
        if (e.target === modalVideo) {
            closeModalHandler();
        }
    });

    // Bloquear eventos de scroll
    function preventScroll(e) {
        e.preventDefault();
    }

    // Bloquear scroll con teclado (flechas, barra espaciadora, etc.)
    function preventKeyScroll(e) {
        const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // Teclas que hacen scroll
        if (keys.includes(e.keyCode)) {
            e.preventDefault();
        }
    }
});
