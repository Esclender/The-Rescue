const EnemyBar = document.querySelector('#EnemyBar')
const PlayerBar = document.querySelector('#playerBar')
const EnemyName = document.querySelector('.nickname-enemy')
const playerName = document.querySelector('.nickname')
const playerStats= document.querySelector('#jugador-stats')


//jugador
const jugadorDead = new Image()
jugadorDead.src = './assets/MuertePersonaje.png'
const jugadorDead2 = new Image()
jugadorDead2.src = './assets/Muerte-Playere.png'
const frameAtaquePlayer = new Image()
frameAtaquePlayer.src = './assets/Ataque.png'
const JugadorDMG = new Image()
JugadorDMG.src = './assets/personaje2.png'



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
        nombreMonster: 'cannibal',
        reward:40
    },
    monster2={
        vida: '300px',
        nombreMonster: 'Demonio gargola',
        reward: 180
        
    },
    monster3={
        vida: '300px',
        nombreMonster: 'Rey Ogro',
        reward:100
    },
    monster4={
        vida: '300px',
        nombreMonster: 'Lobo oscuro',
        reward:40
    },monster5={
        vida: '300px',
        nombreMonster: 'Goblin',
        reward:40
    },monster6={
        vida: '300px',
        nombreMonster: 'Rey fantasma',
        reward:400
    },monster6={
        vida: '400px',
        nombreMonster: 'Rey demonio',
        reward:1000
    }

]




//Efectos de ataque

const AtaquDefaultEfecct = new Image()
AtaquDefaultEfecct.src= './assets/DefaultAnimaciones.png'
const FireballFrame = new Image()
FireballFrame.src = './assets/Boladfuego.png'
const CuchillaFrame = new Image()
CuchillaFrame.src = './assets/cuchillaEffect.png'
const Rayo = new Image()
Rayo.src = './assets/Rayo3.png'


const GneralEfect= new sprite({
    position:{
        x:canvas.width / 2 - (-596) ,
        y:canvas.height / 2 - (-142)  
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
    },
    rayo={
        nombre: 'Rayo',
        frame: Rayo
    }
]







