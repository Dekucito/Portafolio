buttonLanguaje = document.getElementById('languaje-select')
listLanguaje = document.getElementById('list-languaje')

buttonLanguaje.addEventListener('click', (event) => {
    event.stopPropagation();
    listLanguaje.style.position = 'absolute';
    listLanguaje.style.display = listLanguaje.style.display === 'block' ? 'none' : 'block';

    if (listLanguaje.style.display === 'block'){
        buttonLanguaje.style.color = 'white';
    }else{
        buttonLanguaje.style.color  = 'rgb(152, 152, 159)';
    }
});

document.addEventListener('click', (event) => {
    if (listLanguaje.style.display === 'block' && !listLanguaje.contains(event.target) && !buttonLanguaje.contains(event.target)) {
        listLanguaje.style.display = 'none';
        buttonLanguaje.style.color = 'rgb(152, 152, 159)';
    }
});