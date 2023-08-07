var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


// console.log(body);

// body.style.background = "red";

// console.log(css);
// console.log(color1);
// console.log(color2);

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

    css.textContent = color1.value + "," + color2.value
}

// color1.addEventListener("input", setGradient);  // don't need `()` after function, because addEventListener 
                                                // automatically call it, adding `()` mean creating function. 

// color2.addEventListener("input", setGradient);


function loadGradient() {
    css.textContent =  color1.value + "," + color2.value  //"linear-gradient(to right, " + + ")";
} 

var rButton = document.getElementById("randomB");

function getRandomColor() {

    var colorLetter = "0123456789ABCDEF";
    var rColor = "#";


    for(var i=0; i<6; i++){
        rColor += colorLetter[Math.floor(Math.random()*16)];
    }

    return rColor;
}

function randomColor(){

    color1.value = getRandomColor();
    color2.value = getRandomColor();

    setGradient();

}

rButton.addEventListener("click", randomColor);