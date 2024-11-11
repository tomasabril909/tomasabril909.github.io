document.getElementById('colorButton').addEventListener('click', function() {
    // Comprobar la clase actual del body y cambiarla
    if (document.body.classList.contains('black-theme')) {
        document.body.classList.remove('black-theme');
        document.body.classList.add('pink-theme');
    } else if (document.body.classList.contains('pink-theme')) {
        document.body.classList.remove('pink-theme');
        document.body.classList.add('white-theme');
    } else {
        document.body.classList.remove('white-theme');
        document.body.classList.add('black-theme');
    }
});
