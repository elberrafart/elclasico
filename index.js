let count1El = document.getElementById("team-1")
let count1 = 0

let count2El = document.getElementById("team-2")
let count2 = 0


function increment1() {
    count1 += 1
    count1El.textContent = count1
}

function increment2() {
    count2 += 1
    count2El.textContent = count2
}


// function increment() {
//     count += 1
//     countEl.textContent = count
// }

function save() {
    let score = document.getElementById("score-el").textContent
    let previousScore = document.getElementById("save-el")
    previousScore.textContent += score + " , "
    
    count1 = 0
    count1El.textContent = count1
    
    count2 = 0
    count2El.textContent = count2
}
