function makeConfetti(){
    square = document.createElement("div")
    square.classList.add("confetti")
    l = Math.random()*100
    t = Math.random()*100
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
    square.style.backgroundColor = "rgb("+ r + "," + g + "," + b +")"
    square.style.left = l + "vw"
    square.style.top = t + "vh"
    document.body.appendChild(square)
}
setInterval(makeConfetti,20)