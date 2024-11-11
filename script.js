function cambiarColor(color) {
    document.getElementById("body").style.backgroundColor = color;

    // Cambiar color del texto si el fondo es oscuro
    if (color === 'black') {
        document.body.style.color = 'white';
    } else {
        document.body.style.color = 'black';
    }
}
