let audio = document.getElementById("COF");
let reflect = document.getElementById("reflect")
function reflection(){
    reflect.textContent = 'Reflect on your actions'
    audio.play();
    console.log("10394")  
}
document.addEventListener("click", reflection)
document.addEventListener("keypress", reflection)