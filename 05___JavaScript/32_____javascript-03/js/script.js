// Object
let x = {
  name: "Monir",
  area: "Dhanmondi",
};

console.log(x.area);

let {name,area} = {
  name: "Monir",
  area: "Dhanmondi",
};

console.log(name);      //  Destructure


// Function

function result (){
    console.log(5+5);
    
}
result()

let f = function(){
    console.log("Anonymous/Nameless function");
    

}
f()

let arrow = () => {
    console.log("This is arrow function");
    

}
arrow()



// For Loop


let array = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(array);


for (let i = 0; i <= array.length; i++) {
  console.log(array[i]);
}

for(let i =0; i <=4; i++){
    console.log(array[i]);
    
}

// Map Mane For Loop shortcut

console.log("map ");

array.map(monir=>{
    console.log(monir);
    
})

array.forEach(item=>{
    console.log(item);
    
})



