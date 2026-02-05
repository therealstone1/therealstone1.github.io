let clicker = document.getElementById("clicker")
let clicker2 = document.getElementById("clicker2")
let train = document.getElementById("Train")
people = ["Chae ","Karm ","Sid "]
function ADD(){
    let addition = document.getElementById("addition")
    let addItem = addition.value
    if (addItem){
        people.push(addItem)
        let cart = document.body.train.createElement("div")
        cart.classList.add("car")
        document.body.train.appendChild(cart)
        console.log(people)
        addition.value = " "
    }

}
function SUBTRACT(){
    people.pop()
    console.log(people)
}
clicker.addEventListener("click",ADD)
clicker2.addEventListener("click",SUBTRACT)
