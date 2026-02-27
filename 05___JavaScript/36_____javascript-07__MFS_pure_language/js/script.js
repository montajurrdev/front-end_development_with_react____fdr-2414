let loginNumber = document.getElementById("loginNumber")
let loginPass = document.getElementById("loginPass")
let loginBtn = document.getElementById("loginBtn")
let errorMsg = document.getElementById("errorMsg")
let loginScrn = document.getElementById("loginScrn")

loginBtn.addEventListener("click", ()=>{
    if(loginNumber.value == "1" && loginPass.value == "1"){
        loginScrn.style.display = "none"
        dashBoardScrn.style.display = "block"
        
    }
    else{
        errorMsg.style.display = "block"
    }
});

let dashBoardScrn = document.getElementById("dashBoardScrn");
let cashInPage = document.getElementById("cashInPage");
let cashOutPage = document.getElementById("cashOutPage");

let cashIn = function() {
dashBoardScrn.style.display = "none"
cashInPage.style.display = "block"



};

let cashOut = function() {
dashBoardScrn.style.display = "none"
cashOutPage.style.display = "block"



};


let cashInAmount = document.getElementById("cashInAmount");
let cashInPass = document.getElementById("cashInPass");
let cashInBtn = document.getElementById("cashInBtn");
let cashInMsg = document.getElementById("cashInMsg");
let currentBalance = document.getElementById("currentBalance");



cashInBtn.addEventListener("click", ()=>{
    if (cashInPass.value == "1" && cashInAmount.value <= 50000 && cashInAmount.value >= 50) {
        let x = currentBalance.innerHTML;
        let y = cashInAmount.value;

        let sum = parseFloat(x) + parseFloat(y);

        currentBalance.innerHTML = sum ;

        cashInMsg.innerHTML = "Cash In Successfull"
        cashInMsg.style.color = "green"
        cashInMsg.style.display = "block"

        homeBtn.style.display = "block"


        cashInPass.value = "";
        cashInAmount.value = "";
        
        
    }
    else{
        cashInMsg.style.display = "block"
    }

});




let cashOutBtn = document.getElementById("cashOutBtn")
let cashOutAmount = document.getElementById("cashOutAmount")
let cashOutPass = document.getElementById("cashOutPass")
let cashOutMsg = document.getElementById("cashOutMsg")
let currentBalanceC = document.getElementById("currentBalanceC")
let homeBtnC = document.getElementById("homeBtnC")




cashOutBtn.addEventListener("click", ()=>{
    if (cashOutPass.value == "1" && cashOutAmount.value <= currentBalanceC.innerHTML && cashOutAmount.value >= 50) {
        let balance = currentBalanceC.innerHTML - cashOutAmount.value;

        currentBalanceC.innerHTML = balance;


        cashOutMsg.innerHTML = "Cash Out Successfull"
        cashOutMsg.style.color = "green"
        cashOutMsg.style.display = "block"

        homeBtnC.style.display = "block"

        cashOutPass.value = "";
        cashOutAmount.value = "";
        
        
    }
    else{
        cashOutMsg.style.display = "block"
    }
})






