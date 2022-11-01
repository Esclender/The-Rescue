const batlleBackgroundImage = new Image()
batlleBackgroundImage.src = './assets/Fondo de batalla.png'
const EnemyBar = document.querySelector('#EnemyBar')
const PlayerBar = document.querySelector('#playerBar')
const EnemyName = document.querySelector('.nickname-enemy')
const playerName = document.querySelector('.nickname')
const InventarioContainer = document.querySelector('.inventario')
const AttacksContainer = document.querySelector('.attacks-container')
const MensajeContainer = document.querySelector('.mensaje')
const mensaje = document.querySelector('.EscribirMensaje')
const barraDevidaActual = String(PlayerBar.clientWidth) + 'px'

const battleBackground = new sprite({position:{
    x:0,
    y:0},
    image: batlleBackgroundImage
})
const health = new Image()
health.src = './assets/sin nombre.png'
const healthBar = new sprite({
    position:{
        x:0 ,
        y: -80
    },
    image:health
})
const frameAtaquePlayer = new Image()
frameAtaquePlayer.src = './assets/Ataque.png'
const frameAtaqueEnemigo = new Image()
frameAtaqueEnemigo.src = './assets/AtaqueEnemigo.png'
let finalAtaque = false

let turno = 1

let ataques = []


const ataqueOne = new ataquesLista({vida:35,nombreAt:'zero',turno:0,})
const ataqueTwo = new ataquesLista({vida:45,nombreAt:'Cuchilla',limite:5,turno: 1,elemento:document.createElement('button'),letras:8})
const ataqueThree = new ataquesLista({vida:35,nombreAt:'Rayo',limite:10,turno:2,elemento:document.createElement('button'),letras:4})
ataques.push(ataqueOne,ataqueTwo,ataqueThree)
for (let index = 1; index < ataques.length; index++) {
    let actual = ataques[index].elemento
    actual.innerHTML = ataques[index].nombreAtaque + ' (' + ataques[index].limite + ')'
    console.log(actual.innerHTML,ataques[index].nombreAtaque)
    AttacksContainer.appendChild(actual)
    
}

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
        nombreMonster: 'juan'
    }

]

const Enemyhealth = new Image()
Enemyhealth.src = './assets/EnemyHealth.png'
const healthEnemyBar = new sprite({
    position:{
        x: 650 ,
        y: -80
    },
    image:Enemyhealth
})
let choice = {value: undefined}
let restar = false


const LugaresEnInventario =[]
const Lugar1 = new ataquesLista({vida:35,nombreAt:'Pocion grande',limite:5,elemento:document.createElement('button'),letras:13})

LugaresEnInventario.push(Lugar1)

for (let index = 0; index < LugaresEnInventario.length; index++) {
    let actual = LugaresEnInventario[index].elemento
    actual.innerHTML = LugaresEnInventario[index].nombreAtaque + ' (' + LugaresEnInventario[index].limite + ')'
    InventarioContainer.append(actual)
    
}


const SalirDeInventario = document.createElement('button')
SalirDeInventario.classList.add('salir')
SalirDeInventario.innerHTML = 'Salir'
InventarioContainer.appendChild(SalirDeInventario)


