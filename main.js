let cool = document.getElementById("cool")
let pay = document.getElementById("pay")
function playPay(){
    pay.play()
    console.log("test")
}
cool.addEventListener("click", playPay)