let sound = new Audio('./assets/audio/knight of aces.ogg')
let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let Scream = new Audio('./assets/audio/qubodup-GhostMoan01.mp3')
let Mapa1Soundtrack = new Audio('./assets/audio/HonorLoopable.mp3')
let winSound = new Audio('./assets/audio/win-music 3.wav')
let estado = true
let playMapa = document.querySelector('.play-mapa')
let pauseMapa = document.querySelector('.pause-mapa')


play.addEventListener('click',() => {
    sound.play()
})

pause.addEventListener('click', () => {
    sound.pause()
    estado = false
})