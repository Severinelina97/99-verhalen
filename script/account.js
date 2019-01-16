
//script voor account pagina


//opent het zoekveld
function openZoekveld (){
    document.body.classList.toggle("activeer");

}

var searchSubmit = document.getElementById("search_submit");

searchSubmit.addEventListener("click", openZoekveld);




// functie voor informatie pop-up
window.onload=function(){
    setTimeout(popUp, 10000);
}

function popUp (){
    document.body.classList.add("popup");


}

function sluitPopUp (){
    document.body.classList.remove("popup");
}

var sluiten = document.querySelector("aside img");

sluiten.addEventListener("click", sluitPopUp);


// het verwijderen van een verhaal

var minbutton = document.querySelector(".weg");


function verwijderen (){
    document.body.classList.add("verwijder");

}

minbutton.addEventListener("click", verwijderen);

console.log(verwijderen)



