let cashInAmount = document.getElementById("cashInAmount")
let logpassword = document.getElementById("logpassword")
let cashInBtn = document.getElementById("cashInBtn")
let incorrect = document.getElementById("incorrect")
let currentBalance = document.getElementById("currentBalance")




cashInBtn.addEventListener("click", function(){
    if (logpassword.value == "1") {
        
let amount = currentBalance.innerHTML + cashInAmount.value;
        currentBalance.innerHTML = amount;
        
        
    }
    else{
        incorrect.style.display = "block"
    }
    
    
})
 