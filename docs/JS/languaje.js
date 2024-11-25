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

const textToChange = document.querySelectorAll("[data-section]");

const listLanguajes = document.querySelectorAll('.lang');
const changeLanguaje = async language => {
    const requestJson = await fetch(`./JS/languages/${language}.json`);
    const texts = await requestJson.json();
    
    for (const element of textToChange) { // Cambié textToChange por element
        const section = element.dataset.section;
        const value = element.dataset.value;

        element.innerHTML = texts[section][value];
    }
};

listLanguajes.forEach((element) => {
    element.addEventListener('click', (event) => {
        changeLanguaje(element.dataset.language);
    });
});
