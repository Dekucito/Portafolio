tippy('.iconTooltip', {
    content(reference) {
        // Extrae el valor de "data-nameIcon" para cada elemento
        const content = reference.getAttribute('data-nameIcon');
        // Si no hay contenido, retorna null para evitar mostrar el tooltip
        return content ? content : null;
    },
    theme: 'tooltip',
    animation: 'scale-extreme',
    placement: 'bottom',
    fallbackPlacements: ['top'],
    onShow(instance) {
        // Si el contenido es null, cancela el tooltip
        return instance.props.content !== null;
    },
});
