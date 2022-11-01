var container = document.getElementById('premob');
var body = document.getElementById("body");
setTimeout(function() {
    container.classList.add('cerrar');
    body.classList.remove('lockscroll');
}, 2000);