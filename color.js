var noSquare=6;
var color = randomColors(noSquare);
var pickedColor=pickColor(6);
var square = document.querySelectorAll(".square");
var colorD=document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton = document.querySelector("#button");
var modeButton = document.querySelectorAll(".mode");

colorD .textContent = pickedColor;

for(var i=0; i<modeButton.length; i++){
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
         this.classList.add("selected");
         this.textContent === "Easy" ? noSquare=3:  noSquare=6;
         reset();
	});
}

function reset(){
	color = randomColors(noSquare);
	pickedColor = pickColor(noSquare);
	colorD.textContent = pickedColor;
	for(var i=0; i<square.length; i++){
        if(color[i]){
        	square[i].style.background = color[i];
        }
        else{
        	square[i].style.background = "none";
        }
	} 
	message.textContent = "";
	resetButton.textContent = "NEW COLORS";
     h1.style.background = "steelblue";
	}

resetButton.addEventListener("click", function(){
    reset();
	

});

for(var i=0;i<square.length; i++)
{
	square[i].style.backgroundColor = color[i];
	square[i].addEventListener("click",function(){
		var colorClicked=this.style.backgroundColor;
		if(colorClicked===pickedColor){
			changeColor(colorClicked);
			message.textContent = "Correct!";
			resetButton.textContent="Play Again?";
			h1.style.backgroundColor=colorClicked;
		}
		else{
		    this.style.backgroundColor = "#232323";
		    message.textContent = "Try Again";
		}

	});
}
function changeColor(color){
	for(var i=0;i<noSquare;i++){
		square[i].style.backgroundColor = color;
	}
}

 function pickColor(m){
 	var random = Math.floor(Math.random() * m);
 	return color[random];
 }
function randomColors(num)
{
	var ar=[];
	for(var i=0; i<num; i++){
		ar.push(madeColor());
	}
	return ar;
}

function madeColor(){
	var r = Math.floor( Math.random() * 256);
	var b = Math.floor( Math.random() * 256);
	var g = Math.floor( Math.random() * 256);
	return "rgb(" +r+", " +b+ ", " +b+ ")";
}
