fih = document.getElementById("fih")
fih.style.left = "0px"


document.addEventListener("keypress",function(){
    console.log("fih")
    fih.style.left = parseInt(fih.style.left) + 5 + "px"
    if (parseInt(fih.style.left) > parseInt("500px")){
        fih.style.left = parseInt(fih.style.left) - 10 + "px"
    }
})