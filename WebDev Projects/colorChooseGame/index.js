//Helper Function
const pickColor = ()=>{
	const random =Math.floor(Math.random()* color.length);
	return color[random]
}


const generateRandomColor = ()=>{
	const r = Math.floor(Math.random() *256);
	const g = Math.floor(Math.random() *256);
	const b = Math.floor(Math.random() *256);
	return `rgb(${r}, ${g}, ${b})`;
}

const generateRandomColors = (num)=>{
     const output= [];
     for(let i=0 ;i<num ;i++){
     output.push(generateRandomColor());
     }
     return output;
}

let numSquare = 6;

color = generateRandomColors(numSquare);

// constants Declaration
const squares = document.querySelectorAll(".square");
const color_display =document.getElementById("color_display");
const message = document.getElementById("message");
const title =document.querySelector("h1");
const resetButton =document.getElementById("resetButton");
const easyButton =document.getElementById("easyButton");
const hardButton =document.getElementById("hardButton");


// winning Color
let pickedColor = pickColor();


//Color Display
color_display.textContent =pickedColor;

//reset Button Logic
resetButton.addEventListener("click" , function(){
	title.style.backgroundColor ="black";
	color= generateRandomColors(numSquare);
	pickedColor = pickColor();
	message.textContent="message";
	this.textContent= "New Color"
	color_display.textContent = pickedColor;
	for(let i =0 ;i<color.length ;i++){
		squares[i].style.backgroundColor= color[i];
	}
	
});

// Easy Button
easyButton.addEventListener("click" , function(){
	title.style.backgroundColor="black";
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquare = 3;
	color = generateRandomColors(numSquare);
	pickedColor = pickColor();
	color_display.textContent = pickedColor;
	message.textContent="message";
	for(let i=0;i<squares.length ;i++){
		if(color[i]){
			squares[i].style.backgroundColor =color[i];
		}
		else
			squares[i].style.display= "none";
	}
});

// Hard Button
hardButton.addEventListener("click" , function(){
	title.style.backgroundColor ="black";
	color = generateRandomColors(6);
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquare=6;
	color =generateRandomColors(numSquare);
	pickedColor =pickColor();
	color_display.textContent =pickedColor;
	message.textContent="message";
	for(let i=0; i<squares.length;i++){
		squares[i].style.backgroundColor=color[i];
		squares[i].style.display ="block";
	}
})



//Main Working
for(let i=0; i<color.length;i++){
	squares[i].style.backgroundColor = color[i];

squares[i].addEventListener("click", function(){
	const ClickedColor = this.style.backgroundColor;
	if(ClickedColor==pickedColor){
		message.textContent = "correct";
		CorrectColor(pickedColor);
		title.style.backgroundColor =pickedColor;
		resetButton.textContent="Play Again!"
	}
	else{
		this.style.backgroundColor="black";
		message.textContent ="Try Again";
	}
	
})

}

const CorrectColor = (color) => {
	squares.forEach((squ) =>{
		squ.style.backgroundColor= color;
	})
}
