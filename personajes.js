//jugador
const jugadorDead = new Image()
jugadorDead.src = './assets/MuertePersonaje.png'
const frameAtaquePlayer = new Image()
frameAtaquePlayer.src = './assets/Ataque.png'
const JugadorDMG = new Image()
JugadorDMG.src = './assets/personaje2.png'



//Enemigos

//juan
const frameAtaqueEnemigo = new Image()
frameAtaqueEnemigo.src = './assets/AtaqueEnemigo.png'
const JuanDMG = new Image()
JuanDMG.src = './assets/Frames.png'
const JuanDead = new Image()
JuanDead.src ='./assets/FramesDead.png'



//vidas Enemgios (datos)

let vidasPlayer = [
    vida1= {
        vida: '300px',
        max: 300
    }
]
let vidasEnemys = [
    monster1={
        vida: '300px',
        nombreMonster: 'cannibal'
    },
    monster2={
        vida: '300px',
        nombreMonster: 'juan',
        dead:new Image().src = './assets/FramesDead.png'
        
    }

]

