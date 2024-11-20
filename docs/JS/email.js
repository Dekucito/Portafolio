(function() {
  // Inicializa EmailJS con tu user_id
  emailjs.init('i0L2uutTpfLOo50XP'); // Reemplaza 'YOUR_USER_ID' con tu ID de usuario de EmailJS

  // Configurar opciones de Toastr
  toastr.options = {
    progressBar: true,
    "positionClass": "toast-bottom-right", // Cambia la posición según tu preferencia
    timeOut: '5000', // 5 segundos
    extendedTimeOut: '2000', // Tiempo extra al pasar el mouse
  };

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
        // Mostrar mensaje de éxito con Toastr
        toastr.success('Pronto me pondré en contacto contigo.', '¡Mensaje enviado correctamente!');
        document.querySelector('.container__form').reset(); // Limpiar el formulario
      }, function(error) {
        // Mostrar mensaje de error con Toastr
        toastr.error('Por favor, intenta de nuevo.', 'Hubo un error al enviar tu mensaje.');
      });
  });
})();
