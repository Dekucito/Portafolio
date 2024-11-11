tippy('.iconTooltip', {
    content(reference) {
        // Extrae el valor de "data-nameIcon" para cada elemento
        return reference.getAttribute('data-nameIcon');
    },
    theme: 'tooltip',
    animation: 'scale-extreme',
    placement: 'bottom',
    fallbackPlacements: ['top'],
});