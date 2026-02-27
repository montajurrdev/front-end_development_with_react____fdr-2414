let countNumber = document.getElementById("countNumber")
let minusBtn = document.getElementById("minusBtn")
let plusBtn = document.getElementById("plusBtn")



plusBtn.addEventListener("click", ()=>{
    let count = countNumber.innerHTML;
    if(count < 10){
        countNumber.innerHTML++;
        
    }
    else{
        plusBtn.setAttribute("disabled",true)
    }

})
minusBtn.addEventListener("click", ()=>{
    let count = countNumber.innerHTML;
    if(count > 0){
        countNumber.innerHTML--;
    }
        else{
        minusBtn.setAttribute("disabled",true)
    }

})