var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo pudes imaginar, lo puedes crear!')
    .pauseFor(2500)
    .deleteChars(6)
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start();