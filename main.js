let Alimentos = [
    {
        "Nombre": "Platano",
        "Health": true,
        "Imagen": "images/platanos.png",
        "Audio": ""
    }, {
        "Nombre": "Manzana",
        "Health": true,
        "Imagen": "images/manzana.jpeg",
        "Audio": ""
    }
];

function click(condition) {
    let h = document.getElementsByClassName("container-vacio")[0];
    let index = document.getElementsByClassName("counter")[0].id;
    let actual = Alimentos[index];
    let salida;
    if (condition) {
        if (actual.Health) {
            salida = '<div class="correct">\n <img src="img_pag/true.png" alt="" id="true-false" class="img-icon">\n </div>';
        } else {
            salida = '<div class="incorrect">\n <img src="img_pag/false.png" alt="" id="true-false" class="img-icon">\n </div>';
        }
    } else {
        if (actual.Health) {
            salida = '<div class="incorrect">\n <img src="img_pag/false.png" alt="" id="true-false" class="img-icon">\n </div>';
        } else {
            salida = '<div class="correct">\n <img src="img_pag/true.png" alt="" id="true-false" class="img-icon">\n </div>';
        }
    }
    h.innerHTML = salida;
}

function next() {
    let index = document.getElementsByClassName("counter")[0].id;
    let difficult = document.getElementsByClassName("difficult")[0].innerHTML;
    index = parseInt(index, 10);
    if (index + 1< Alimentos.length) {
        let actual = Alimentos[index + 1];
        document.getElementsByClassName("container")[0].innerHTML = '<h3>' + actual.Nombre + '</h3>';
        document.getElementsByClassName("img-principal")[0].src = actual.Imagen;
        document.getElementsByClassName("container-vacio")[0].innerHTML = '<div class="indicator"> </div>';
        document.getElementsByClassName("counter")[0].id = '' + (index + 1) + '';
        document.getElementsByClassName("difficult")[0].innerHTML = '' + (parseInt(difficult) - 1) + '';
        speech();
    } else {
        document.getElementsByClassName("container-main")[0].innerHTML = '<div class="container-title">\n' +
            '                <img src="img_pag/Escudo-UCN-Full-Color.png" alt="Titulo de prueba" class="img-principal">\n' +
            '            </div>\n' +
            '            <div class="container-vacio">\n' +
            '                <h3>Puntaje:</h3>\n' +
            '            </div>\n' +
            '            <div class="container-vacio">\n' +
            '                <a href="inicio.html" class="button-volver">Volver al inicio</a>\n' +
            '            </div>';
    }
}

function speech() {
    let speech = new SpeechSynthesisUtterance();
    let index = document.getElementsByClassName("counter")[0].id;
    let actual = Alimentos[index];
    speech.lang = "es-CL";
    speech.text = actual.Audio;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

function start(difficult){
    contain = document.getElementsByClassName("container-main")[0];
    contain.innerHTML = '<div class="container">\n' +
        '                <h3 id="parrafo">Platano</h3>\n' +
        '            </div>\n' +
        '            <!-- Pop de prueba-->\n' +
        '            \n' +
        '            <!-- FIN POP -->\n' +
        '            <div class="container-img">\n' +
        '                <img src="images/platanos.png" alt="platanos" title="platano xd" class="img-principal" id="img-principal">\n' +
        '            </div>\n' +
        '            <div class="sound">\n' +
        '                <a href="javascript:speech()" class="button-sound"><img src="img_pag/audio.png" alt="" class="icon"></a>\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="container-vacio">\n' +
        '                <div class="indicator">\n' +
        '\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="container-opcion">\n' +
        '                <a href="javascript:click(true)" class="button-opcion" id="buttonH">Saludable</a>\n' +
        '                <a href="javascript:click(false)" class="button-opcion" id="buttonNH">No Saludable</a>\n' +
        '            </div>\n' +
        '            <div class="container-segute">\n' +
        '                <a href="javascript:next()" class="button-segute"><img src="img_pag/sig.png" alt="" class="icon"> </a>\n' +
        '                <div class="counter" id="0"></div>\n' +
        '                <div class="difficult">' + difficult + '</div>\n' +
        '            </div>';
}