let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let sum = 0
let messageElem = document.getElementById("message-el")
let cardElem = document.getElementById("cards-el")
let sumElem = document.getElementById("sum-el")

let player = {
    name: "Ronak",
    chips: 145
}



let playerElem = document.getElementById("player-el")
playerElem.textContent = player.name + ": $" + player.chips


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard(){
    let randomNumber =  Math.floor( Math.random()*13 ) + 1
    if(randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function renderGame(){
    cardElem.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardElem.textContent += cards[i] + " "
    }
    sumElem.textContent = "Sum: " + sum
    
    if(sum <= 20){
        message = "Do you want to draw another card?"
    }
    else if(sum === 21){
        hasBlackJack = true
        message = "You've got BlackJack!"
    }
    else{
        isAlive = false
        message = "You're out of the game"
    }
    messageElem.textContent = message
    
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}