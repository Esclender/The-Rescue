let sound = new Audio('./assets/audio/knight of aces.ogg')
let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let Scream = new Audio('./assets/audio/Goblin Scream.wav')
let estado = true

play.addEventListener('click',() => {
    sound.play()
})

pause.addEventListener('click', () => {
    sound.pause()
    estado = false
})