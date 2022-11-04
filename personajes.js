


//jugador
const jugadorDead = new Image()
jugadorDead.src = './assets/MuertePersonaje.png'
const jugadorDead2 = new Image()
jugadorDead2.src = './assets/Muerte-Playere.png'
const frameAtaquePlayer = new Image()
frameAtaquePlayer.src = './assets/Ataque.png'
const JugadorDMG = new Image()
JugadorDMG.src = './assets/personaje2.png'



//Enemigos

//juan (Datos y Frames)
const frameAtaqueEnemigo = new Image()
frameAtaqueEnemigo.src = './assets/AtaqueEnemigo.png'
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


//Efectos de ataque

const AtaquDefaultEfecct = new Image()
AtaquDefaultEfecct.src= './assets/DefaultAnimaciones.png'
const FireballFrame = new Image()
FireballFrame.src = './assets/Boladfuego.png'
const CuchillaFrame = new Image()
CuchillaFrame.src = './assets/cuchillaEffect.png'


const GneralEfect= new sprite({
    position:{
        x:canvas.width / 2 - (-596) ,
        y:canvas.height / 2 - (-159)  
    },
    image:AtaquDefaultEfecct,
    frames:{
        max:4
    },
    animate: true,
    velocity: 15
})

const arrayDeEfectos = [
    fire={
        nombre: 'Fire Ball',
        frame: FireballFrame
    },
    cuchilla={
        nombre: 'Cuchilla',
        frame: CuchillaFrame
    }
]







