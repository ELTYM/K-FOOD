import {Alimentos} from "./data.js";

function click(condition) {
    let h = document.getElementsByClassName("container-vacio")[0];
    let index = document.getElementsByClassName("container-segute")[1].value;
    let actual = Alimentos[index];
    let salida;
    if (condition) {
        if (actual.Health) {
            salida = "correct";
        } else {
            salida = "incorrect";
        }
    } else {
        if (actual.Health) {
            salida = "incorrect";
        } else {
            salida = "correct";
        }
    }
    h.class = salida;
}

function next() {
    let index = document.getElementsByClassName("container-segute")[1].value;
    let actual = Alimentos[index + 1];
    document.getElementsByClassName("container")[0].innerHTML = '<h3>' + actual.Nombre+ '</h3>';
    document.getElementsByClassName("container-img")[0].src = actual.Imagen;
    document.getElementsByClassName("container-vacio")[0].class = "indicator";
    document.getElementsByClassName("container-segute")[1].innerHTML = '<div class="counter" id="counter">' + (index + 1) + '</div>';
}