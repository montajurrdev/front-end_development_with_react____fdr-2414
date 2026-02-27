// DOM = Document Object Model 

let tag = document.querySelector("h1")
let salam = document.querySelector(".salam")
let id = document.querySelector("#id")

console.log(tag);
console.log(salam);
console.log(id);

let monir = document.querySelector("#monir")

console.log(monir.innerHTML = "Hello Montajur");


// Button 

let heading = document.getElementById("heading")
let clickBtn = document.getElementById("clickBtn")

clickBtn.addEventListener("click", function () {
    heading.innerHTML = "function ready"
    heading.style.color = "teal"
    heading.style.fontSize = "50px"
    

    
    
}) 


function g  (){
salam.style.color = "red"


}
g() 


let red = document.getElementById("red")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
let teal = document.getElementById("teal")
let reset = document.getElementById("reset")

red.addEventListener("click", ()=>{
    document.body.style.background = "red";
} );
green.addEventListener("click", ()=>{
    document.body.style.background = "green";
} );
blue.addEventListener("click", ()=>{
    document.body.style.background = "blue";
} );
teal.addEventListener("click", ()=>{
    document.body.style.background = "teal";
} );
reset.addEventListener("click", ()=>{
    document.body.style.background = "transparent";
} );


function gray (){

        document.body.style.background = "gray";
  
};









