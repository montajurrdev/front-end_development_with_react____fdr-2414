


let loginNumber = document.getElementById("loginNumber")
let loginPass = document.getElementById("loginPass")
let loginBtn = document.getElementById("loginBtn")
let errorMsg = document.getElementById("errorMsg")
let dashboard = document.getElementById("dashboard")
let loginScrn = document.getElementById("loginScrn")




loginBtn.addEventListener("click", ()=> {
    if (loginNumber.value == "1" && loginPass.value == "1") {
        
        dashboard.style.display= "block";
        loginScrn.style.display= "none";

        loginNumber.value = "" ;
         loginPass.value = "";
        
    }
    else{
        errorMsg.style.display = "block"
        
        
    };
    
});

// let cashInPart = document.getElementById("cashInPart")

// function cashIN () {
//     dashboard.style.display = "none"
//     cashInPart.style.display = "block"
    
    
// }





