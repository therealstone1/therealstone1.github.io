fih = document.getElementById("fih")
fih.style.left = "0px"


document.addEventListener("keypress",function(){
    console.log("fih")
    if (event.key==="a"){
        fih.style.left = parseInt(fih.style.left) - 5 + "px"
    }
    if (event.key==="d"){
        fih.style.left = parseInt(fih.style.left) + 5 + "px"
    }
})