function animateBattle() {
    const battleId = window.requestAnimationFrame(animateBattle)
    battleBackground.draw()
    gsap.to('.atacks',{
        opacity:1,
        duration: 3
    })
    gsap.to('.life',{
        opacity:1,
        duration: 1
    })
    
    healthBar.draw()
    healthEnemyBar.draw()
    jugador.draw()
    Enemigo.draw()

    document.querySelectorAll('button').forEach((e) =>{ e.addEventListener('click', (e) =>{choice = {
        value: e.target.innerHTML}
        restar = true
        if (e.target.innerHTML != 'Inventario') {
        finalAtaque = true
        }
    
        })
    })

    PlayerBar.style.width = vidasPlayer[vidasPlayer.length - 1].vida
    
    for (let i = 0; i < vidasEnemys.length; i++) {
        if(EnemyName.innerHTML == vidasEnemys[i].nombreMonster) {
            EnemyBar.style.width = vidasEnemys[i].vida
        }
    }
        if( !EnemyBar.clientWidth <= 0 && !PlayerBar.clientWidth == 0) {
            pelea(choice.value)
        }else{
            if (EnemyBar.clientWidth <= 0) {
                
            }else if(PlayerBar.clientWidth <= 0){
                aparecerMensaje(playerName.innerHTML + " Ha muerto")

            }
        }
        
    
}
function pelea(ataque) {
    //Ataque del Player
    if (restar) { 
 
        for (let i = 0; i < ataques.length ; i++) {
            if(ataque.slice(0,ataques[i].letras) == ataques[i].nombreAtaque ){
                if (turno == 1 ) {
                    if (ataques[i].limite > 0) {
                    let total = EnemyBar.clientWidth;
                    ataques[i].limite -= 1
                    if (total > 0) {
                        total = total - ataques[i].vida
                        console.log("total es ", total)
                    }
                    
                    for (let i = 0; i < vidasEnemys.length; i++) {
                        if(EnemyName.innerHTML == vidasEnemys[i].nombreMonster) {
                            if (total > 0 ) {
                                vidasEnemys[i].vida = String(total) + 'px'
                            }else{
                                vidasEnemys[i].vida ='0px'
                                aparecerMensaje(EnemyName.innerHTML + " Ha muerto")
                                turno = 0
                                return;
                            }
                        }
                    
                    }
                    if (finalAtaque && turno == 1) {
                        jugador.image= frameAtaquePlayer
                        jugador.frames.max = 4
                        jugador.velocity = 10
                        jugador.width = jugador.image.width / jugador.frames.max
                        gsap.delayedCall(3,ataqueMonstruo)
                        gsap.delayedCall(1.5,defaulter)
                        
                    }
                    ataques[i].elemento.innerHTML = ataques[i].nombreAtaque + ' (' + ataques[i].limite + ')'

                    turno = 2
                    if (turno == 2) {
                        
                        gsap.delayedCall(5, () =>{
                            console.log(turno)
                            turno = 1
                            console.log(turno)
                        })
                        
                    }
                   }else{
                    aparecerMensaje('Usa otro ataque')
                   }
                }
                
                
            }else if(ataque == 'Inventario'){
                gsap.to('.container',{opacity:0})
                InventarioContainer.classList.add('aparecer2')
                gsap.to('.inventario',{opacity:1})

            }else if(ataque=='Salir'){
                gsap.to('.container',{opacity:1})
                InventarioContainer.classList.remove('aparecer2')
                gsap.to('.inventario',{opacity:0})
            }
            
        }
        curar(ataque)
    
        
        
        restar =  false  
       
    }

}

function ataqueMonstruo() {
    Enemigo.image = EnemigoImage
    const MonsterAttack = Math.floor(Math.random() * 3); 
    for (let i = 0; i < ataques.length; i++) {
        if( MonsterAttack == ataques[i].turno  ){
            const ancho = PlayerBar.clientWidth
            const total =String(ancho - ataques[i].vida)
            vidasPlayer[vidasPlayer.length - 1].vida = total + 'px'
        }
    }  
    finalAtaque = false 
}

function defaulter() {
    jugador.image= JugadorImage
    jugador.frames.max = 10
    jugador.velocity = 20
    jugador.width = jugador.image.width / jugador.frames.max
    Enemigo.image = frameAtaqueEnemigo
}

function curar(objeto) {
    for (let index = 0; index < LugaresEnInventario.length; index++) {
        if (objeto.slice(0,LugaresEnInventario[index].letras) == LugaresEnInventario[index].nombreAtaque ) {
            if (PlayerBar.clientWidth < vidasPlayer[vidasPlayer.length - 1].max) {
                const ancho = PlayerBar.clientWidth
                const total =String(ancho + LugaresEnInventario[index].vida)
                vidasPlayer[vidasPlayer.length - 1].vida = total + 'px'
                LugaresEnInventario[index].limite -= 1
                LugaresEnInventario[index].elemento.innerHTML = LugaresEnInventario[index].nombreAtaque + ' (' + LugaresEnInventario[index].limite + ')' 
            }else{
                aparecerMensaje('Tu vida esta al maximo')
            }


            
        }
        
    }
    
}

function aparecerMensaje(escribir) {
    gsap.to('.mensaje',{opacity:1})
    MensajeContainer.classList.add('aparecer')
    mensaje.innerHTML = escribir
    gsap.delayedCall(2,() => {MensajeContainer.classList.remove('aparecer');
    gsap.to('.mensaje',{opacity:0})})

    if (escribir[escribir.length - 1] == 'o') {
        gsap.delayedCall(4, () => {
            gsap.to('.mensaje',{opacity:1})
            MensajeContainer.classList.add('aparecer')
            mensaje.innerHTML = 'Tu recompensa es: '
            gsap.delayedCall(2,() => {MensajeContainer.classList.remove('aparecer');
            gsap.to('.mensaje',{opacity:0})})
        })

    }
}


