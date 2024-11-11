(function() {
  // Inicializa EmailJS con tu user_id
  emailjs.init('i0L2uutTpfLOo50XP'); // Reemplaza 'YOUR_USER_ID' con tu ID de usuario de EmailJS

  // Selecciona el formulario y agrega un event listener para el submit
  document.querySelector('.container__form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Recolectar los datos del formulario
    var formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    // Enviar el formulario a EmailJS
    emailjs.send('service_3fw79i3', 'template_o04wpug', formData)
      .then(function(response) {
        alert('¡Tu mensaje ha sido enviado con éxito!');
        document.querySelector('.container__form').reset(); // Limpiar el formulario
      }, function(error) {
        alert('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.');
      });
  });
})();