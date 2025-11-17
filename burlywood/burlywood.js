wood = document.getElementById("burlywood")
function evilBurlywood(){
    burlywood.style.backgroundColor = "#AA5042";
}
function goodBurlywood(){
    burlywood.style.backgroundColor = "burlywood";
}

wood.addEventListener("mousedown",evilBurlywood)
wood.addEventListener("mouseup",goodBurlywood)
document.addEventListener("mousemove",function moveBurlywood(event){
    console.log(event.clientX, event.clientY)
    burlywood.style.left = (event.clientX -50) + "px"
    burlywood.style.top = (event.clientY -50) + "px"
})