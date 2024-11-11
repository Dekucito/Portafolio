const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    // Cargar preferencia del modo desde localStorage
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
        body.classList.add('dark');
        // Agregar --dark a todos los elementos con clase
        document.querySelectorAll('[class]').forEach(element => {
            element.classList.forEach(className => {
                element.classList.add(`${className}--dark`);
            });
        });
        document.getElementById('lightMode').style.display = 'none';
        document.getElementById('darkMode').style.display = 'block';
    }

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');

        // Agregar o eliminar la clase --dark de todos los elementos con clase
        document.querySelectorAll('[class]').forEach(element => {
            element.classList.forEach(className => {
                if (body.classList.contains('dark')) {
                    element.classList.add(`${className}--dark`);
                } else {
                    element.classList.remove(`${className}--dark`);
                }
            });
        });

        // Guardar preferencia en localStorage
        if (body.classList.contains('dark')) {
            localStorage.setItem('mode', 'dark');
            document.getElementById('lightMode').style.display = 'none';
            document.getElementById('darkMode').style.display = 'block';
        } else {
            localStorage.setItem('mode', 'light');
            document.getElementById('lightMode').style.display = 'block';
            document.getElementById('darkMode').style.display = 'none';
        }
    });










  
   
    


