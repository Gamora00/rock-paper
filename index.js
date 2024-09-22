const player = document.querySelector("#player")
const computer = document.querySelector("#computer")
const result = document.querySelector("#result")

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const auto = document.querySelector("#auto")

const win = document.querySelector("#win")
const lose = document.querySelector("#losses")
const tie = document.querySelector("#tie")


let winScore = 0;
let loseScore = 0
let tieScore = 0

let isAuto = false;
let intervalId;

auto.addEventListener('click',() =>{
    if(!isAuto) {
        invervalId = setInterval(()=>{
            const playerPick = randomNumber()
            players(playerPick)
        }, 1000)
        
        isAuto = true
    } 
    else {
        clearInterval(intervalId)
        isAuto = false
    }
    

})

let randomNumber = () =>{
    const choice = ["Rock", "Paper", "Scissors"]
    const index = Math.floor(Math.random() * choice.length)
    return choice[index]
}
let finalResult = (PlayerChoice,computerChoice)=>{
    if(PlayerChoice === computerChoice){
        tieScore+=1
        
        return tie.textContent = "Ties: " + tieScore, "Draw"
        
        
    }
    else if(PlayerChoice === "Rock" && computerChoice ==="Scissors" ||
    PlayerChoice === "Paper" && computerChoice === "Rock" ||
    PlayerChoice === "Scissors" && computerChoice === "Paper"
    ){
        winScore+=1
        return win.textContent = "Wins: " + winScore,  "You Wins!"
    }
    else{
        loseScore+=1
        return lose.textContent = "Losses: " + loseScore, "Computer Wins!"

    }
}

let paperEl = "Paper"
let rockEl = "Rock"
let scissorsEl = "Scissors"


let resetChoice = ()=>{
    return player.textContent = "Player: "
}

let players = (choices)=>{
    resetChoice()
    const PlayerChoice = choices
    player.textContent += PlayerChoice
    const computerEl = randomNumber()
    computer.textContent = "Computer: " + computerEl
    const gameResult = finalResult(PlayerChoice, computerEl)
    result.textContent ="Result: "
    result.textContent += gameResult
}


rock.addEventListener("click", ()=>{

    players(rockEl)
})

paper.addEventListener("click", ()=>{
  
    players(paperEl)
})
scissors.addEventListener("click", ()=>{

  players(scissorsEl)
})
