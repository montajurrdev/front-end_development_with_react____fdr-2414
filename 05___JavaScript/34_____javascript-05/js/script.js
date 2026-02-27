let outputText = document.getElementById("outputText");
let inputText = document.getElementById("inputText");
let delBtn = document.getElementById("delBtn");

// Step 01
inputText.addEventListener("keyup", () => {
  if (inputText.value == "Delete") {
    delBtn.removeAttribute("disabled");
  } else delBtn.setAttribute("disabled", true);
});

// Step 02
delBtn.addEventListener("click", () => {
  outputText.style.display = "none";
  inputText.value = "";
});



// Odd And Even Number Check

let evenOddInp = document.getElementById("evenOddInp");
let evenOddBtn = document.getElementById("evenOddBtn");
let result = document.getElementById("result");

  // number = evenOddInp.value;

evenOddBtn.addEventListener("click", () => {
  let para = document.createElement("h1");
  result.appendChild(para);
  

  if (evenOddInp.value % 2 == 0) {
    para.innerHTML = evenOddInp.value + " " + "is a even number.";
  } else {
    para.innerHTML = evenOddInp.value + " " + "is a odd number.";
  }
});
