const sidebar = document.getElementById('sidebar');
    const asideOpen = document.getElementById('asideOpen');
    const asideClose = document.getElementById('asideClose');

    function handleResize() {
        if (window.innerWidth > 800) {
            sidebar.style.display = 'block'; 
            sidebar.classList.remove('collapsed');
        } else {
            sidebar.style.display = 'none'; // Ocultar el sidebar en pantallas menores a 800px
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    // Al hacer clic en el icono para abrir
    asideOpen.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.style.display = 'block'; 
        
        setTimeout(() => {
            sidebar.classList.remove('collapsed'); 
        }, 10); // Un retraso corto para permitir que el estilo se aplique

        asideOpen.style.display = 'none'; 
        asideClose.style.display = 'flex'; 
    });

    asideClose.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.add('collapsed'); 

        setTimeout(() => {
            sidebar.style.display = 'none'; 
        }, 300); 

        asideClose.style.display = 'none';
        asideOpen.style.display = 'flex';
    });