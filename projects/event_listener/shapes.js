let shapeType = 0
function createShapes(){
    if (shapeType == 2){
        let sharpes1 = document.createElement("div")
        sharpes1.classList.add("triangle")
        document.body.appendChild(sharpes1)
        console.log(shapeType)
        shapeType = -1
    }
    if (shapeType == 1){
        let sharpes2 = document.createElement("div")
        sharpes2.classList.add("square")
        document.body.appendChild(sharpes2)
        
        console.log(shapeType)
    }
    if (shapeType == 0 ){
        let sharpes3 = document.createElement("div")
        sharpes3.classList.add("hexagon")
        document.body.appendChild(sharpes3)
       
        console.log(shapeType)
    }
    shapeType += 1
}
document.addEventListener("mousedown", createShapes)