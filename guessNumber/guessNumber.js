const form = document.querySelector("form")
const result = document.querySelector(".result")
let score = 100
const randomNumber = Math.floor((Math.random()*100)+1)
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const scoreInput = document.querySelector("#inputNum")
    const scoreValue = parseInt(scoreInput.value)
    scoreInput.style.borderColor = ""
    
    if(scoreValue > 100 || scoreValue < 1 || isNaN(scoreValue))
    {
        scoreInput.style.borderColor = "red"
        result.innerHTML = "Please enter valid number between 1 to 100"
    }
    else
    {
    if(scoreValue === randomNumber)
    {
        result.innerHTML = `You guessed correct and your score is ${score} <div>refresh to play again<div>`
        
    }
    else if(scoreValue < randomNumber)
    {
        --score
        result.innerHTML = "sorry! guess higher"
    }
    else if(scoreValue > randomNumber)
    {
        --score
        result.innerHTML = "sorry! guess lower"
    }
}
})