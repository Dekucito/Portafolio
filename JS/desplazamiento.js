// Selecciona todos los enlaces que tienen href="#contact"
document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el desplazamiento predeterminado
  
      // Selecciona el elemento de destino
      const targetElement = document.querySelector('#contact');
      
      // Configura la duración deseada en milisegundos
      const duration = 2000; // 1000 ms = 1 segundo
      
      // Obtén la posición de desplazamiento actual y la posición de destino
      const startPosition = window.pageYOffset;
      const targetPosition = targetElement.getBoundingClientRect().top;
      
      // Guarda el tiempo inicial
      let startTime = null;
  
      // Función para animar el desplazamiento
      function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Progreso entre 0 y 1
        
        // Calcula la posición actual en función de la progresión
        const ease = easeInOutQuad(progress);
        window.scrollTo(0, startPosition + targetPosition * ease);
        
        // Continua si el desplazamiento no ha terminado
        if (elapsedTime < duration) {
          requestAnimationFrame(scrollAnimation);
        }
      }
  
      // Función de easing para un desplazamiento más suave
      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      }
  
      // Inicia la animación de desplazamiento
      requestAnimationFrame(scrollAnimation);
    });
  });
  