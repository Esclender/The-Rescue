let sound = new Audio('./assets/audio/Adventure Theme Intro.wav')
let intro = new Audio('./assets/audio/Battle in the winter.mp3')
let batallaSound = new Audio('./assets/audio/Battle in the winter.mp3')
let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let Scream = new Audio('./assets/audio/qubodup-GhostMoan01.mp3')
let Mapa1Soundtrack = new Audio('./assets/audio/Adventure Theme Intro.wav')
let winSound = new Audio('./assets/audio/win-music 3.wav')
let estado = true
let playMapa = document.querySelector('.play-mapa')
let pauseMapa = document.querySelector('.pause-mapa')

play.addEventListener('click',() => {
    batallaSound.play()
})

pause.addEventListener('click', () => {
    batallaSound.pause()
    estado = false
})


playMapa.addEventListener('click',() => {
    sound.play()
})

pauseMapa.addEventListener('click', () => {
    sound.pause()
    estado = false
})