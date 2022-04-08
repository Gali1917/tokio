function all(textSet, imgSrc, button, textA, iFrame){
    const back = document.getElementById("back");
    const p = document.getElementById("pMain");
    const text = textSet;
    const img = document.getElementById("imgInf");
    img.src = imgSrc;
    const buttonMore = document.getElementById("buttonMore");
    buttonMore.textContent = button;
    p.textContent = text;
    const aLink = document.getElementById("infoA");
    aLink.href = textA;
    const i = document.getElementById("iFrame");
    i.src = iFrame;
    back.style.display = "block";
    back.style.top = "0";
    back.style.position = "fixed";
}
function ramen(){
    const textSet = "Si bien cada región de Japón tiene su propia receta de ramen, la preparación básica consiste en distintos tipos de fideos japoneses servidos en un caldo preparado comúnmente a base de hueso de cerdo o pollo y distintas verduras, sus sabores varían entre la pasta de mismo.";
    const imgSrc = "https://i.postimg.cc/YqRzjfr3/pexels-cats-coming-400.jpg";
    const button = "Tipos de Ramen";
    const a = "./src/infoRamen.html";
    const iFrame = "./src/infoRamenDesk.html";
    all(textSet, imgSrc, button, a, iFrame);
}
function sushi(){
    const textSet = "Es un plato típico de origen japonés basado en arroz aderezado con vinagre de arroz, azúcar y sal y combinado con otros ingredientes como pescados crudos, mariscos, verduras, etc. Este plato es uno de los más reconocidos de la gastronomía japonesa y uno de los más populares internacionalmente.";
    const imgSrc = "https://i.postimg.cc/Tw7VYypt/pexels-alexandr-podvalny400.jpg";
    const button = "Tipos de Sushi";
    const a = "./src/infoSushi.html";
    const iFrame = "./src/infoSushiDesk.html";
    all(textSet, imgSrc, button, a, iFrame);
}
function arroz(){
    const textSet = "El arroz japonés es el elemento esencial de la comida japonesa, hasta tal punto que su denominación gohan, sirve tanto para arroz blanco como para comida. En Japón se cultiva y come principalmente dos tipos de arroz.";
    const imgSrc = "https://i.postimg.cc/Hx6x07MX/pexels-richard-vijay-400.jpg";
    const button = "Tipos de Arroz";
    const a = "./src/infoArroz.html";
    const iFrame = "./src/infoArrozDesk.html";
    all(textSet, imgSrc, button, a, iFrame);
}
function entradas(){
    const textSet = "Que te parece una deliciosa entrada mientras esperas tu comida, o un magnifico postre para cerrar la velada? No te pierdas nuestros deliciosos snacks.";
    const imgSrc = "https://i.postimg.cc/mgVCph7Z/pexels-zeynep-aytekin-400.jpg";
    const button = "Tipos de Entradas";
    const a = "./src/infoEntradas.html";
    const iFrame = "./src/infoEntradasDesk.html";
    all(textSet, imgSrc, button, a, iFrame);
}
function bebidas(){
    const textSet = "Las bebidas típicas de Japón son parte de su cultura y del protocolo tradicional de la tierra del sol naciente. Son muchas, desde licores como el sake, derivado del arroz, hasta innumerables cervezas locales.";
    const imgSrc = "https://i.postimg.cc/XqckVLBd/pexels-christina-petsos-400.jpg";
    const button = "Tipos de Bebidas";
    const a = "./src/infoBebidas.html";
    const iFrame = "./src/infoBebidasDesk.html";
    all(textSet, imgSrc, button, a, iFrame);
}
function buttonClose(){
    const back = document.getElementById("back");
    back.style.display = "none";
}
