let clicker = document.getElementById("clicker")
let clicker2 = document.getElementById("clicker2")
let train = document.getElementById("train")

people = ["Chae ","Karm ","Sid "]

function makeTrain(){
    train.innerHTML = " "
    for(let i=0; i<people.length; i++){
        console.log(people[i])
        let car = document.createElement("div")
        car.textContent = people[i]
        car.classList.add("car")
        train.appendChild(car)
    }
}
function ADD(){
    let addition = document.getElementById("addition")
    let addItem = addition.value
    if (addItem){
        people.push(addItem)
        addition.value = " "
        makeTrain()
    }

}
function SUBTRACT(){
    people.pop()
    makeTrain()
}
makeTrain()
clicker.addEventListener("click",ADD)
clicker2.addEventListener("click",SUBTRACT)
