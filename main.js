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
    index = parseInt(index, 10);
    let actual = Alimentos[index + 1];
    if (index < Alimentos.length) {
        document.getElementsByClassName("container")[0].innerHTML = '<h3>' + actual.Nombre + '</h3>';
        document.getElementsByClassName("img-principal")[0].src = actual.Imagen;
        document.getElementsByClassName("container-vacio")[0].innerHTML = '<div class="indicator"> </div>';
        document.getElementsByClassName("counter")[0].id = '' + index + '';
        speech();
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