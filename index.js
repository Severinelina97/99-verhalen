
//de boventste buttons
//var buttons = document.querySelectorAll(".filter-btn")

//var categorie = document.getElementByClassName(".verhaal");


console.log ('ikwerk');



var filterbtn = document.getElementsByClassName(".filter-btn");



var wrapper =document.getElementById("wrapper");

var wrapperChildren = wrapper.children;




for (var i = 0; i < filterbtn.length; i++){
         filterbtn[i].addEventListener('click', executeClassCheck);}

     console.log(executeClassCheck);


function executeClassCheck (event){


	var btnClass = event.currentTarget.classList.item(2);

	var wrapperChildren = document.getElementById("articleWrap").children;



	for ( i=0; i < wrapperChildren; i++){

		var iets = wrapperChildren[i].classList.item(2)

		if (wrapperChildren[i].classList.item(2) !== btnClass ){
			wrapperChildren[i].style.display="none";
		}

		


	}

     

     console.log(event.currentTarget.innerHTML);
}



      
     
     
     












console.log("hallo")







