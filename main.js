let cool = document.getElementById("cool")
let pay = document.getElementById("pay")
let iContain = document.getElementById("iContain")
function playPay(){
    pay.play()
    console.log("test")
}
function chambers(){
    window.open("Chamber_of_reflection/Chamberofreflection.html", "_blank")
}
cool.addEventListener("click", playPay)
iContain.addEventListener("click",chambers)