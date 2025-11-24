let div = document.getElementById("dividend")
let score = document.getElementById("score")
let shop1_1 = document.getElementById("shop1_1")
let shop1_2 = document.getElementById("shop1_2")
points = 0;
extra = 1;
function increaseScore(){
    points = points + extra
    console.log(points)
    score.innerText = points
}
function buyExtra(){
    if (points >= 9.5){
        extra = extra + 1
        points = points - 10
        console.log(points)
        console.log(extra)
        shop1_1.innerText = (extra - 1)
        score.innerText = points
    }
}

div.addEventListener("click", increaseScore)
shop1_2.addEventListener("click",buyExtra)