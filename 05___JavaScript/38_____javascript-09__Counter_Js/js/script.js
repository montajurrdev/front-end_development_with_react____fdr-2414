let memberlist = ["Monir","Fuad","Farhad","Tfayel","Rafi","Jamal","Munna"]



// for (let i = 0; i < memberlist.length; i++) {
    
//     console.log(`Hello ${memberlist[i]}`);
    
    
// }

// memberlist.forEach((item)=>{
//     console.log(`Hello Mr. ${item}`);
    

// })

let voice =(memberName)=>{
    console.log(`Hello Mr. ${memberName}`);
    let utterance = new SpeechSynthesisUtterance(`Hello Mr. ${memberName}`)
    speechSynthesis.speak(utterance)
    

}

for (let i = 0; i < memberlist.length; i++) {
    voice(memberlist[i])

    
    
}