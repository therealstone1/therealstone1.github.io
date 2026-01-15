// let falling = 0

function makeConfetti(){
    square = document.createElement("div")
    square.classList.add("confetti")
    let w = Math.floor(Math.random()*10)
    let h = Math.floor(Math.random()*10)
    let l = Math.random()*100
    let t = Math.random()*100
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    square.style.backgroundColor = "rgb("+ r + "," + g + "," + b +")"
    square.style.left = l + "vw"
    square.style.top = t + "px"
    square.style.width = parseInt(w) + "px"
    square.style.height = parseInt(h) + "px"
    document.body.appendChild(square)

    function fall(){
        falling = 50
        square.style.top = parseInt(square.style.top) + falling + "px"
            if (falling >= 500){
                falling = 0
            }
    }
    setInterval(fall, 400)
}
setInterval(makeConfetti,20)