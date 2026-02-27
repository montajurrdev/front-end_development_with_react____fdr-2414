let postArea = document.getElementById("postArea");
let inputPost = document.getElementById("postType");
let postAddBtn = document.getElementById("postAddBtn");


postAddBtn.addEventListener("click", function () {
//    let inputMonir = inputPost.value;

   let paragraph = document.createElement("h1")

   paragraph.innerHTML = inputPost.value;

   postArea.appendChild(paragraph);

   inputPost.value =''



});


