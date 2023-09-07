// js for toggle menu
var menuitems= document.getElementById("menuitems");
menuitems.style.maxHeight = "0px";
function menutoggle()
{
	if(menuitems.style.maxHeight=="0px")
		{
			menuitems.style.maxHeight = "200px";
		}
	else{
		menuitems.style.maxHeight = "0px";
		
	}
};


// js for choose pictures of products


var productimg=document.getElementById("product-img");
var smallimg=document.getElementsByClassName("small-img");


smallimg[0].onclick = function(){
	productimg.src=smallimg[0].src;
	
}

smallimg[1].onclick = function(){
	productimg.src=smallimg[1].src;
	
}

smallimg[2].onclick = function(){
	productimg.src=smallimg[2].src;
	
}

smallimg[3].onclick = function(){
	productimg.src=smallimg[3].src;
	
}
// js for toggle form

var lf = document.getElementById("loginform");
var rg = document.getElementById("regiterform");
var ind = document.getElementById("indicator");


function Register() 
{
	
	rg.style.transform = "translateX(0px)";
	lf.style.transform = "translateX(0px)";
	ind.style.transform = "translateX(100px)";
}

function login() 
{
	
		rg.style.transform = "translateX(300px)";
	    lf.style.transform = "translateX(300px)";
		ind.style.transform = "translateX(0px)";
}













