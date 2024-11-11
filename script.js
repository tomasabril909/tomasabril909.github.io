document.getElementById('colorButton').addEventListener('click', function() {
    // Obtiene el color actual del fondo
    var currentColor = document.body.style.backgroundColor;

    // Cambia entre los colores "negro", "rosa" y "blanco"
    if (currentColor === 'black') {
        document.body.style.backgroundColor = 'pink';
    } else if (currentColor === 'pink') {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'black';
    }
});
