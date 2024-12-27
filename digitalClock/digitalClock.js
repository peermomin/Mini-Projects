let clock = document.querySelector("#clock")
setInterval(function(){
    let curentDate = new Date()
    clock.innerHTML = curentDate.toLocaleTimeString()
},1000)