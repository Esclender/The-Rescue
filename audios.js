let sound = new Audio('./assets/audio/knight of aces.ogg')
let play = document.querySelector('.play')
let pause = document.querySelector('.pause')

play.addEventListener('click',() => {
    sound.play()
})

pause.addEventListener('click', () => {
    console.log("Pausa!")
    sound.pause()
})