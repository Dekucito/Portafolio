document.addEventListener("DOMContentLoaded", function() {
    var projectElement = document.querySelector('.project');
    var projectInfoElement = document.querySelector('.project__info');

    if (projectElement && projectInfoElement) {
        var projectHeight = projectElement.offsetHeight;
        projectInfoElement.style.marginTop = (projectHeight + 100) + 'px';
    }
});

const items = document.querySelectorAll('.project__contend-image');
const viewContainer = document.querySelector('.project__contend-view');

// Función para actualizar el contenedor de vista y aplicar la clase activa
function updateView(item) {
    const type = item.getAttribute('data-type');
    const src = item.getAttribute('data-src');

    // Comprobar si el contenido actual en el contenedor es el mismo
    const currentContent = viewContainer.firstChild;

    if (currentContent && currentContent.nodeType === 1) { // nodeType 1 es un nodo de elemento
        const currentSrc = currentContent.getAttribute('src');
        
        if (currentSrc === src) return;
    }

    viewContainer.innerHTML = '';

    // Crear y cargar el contenido según el tipo
    if (type === 'image') {
        const img = document.createElement('img');
        img.src = src;
        img.classList.add('project__view-image', 'project__contend-image-active'); // Añadimos ambas clases
        viewContainer.appendChild(img);
    } else if (type === 'video') {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${src}`;
        iframe.classList.add('project__view-video', 'project__contend-image-active'); // Añadimos ambas clases
        iframe.setAttribute('allowfullscreen', true);
        iframe.setAttribute('title', 'YouTube video player');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
        viewContainer.appendChild(iframe);
    }
}

// Configuración inicial para mostrar la primera imagen de la lista
if (items.length > 0) {
    updateView(items[0]);
}

// Añadir el evento de clic a cada elemento de la lista
items.forEach(item => {
    item.addEventListener('click', () => {
        updateView(item);
    });
});
