//check of code werkt ..
console.log('ikwerk');




//Functie voor het filteren op de categoriepagina - korteverhalen..
var filterbtn = document.getElementsByClassName("filter-btn");

var wrapper = document.getElementById("wrapper");

var wrapperChildren = wrapper.children;


//variabelen voor plusbutton
/*var notificatie = window.getComputedStyle(
    document.getElementById('.pulse'), ':before')*/



window.onload=function(){
    setTimeout(popUp, 8000);
}

function popUp (){
    document.body.classList.add("popup");
    

}




// hier worden alle buttons naar geluisterd een voor een gecontroleerd op classname
for (var i = 0; i < filterbtn.length; i++) {
    filterbtn[i].addEventListener('click', executeClassCheck);
}


// dit is de functie vervolgens word uitgevoerd vanuit de eventlistener
function executeClassCheck(event) {

    var btnClass = event.currentTarget.classList.item(1);

    var wrapperChildren = document.getElementById("wrapper").children;


    for (i = 0; i < wrapperChildren.length; i++) {

        var iets = wrapperChildren[i].classList.item(1)

        if (wrapperChildren[i].classList.item(1) !== btnClass) {
            wrapperChildren[i].style.display = "none";
        } else {
            wrapperChildren[i].style.display = "";
        }

        // bij deze functie word gekeken of de class matcht van de button met de verhalen
        // als dit klopt dan worden alleen de verhalen laten zien die matchen met de button
        

    }
    
}


//functie voor toevoegknop -van joost , voeg een class op de body toe is makkelijker
//codepen van joost - collections filter geel met zwart
var plusbutton = document.querySelector(".add");

plusbutton.addEventListener("click", toevoegen);

function toevoegen (){
    document.body.classList.toggle("toevoegen");

}



var sluiten = document.querySelector("aside img");

sluiten.addEventListener("click", sluiten);

function sluiten (){
    document.body.classList.remove("popup");
}





//Joost zegt doe het via css voeg een classlist toe met toggle (filter)

/*

function executeClassCheck(event) {

    var btnClass = event.currentTarget.classList.item(1);

    var wrapperChildren = document.getElementById("wrapper").children;


    for (i = 0; i < wrapperChildren.length; i++) {

        var iets = wrapperChildren[i].classList.item(1)

        if (wrapperChildren[i].classList.item(1) !== btnClass) {
            wrapperChildren[i].classList.toggle('filter')
        }

        // bij deze functie word gekeken of de class matcht van de button met de verhalen
        // als dit klopt dan worden alleen de verhalen laten zien die matchen met de button
        

    }
    
}

*/


       







    










