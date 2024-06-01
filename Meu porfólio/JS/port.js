document.addEventListener('DOMContentLoaded', function() {
    const hoverElements = document.querySelectorAll('.hover-element');
    const displayText = document.getElementById('displayText');

    hoverElements.forEach(element => {
        element.addEventListener('mouseover', function() {
            displayText.textContent = this.getAttribute('data-text');
        });

        element.addEventListener('mouseout', function() {
            displayText.textContent = '*Passe o mouse sobre os elementos acima ou clique para ver*';
        });
    });
});