document.querySelector("button").addEventListener("click",function(){
	document.querySelector("body").style.background=`rgb(${Math.abs(Math.random())*256},${Math.abs(Math.random())*256},${Math.abs(Math.random())*256})`;
})