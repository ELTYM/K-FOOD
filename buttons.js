import './data.js'
import * as data from "./data";

let actual = data.Alimentos[0];
function click(condition) {
    let h = document.getElementsByClassName("container-vacio")[0];
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
    actual = data.Alimentos[actual.Indice];
    document.getElementsByClassName("container")[0].innerHTML = '<h3>' + actual.Nombre+ '</h3>';
    document.getElementsByClassName("container-img")[0].innerHTML = '<img src=' + actual.Imagen + ' alt="alimento" title="alimento" class="img-principal">';
    document.getElementsByClassName("container-vacio")[0].innerHTML = '<div class="indicator"> </div>';
    window.load();
}