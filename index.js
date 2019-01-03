
//de boventste buttons
//var buttons = document.querySelectorAll(".filter-btn")

//var categorie = document.getElementByClassName(".verhaal");


console.log ('ikwerk');



var filterbtn = document.querySelectorAll(".filter-btn");

var articleClass = document.getElementsByTagName("article")[0].className;

var wrapper =document.getElementById("articleWrap");

var wrapperChildren = wrapper.children;


//console.log(filterbtn)


function myFunction(event){

	    
	    switch (event) {
		case  "Rustige verhalen":
		articleClass = "rustigeverhalen"
		break;

		case  "Drukke verhalen":
		articleClass= "drukkeverhalen"
		break;

		case  "Minimalistische verhalen":
		articleClass ="minimalistischeverhalen"
		break;
	}

	




	for (var i=0 ; i< wrapperChildren.length; i++) {
		if (wrapperChildren[i].className !== articleClass){
		wrapperChildren[i].style.display = "none";
	}



 


 console.log(event.currentTarget.innerHTML);


}



}


function executeClassCheck (){


	

	if (articleClass=="rustigeverhalen"){
		wrapperChildren.className("drukkeverhalen").style.display="none";
		wrapperChildren.className("minimalistischeverhalen").style.display="none";
	}

	if (articleClass="drukkeverhalen"){
       wrapperChildren.className("rustigeverhalen").style.display="none";
        wrapperChildren.className("minimalistischeverhalen").style.display="none";
	}

	if (articleClass=="minimalistischeverhalen"){
		wrapperChildren.className("rustigeverhalen").style.display="none";
	    wrapperChildren.className("drukkeverhalen").style.display="none";
	}


}


for (var i = 0; i < filterbtn.length; i++){
         filterbtn[i].addEventListener('click', executeClassCheck);
     
     }

console.log(executeClassCheck)





console.log(articleClass)
console.log("hallo")






/*function resultaten (){
	if (categorie == document.getElementByClassName(".verhaal, .rustigeverhalen")) {
		categorie.style.display="block";
	}

	else if (categorie == document.getElementByClassName(".verhaal, .drukkeverhalen")){

categorie.style.display="block";

	}

		else if (categorie == document.getElementByClassName(".verhaal, .minimalistischeverhalen")){
      categorie.style.display="block";
		}
}

item.addEventListener ('click', resultaten);*/
