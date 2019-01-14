

//script voor droom verhaal





function openZoekveld (){
    document.body.classList.toggle("activeer");

}

var searchSubmit = document.getElementById("search_submit");

searchSubmit.addEventListener("click", openZoekveld); 






//het toevoegen van een verhaal

var plusbutton = document.querySelector(".add");

plusbutton.addEventListener("click", toevoegen);

function toevoegen (){
    document.body.classList.toggle("toevoegen");

}



// functie voor informatie pop-up
window.onload=function(){
    setTimeout(popUp, 20000);
}

function popUp (){
    document.body.classList.add("popup");


}

function sluitPopUp (){
    document.body.classList.remove("popup");
}

var sluiten = document.querySelector("aside img");

sluiten.addEventListener("click", sluitPopUp);





// voor button "nog niet alles gelezen"

var onAf = document.querySelector(".on-af")

onAf.addEventListener("click",veranderButton);

function veranderButton (){
    onAf.classList.toggle("geklikt");

}

