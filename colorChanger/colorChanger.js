const buttons = document.querySelectorAll(".buttons")
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        let computedStyle = window.getComputedStyle(button)
        let buttonColor = computedStyle.getPropertyValue("background-color")
        document.querySelector("body").style.backgroundColor = buttonColor
    })
})