let Alimentos = [
    {
        "Nombre": "Platano",
        "Health": true,
        "Imagen": "images/platanos.png",
        "Audio": "",
        "Indice": 0
    }, {
        "Nombre": "Manzana",
        "Health": true,
        "Imagen": "images/manzana.jpeg",
        "Audio": "",
        "Indice": 1
    }, {

    }
]

function click(condition) {
    let h = document.getElementsByClassName("container-vacio")[0];
    let index = document.getElementsByClassName("counter")[0].id;
    let actual = Alimentos[index];
    let salida;
    if (condition) {
        if (actual.Health) {
            salida = '"correct"';
        } else {
            salida = '"incorrect"';
        }
    } else {
        if (actual.Health) {
            salida = '"incorrect"';
        } else {
            salida = '"correct"';
        }
    }
    h.innerHTML = '<div class=' + salida + '> </div>';
}

function next() {
    let index = document.getElementsByClassName("counter")[0].id;
    index = parseInt(index, 10);
    let actual = Alimentos[index + 1];
    if (index < Alimentos.length){
        document.getElementsByClassName("container")[0].innerHTML = '<h3>' + actual.Nombre + '</h3>';
        document.getElementsByClassName("img-principal")[0].src = actual.Imagen;
        document.getElementsByClassName("container-vacio")[0].innerHTML = '<div class="indicator"> </div>';
        document.getElementsByClassName("counter")[0].id = '' + index + '';
    }
}