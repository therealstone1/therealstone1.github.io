function makeConfetti(){
    square = document.createElement("div")
    square.classList.add("confetti")
    l = Math.random()*100
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
    square.style.backgroundColor = "rgb("+ r + "," + g + "," + b +")"
    square.style.left = l + "vw"
    square.style.top = 0 + "px"
    document.body.appendChild(square)
}
function gravitas(){
    gravity = 100
    square.style.top = parseInt(square.sytle.top) + gravity + "px"
}
setInterval(makeConfetti,20)
setInterval(gravitas,100)