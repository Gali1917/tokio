function ramen(){
    const back = document.getElementById("back");
    const p = document.getElementById("pMain");
    const text = "Si bien cada región de Japón tiene su propia receta de ramen, la preparación básica consiste en distintos tipos de fideos japoneses servidos en un caldo preparado comúnmente a base de hueso de cerdo o pollo y distintas verduras, sus sabores varían entre la pasta de mismo."
    const img = document.getElementById("imgInf");
    img.src = "https://i.postimg.cc/YqRzjfr3/pexels-cats-coming-400.jpg";
    const buttonMore = document.getElementById("buttonMore");
    buttonMore.textContent = "Tipos de Ramen";
    p.textContent = text;
    back.style.display = "block";
    back.style.top = "0";
    back.style.position = "fixed";
}
function sushi(){
    const back = document.getElementById("back");
    const p = document.getElementById("pMain");
    const text = "Es un plato típico de origen japonés basado en arroz aderezado con vinagre de arroz, azúcar y sal y combinado con otros ingredientes como pescados crudos, mariscos, verduras, etc. Este plato es uno de los más reconocidos de la gastronomía japonesa y uno de los más populares internacionalmente."
    const img = document.getElementById("imgInf");
    img.src = "https://i.postimg.cc/Tw7VYypt/pexels-alexandr-podvalny400.jpg";
    const buttonMore = document.getElementById("buttonMore");
    buttonMore.textContent = "Tipos de Sushi";
    p.textContent = text;
    back.style.display = "block";
    back.style.top = "0";
    back.style.position = "fixed";
}
function arroz(){
    const back = document.getElementById("back");
    const p = document.getElementById("pMain");
    const text = "El arroz japonés es el elemento esencial de la comida japonesa, hasta tal punto que su denominación gohan, sirve tanto para arroz blanco como para comida. En Japón se cultiva y come principalmente dos tipos de arroz."
    const img = document.getElementById("imgInf");
    img.src = "https://i.postimg.cc/Hx6x07MX/pexels-richard-vijay-400.jpg";
    const buttonMore = document.getElementById("buttonMore");
    buttonMore.textContent = "Tipos de Arroz";
    p.textContent = text;
    back.style.display = "block";
    back.style.top = "0";
    back.style.position = "fixed";
}
function entradas(){
    const back = document.getElementById("back");
    const p = document.getElementById("pMain");
    const text = "Que te parece una deliciosa entrada mientras esperas tu comida, o un magnifico postre para cerrar la velada? No te pierdas nuestros deliciosos snacks."
    const img = document.getElementById("imgInf");
    img.src = "https://i.postimg.cc/mgVCph7Z/pexels-zeynep-aytekin-400.jpg";
    const buttonMore = document.getElementById("buttonMore");
    buttonMore.textContent = "Tipos de Entradas";
    p.textContent = text;
    back.style.display = "block";
    back.style.top = "0";
    back.style.position = "fixed";
}
function bebidas(){
    const back = document.getElementById("back");
    const p = document.getElementById("pMain");
    const text = "Las bebidas típicas de Japón son parte de su cultura y del protocolo tradicional de la tierra del sol naciente. Son muchas, desde licores como el sake, derivado del arroz, hasta innumerables cervezas locales."
    const img = document.getElementById("imgInf");
    img.src = "https://i.postimg.cc/XqckVLBd/pexels-christina-petsos-400.jpg";
    const buttonMore = document.getElementById("buttonMore");
    buttonMore.textContent = "Tipos de Bebidas";
    p.textContent = text;
    back.style.display = "block";
    back.style.top = "0";
    back.style.position = "fixed";
}
function buttonClose(){
    const back = document.getElementById("back");
    const mainSushi = document.getElementById("mainSushi");
    back.style.display = "none";

}
