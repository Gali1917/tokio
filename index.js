function openRamen(){
    const back = document.getElementById("back");
    const mainRamen = document.getElementById("mainRamen");
    back.style.display = "block";
    mainRamen.style.display = "block";
    back.style.top = "0";
    back.style.position = "fixed";
}
function openSushi(){
    const back = document.getElementById("back");
    const mainSushi = document.getElementById("mainSushi");
    back.style.display = "block";
    mainSushi.style.display = "block";
    back.style.top = "0";
    back.style.position = "fixed";
}

function buttonClose(){
    const back = document.getElementById("back");
    const mainSushi = document.getElementById("mainSushi");
    mainSushi.style.display = "none";

    back.style.display = "none";

}
