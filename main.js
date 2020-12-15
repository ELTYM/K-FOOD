let Alimentos = [
    {
        "Nombre": "Plátano",
        "Health": true,
        "Imagen": "https://static2.abc.es/media/bienestar/2019/07/25/platano-beneficios-kIyF--620x349@abc.jpg",
        "Audio": "EL plátano es bueno porque si"
    }, {
        "Nombre": "Manzana",
        "Health": true,
        "Imagen": "https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59144d795cafe812663c986a/razonescomermanzana-int.jpg",
        "Audio": "La manzana es buena"
    },{
        "Nombre": "Hamburguesa",
        "Health": false,
        "Imagen":"https://www.bolsaytrading.com/wp-content/uploads/2018/06/%C3%8Dndice-Big-Mac-2.jpg",
        "Audio": "Contiene mucha grasa dañina para el cuerpo"
    },{
        "Nombre": "Pizza",
        "Health": false,
        "Imagen": "https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg",
        "Audio": "Puede provocar aumento de peso"
    },{
        "Nombre": "Porotos",
        "Health": true,
        "Imagen": "https://cl-mycooktouch.group-taurus.com/image/recipe/545x395/porotos-con-riendas",
        "Audio": "Hace más fuerte a tu cuerpo"
    },{
        "Nombre": "Leche",
        "Health": true,
        "Imagen": "https://dam.cocinafacil.com.mx/wp-content/uploads/2019/06/Leche-descremada-3.jpg",
        "Audio": "Fortalece los huesos"
    },{
        "Nombre": "Tomate",
        "Health": true,
        "Imagen": "https://www.semana.com/resizer/vnHkfJBtuzoE6EdMt0DvM8r2tXA=/960x540/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/semana/UGEQV4FXHZBRRKOEY7WTKS7PHM.jpg",
        "Audio": "Son buenos para tu corazón"
    },{
        "Nombre": "Pescado",
        "Health": true,
        "Imagen": "https://www.hola.com/imagenes/cocina/tecnicas-de-cocina/20200525168569/tecnica-pescado-plancha/0-827-34/pescado-plancha-t.jpg",
        "Audio": "Ayuda a fortalecer a tu corazón"
    },{
        "Nombre": "Cereal",
        "Health": true,
        "Imagen": "https://www.dieteticaonline.es/blog/wp-content/uploads/2020/01/cereales-integrales-beneficios-y-cuales-son-alimentos-saludables.jpg",
        "Audio": "Este alimento no te hace engordar"
    },{
        "Nombre": "Huevo",
        "Health": true,
        "Imagen": "https://c.files.bbci.co.uk/16E5/production/_108916850_gettyimages-157603551.jpg",
        "Audio": "Contienen proteinas que benfician tu salud"
    },{
        "Nombre": "Papas fritas",
        "Health": false,
        "Imagen": "https://s1.eestatic.com/2015/03/10/cocinillas/Cocinillas_17008413_127305534_854x640.jpg",
        "Audio": "Contienen grasas que dañan tu salud"
    },{
        "Nombre": "Carne",
        "Health": true,
        "Imagen": "https://i.ytimg.com/vi/tU_xb-907NA/maxresdefault.jpg",
        "Audio": "Contienen proteinas que benfician tu salud"
    },{
        "Nombre": "Pan",
        "Health": true,
        "Imagen": "https://www.196flavors.com/wp-content/uploads/2016/03/pan-marraqueta-1-FP.jpg",
        "Audio": "hola"
    },{
        "Nombre": "Completo",
        "Health": false,
        "Imagen": "https://comidaschilenas.com/wp-content/uploads/2019/02/Receta-del-completo-italiano.jpg",
        "Audio": "Contiene mucha grasa que te hará engordar"
    },{
        "Nombre": "Galletas",
        "Health": false,
        "Imagen": "https://cdn.kiwilimon.com/recetaimagen/28774/th5-640x426-29249.png",
        "Audio": "Contienen mucha azúcar"
    },{
        "Nombre": "Chocolate",
        "Health": false,
        "Imagen": "https://s03.s3c.es/imag/_v0/770x420/d/2/c/Chocolates.jpg",
        "Audio": "Contiene mucha azucar que no beneficia tu salud"
    },{
        "Nombre": "Golosinas",
        "Health": false,
        "Imagen": "https://www.leotertenerife.com/wp-content/uploads/2019/08/Depositphotos_32891271_l-2015.jpg",
        "Audio": "Contiene mucha azúcar"
    },{
        "Nombre": "Bebida",
        "Health": false,
        "Imagen": "https://www.distribuidoralasvertientes.cl/wp-content/uploads/2017/05/DistribuidoraLasVertientes-Bebida15L-Desechable.png",
        "Audio": "Contiene mucha azúcar"
    },{
        "Nombre": "Brócoli",
        "Health": true,
        "Imagen": "https://elpoderdelconsumidor.org/wp-content/uploads/2016/11/brocoli.jpg",
        "Audio": "hola"
    },{
        "Nombre": "Queso",
        "Health": true,
        "Imagen": "https://www.bachillerato.uchile.cl/wp-content/uploads/2019/07/f155946-1-h.jpeg",
        "Audio": "hola"
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
        setTimeout(speech, 800);
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