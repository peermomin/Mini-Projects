const playSound = (key) => {
    let audio;
    switch (key) {
        case 'w':
            audio = new Audio("./sounds/crash.mp3");
            break;
        case 's':
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
        case 'd':
            audio = new Audio("./sounds/snare.mp3");
            break;
        case 'f':
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case 'j':
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case 'k':
            audio = new Audio("./sounds/tom-3.mp3");
            break;
        case 'l':
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        default:
            console.log(`Unmapped key: ${key}`);
            return;
    }
    audio.play();
}

let drumButtons = document.querySelectorAll('.drum');
for (let index = 0; index < drumButtons.length; index++) {
    drumButtons[index].addEventListener('click', function() {
        let key = this.innerHTML;
        playSound(key);
    });
}
