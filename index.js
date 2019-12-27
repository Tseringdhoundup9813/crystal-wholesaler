
// image moving animation
var img = ["images/aragonite.png","images/blue.png","images/white.png"]


var bgimg = document.getElementById('bgimg');
var a = 0;
window.addEventListener('load',function(){
		var time = setInterval(function(){

		bgimg.src = img[a];
		a+= 1;
		if(a == 3){
			a = 0;
		}
		bgimg.style.transition ="all 5s";
		bgimg.style.transform ="translateX(-50px)";
		bgimg.style.opacity ="0.9";

	
},3000)

})

// menu



const menu = document.querySelector('.menu');
const header = document.querySelector('header ul');
const close = document.querySelector('#close');
console.log(header);
	menu.addEventListener('click',function(){
		header.style.display ="flex";
});


close.addEventListener('click',function(){
	header.style.display ="none";
})
		

	

