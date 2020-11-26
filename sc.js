var condicion = true;

function button(condicion){
    var element = document.getElementById('img');
    if(condicion){
        element.src='hola.jpg';
    }else{
        element.src = 'idea-1.png';
    }
    
}
//var algo = document.getElementsByClassName('container-segute')[0];

console.log(condicion)