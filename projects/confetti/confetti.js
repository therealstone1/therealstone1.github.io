let colors = ["blue","red","green"]
function makeConfetti(){
    let square = document.createElement("div")
    square.classList.add("confetti")
    document.body.appendChild(square)

    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    let rotation = Math.random() * 360

    let startRot = Math.random() * -60 + "deg"
    let endRot = Math.random() * 60 + "deg"

    square.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")"
    square.style.left = Math.random() * 1500 + "px"
    square.style.top = "0px"
    square.style.transform = "rotate("+ rotation +" deg)"

    square.style.setProperty("--startRot", startRot)
    square.style.setProperty("--endRot", endRot)

    function fall(){
        let fallFactor = 10
        square.style.top = parseInt(square.style.top) + fallFactor + "px"
        console.log(square.style.top)
        if (parseInt(square.style.top) > 1000) {
            square.style.top = "10px"
        }
    }
    setInterval(fall, 100)
}
setInterval(makeConfetti,200)