raise = document.getElementById("raise")
call  = document.getElementById("call")
bet = document.getElementById("bet")
pot = document.getElementById("pot")
cards = ["ace_spade","2_spade","3_spade","4_spade","5_spade","6_spade","7_spade","8_spade","9_spade","10_spade","j_spade","q_spade","k_spade","ace_heart","2_heart","3_heart","4_heart","5_heart","6_heart","7_heart","8_heart","9_heart","10_spade","j_spade","q_spade","k_spade","ace_club","2_club","3_club","4_club","5_club","6_club","7_club","8_club","9_club","10_club","j_club","q_club","k_club","ace_diamond","2_diamond","3_diamond","4_diamond","5_diamond","6_diamond","7_diamond","8_diamond","9_diamond","10_diamond","j_diamond","q_diamond","k_diamond"]
let total = 0
let allBets = 0

function raiseBet(){
    let fisch = prompt("enter the number you want to raise: ");
    let betAmount = parseInt(fisch, 10)
    console.log(betAmount)
    alert("you bet " + betAmount + " money")
    total += betAmount
    bet.textContent = total
}
raise.addEventListener("click",raiseBet)