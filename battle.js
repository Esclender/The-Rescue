const batlleBackgroundImage = new Image()
batlleBackgroundImage.src = './assets/Fondo de batalla.png'
const battleBackground2 = new Image()
battleBackground2.src = './assets/Fondo-BtallaMpa2.png'
const battleBackground3 = new Image()
battleBackground3.src = './assets/Fondo-final.jpg'
const InventarioContainer = document.querySelector('.inventario')
const AttacksContainer = document.querySelector('.attacks-container')
const MensajeContainer = document.querySelector('.mensaje')
const mensaje = document.querySelector('.EscribirMensaje')
const barraDevidaActual = String(PlayerBar.clientWidth) + 'px'
const objetosDesaparecer = [EnemyBar,PlayerBar,playerName,EnemyName,play,pause]
const buttonsClick = new Audio('./assets/audio/Menu Selection Click.wav')
let totalDamage;
let resetAtaques = true

const battleBackground = new sprite({position:{
    x:0,
    y:0},
    image: batlleBackgroundImage
})

//Barras de vida
const health = new Image()
health.src = './assets/sin nombre.png'
const healthBar = new sprite({
    position:{
        x:0 ,
        y: -80
    },
    image:health
})

const Enemyhealth = new Image()
Enemyhealth.src = './assets/EnemyHealth.png'
const healthEnemyBar = new sprite({
    position:{
        x: 650 ,
        y: -80
    },
    image:Enemyhealth
})

pocion1 = new ataquesLista({vida:35,nombreAt: 'Pocion grande',limite:5,elemento:document.createElement('button'),letras:13,image: pocionBig.src})
pocion2 = new ataquesLista({vida:35,nombreAt: 'Pocion small',limite:5,elemento:document.createElement('button'),letras:12,image: pocionSmall.src})
pocion3 = new ataquesLista({vida:45,nombreAt: 'Pocion mediana',limite:0,elemento:document.createElement('button'),letras:12,image: pocionMedium.src})

LugaresPocionesGeneral.push(pocion1,pocion2,pocion3)
LugaresEnInventarioMapa.push(pocion1,pocion2)
function CrearInventarioEnmapa() {
    
    for (let index = 0; index < LugaresEnInventarioMapa.length; index++) {
        if (index == 0) {
            pocionContainer.innerHTML= ""
            cantidadDePocionesEninventario = []
        }
        let actual = document.createElement('div')
        cantidadLimitante.push(document.createElement('div'))
        cantidadDePocionesEninventario.push(LugaresEnInventarioMapa[index].limite)
        
        actual.classList.add('pociones-mapa')
        cantidadLimitante[index].innerHTML = cantidadDePocionesEninventario[index]
        actual.style.backgroundImage = LugaresEnInventarioMapa[index].url ;
        actual.append(cantidadLimitante[index])
        pocionContainer.append(actual)
        
    }
}




// contenedor de ataques
let ataques = []
const ataqueOne = new ataquesLista({vida:95,nombreAt:'zero',turno:0})
const ataqueTwo = new ataquesLista({vida:65,nombreAt:'Cuchilla',limite:5,turno: 1,elemento:document.createElement('button'),letras:8,image:'./assets/personaje2.png'})
const ataqueThree = new ataquesLista({vida:65,nombreAt:'Fire Ball',limite:10,turno:2,elemento:document.createElement('button'),letras:9})
const ataqueFour = new ataquesLista({vida:85,nombreAt:'Rayo',limite:5,turno:3,elemento:document.createElement('button'),letras:4})

ataques.push(ataqueOne,ataqueTwo,ataqueThree,ataqueFour)
function AtaquesBatalla() {
    for (let index = 1; index < ataques.length; index++) {
    let actual = ataques[index].elemento
    actual.innerHTML = ataques[index].nombreAtaque + ' (' + ataques[index].limite + ')'
    AttacksContainer.appendChild(actual)
    
}
}
AtaquesBatalla()


let finalAtaque = false
let turno = 1
let choice = {value: undefined,clase:undefined}
let restar = false

//Lugares del Inventario batalla
function CrearInventarioBatalla() {
    for (let index = 1; index < InventarioContainer.childElementCount; index++){
        let eliminar=InventarioContainer.childNodes[index]
        InventarioContainer.removeChild(eliminar)
    }
    for (let i = 0; i < LugaresEnInventarioBatalla.length; i++) { 
   
        for (let index = 0; index < arrayDePociones.length; index++) {
            if (LugaresEnInventarioBatalla[i] == LugaresPocionesGeneral[index].url) {
                
                let actualImage = arrayDePociones[index]
                let actual = document.createElement('button')
                actual.innerHTML =  LugaresPocionesGeneral[index].nombreAtaque + ' (' + LugaresPocionesGeneral[index].limite + ')'
                actual.appendChild(actualImage)
                InventarioContainer.append(actual)

            }

        } 
    }
    InventarioContainer.appendChild(SalirDeInventario)
}
let crearInventario = 0


const SalirDeInventario = document.createElement('button')
SalirDeInventario.classList.add('salir')
SalirDeInventario.innerHTML = 'Salir'

let battleAnimationID ;
function animateBattle() {
    battleAnimationID = window.requestAnimationFrame(animateBattle)
    for (let i = 0; i < objetosDesaparecer.length - 2; i++) {
        objetosDesaparecer[i].style.display = 'block'
    }
    if (resetAtaques) {
       ataques.forEach((e) => {
        switch (e.turno) {
            case 1:
                e.limite=5
                break;
            case 2:
                e.limite=10
                break;
            case 3:
                e.limite=10
                break;
        
            default:
                break;
        }
       })
       AtaquesBatalla()
       resetAtaques = false
    }

    if (background.image == mapa2) {
        battleBackground.position.y = -310
        battleBackground.image = battleBackground2
    }else if(background.image == mapa3){
        battleBackground.position.x = -90
        battleBackground.position.y = -610
        battleBackground.image = battleBackground3
    }

    Mapa1Soundtrack.pause()
    battleBackground.draw()
    gsap.to('.atacks',{
        opacity:1,
        duration: 3
    })
    gsap.to('.life',{
        opacity:1,
        duration: 1
    })
    gsap.to('#jugador-stats',{
        opacity:0,
        duration: 1
    })
    gsap.to('.boton-inventario-mapa',{
        opacity:0,
        duration: 1
    })
    gsap.to('.play-mapa',{
        opacity:0,
        duration: 1
    })
    gsap.to('.pause-mapa',{
        opacity:0,
        duration: 1
    })
    document.querySelector('.atacks').classList.remove('off')
    
    
    healthBar.draw()
    healthEnemyBar.draw()
    jugador.draw()
    Enemigo.draw()
    GneralEfect.draw()

    document.querySelectorAll('button').forEach((e) =>{ e.addEventListener('mouseover', (e) =>{ buttonsClick.play()})
    })


    document.querySelectorAll('button').forEach((e) =>{ e.addEventListener('click', (e) =>{choice = {
        value: e.target.innerHTML,clase:e.path[0]}
        turno = 1
        restar = true
        if (e.target.innerHTML != 'Inventario') {
            finalAtaque = true
        }
        })
    }

    )

    PlayerBar.style.width = vidasPlayer[vidasPlayer.length - 1].vida
    let indexEnemigoActual;
    for (let i = 0; i < vidasEnemys.length; i++) {
        if(EnemyName.innerHTML == vidasEnemys[i].nombreMonster) {
            indexEnemigoActual = i
            EnemyBar.style.width = vidasEnemys[i].vida
        }
    }
        if( !parseInt(vidasEnemys[indexEnemigoActual].vida.slice(0,3)) <= 0 && !PlayerBar.clientWidth == 0) {
            if (estado) {
              sound.play()  
            }
            for (let i = 0; i < objetosDesaparecer.length; i++) {
                objetosDesaparecer[i].style.display = 'block'
                objetosDesaparecer[objetosDesaparecer.length-2].style.display = 'flex'
                objetosDesaparecer[objetosDesaparecer.length-1].style.display = 'flex'
            }
            document.querySelector('.atacks').style.display ='flex'
            pelea(choice.value)
            
        }
    
}
function pelea(ataque) {
    
    //Ataque del Player
    if (restar){ 
        
        if (crearInventario == 0) {

            CrearInventarioBatalla()
            crearInventario = 1
        }
        

        for (let i = 0; i < ataques.length ; i++) {
            if(ataque.slice(0,ataques[i].letras) ==  ataques[i].nombreAtaque ){
                
                if (turno == 1 ) {
                    console.log('Ataque')
                    if (ataques[i].limite > 0) {
                        let total = EnemyBar.clientWidth;
                        ataques[i].limite -= 1

                    if (total > 0) {
                        total = total - ataques[i].vida
                        ElegirEfecto(ataque.slice(0,ataques[i].letras))
                    }
                    
                    for (let i = 0; i < vidasEnemys.length; i++) {
                        if(EnemyName.innerHTML == vidasEnemys[i].nombreMonster) {
                            if (total > 0 ) {
                                vidasEnemys[i].vida = String(total) + 'px'
                                gsap.delayedCall(1.5,defaulter)
                                
                            }else{
                                vidasEnemys[i].vida ='0px'
                                gsap.delayedCall(3,() => {aparecerMensaje(EnemyName.innerHTML + " Ha muerto")}) 
                                document.querySelector('.atacks').style.display ='none'
                                gsap.delayedCall(0.1,() => {Scream.play(); sound.pause()})
                                gsap.delayedCall(2.5,() => {Scream.pause()})
                                gsap.delayedCall(3,() => {AnimationDamageEfecto(Enemigo,AtaquDefaultEfecct,4,10,false)}) 
                                totalDamage = PlayerBar.clientWidth
                                gsap.delayedCall(.5,defaulter)
                                gsap.delayedCall(11, () => {
                                    let nombreactual = EnemyName.innerHTML
                                    gsap.to('.flash',{
                                        opacity:1,
                                        duration: 2,
                                        onComplete(){
                                            
                                            gsap.delayedCall(7,() => {
                                                console.log('x4000')
                                                cancelAnimationFrame(battleAnimationID);
                                                gsap.to('.flash',{
                                                    opacity: 0
                                                })
                                                gsap.to('#jugador-stats',{
                                                    opacity:1,
                                                    duration: 1
                                                })
                                                gsap.to('.boton-inventario-mapa',{
                                                    opacity:1,
                                                    duration: 1
                                                })
                                                for (let i = 0; i < objetosDesaparecer.length; i++) {
                                                    objetosDesaparecer[i].style.display = 'none'
                                                }
                                                
                                                setBattle.initiaded = false
                                                EliminarZonasEnemigos(nombreactual)
                                                cantidadLimitante.forEach((e,i) => {e.innerHTML= LugaresEnInventarioMapa[i].limite})
                                                LevelUp(EnemyName.innerHTML)
                                                resetAtaques = true
                                                animate()
                                            });
                                            gsap.delayedCall(100,() => {ReUbicarZonasEnemigas(nombreactual)})
                                        }
                                    })
                                })
                                turno = 0
                                return;
                            }
                        }
                    
                    }
                    if (finalAtaque && turno == 1) {
                        AnimationDamageEfecto(jugador,frameAtaquePlayer,4,10,true)
                        gsap.delayedCall(3,ataqueMonstruo)
                        gsap.delayedCall(1.5, defaulter)
                    }
                    ataques[i].elemento.innerHTML = ataques[i].nombreAtaque + ' (' + ataques[i].limite + ')'

                    turno = 2
                    if (turno == 2) {
                        gsap.delayedCall(5, () =>{
                            turno = 1
                        })
                        
                    }
                   }else{
                    aparecerMensaje('Usa otro ataque')
                   }
                }
                
                
            }else if(ataque == 'Inventario'){
                gsap.to('.attacks-container',{opacity:0})
                gsap.to('.boton-inventario',{opacity:0})
                InventarioContainer.classList.add('aparecer2')
                gsap.to('.inventario',{opacity:1})

            }else if(ataque=='Salir'){
                gsap.to('.attacks-container',{opacity:1})
                gsap.to('.boton-inventario',{opacity:1})
                InventarioContainer.classList.remove('aparecer2')
                gsap.to('.inventario',{opacity:0})
            }
            
        }
        curar(ataque)
    
        restar =  false  
       
    }

}

function ataqueMonstruo() {
    const MonsterAttack = Math.floor(Math.random() * 3); 
    for (let i = 0; i < ataques.length; i++) {
        if( MonsterAttack == ataques[i].turno  ){
            let total = PlayerBar.clientWidth;
        }

    }  
    damage(PlayerBar.clientWidth,vidasPlayer.length - 1,vidasEnemys,vidasPlayer,MonsterAttack)
    finalAtaque = false 
}

function defaulter() {
    jugador.image= JugadorImage
    jugador.frames.max = 10
    jugador.velocity = 20
    jugador.width = jugador.image.width / jugador.frames.max
    GneralEfect.image = AtaquDefaultEfecct

}

function curar(objeto) {
    for (let index = 0; index < LugaresPocionesGeneral.length; index++) {
        if (objeto.slice(0,LugaresPocionesGeneral[index].letras) == LugaresPocionesGeneral[index].nombreAtaque ) {
            if (PlayerBar.clientWidth < vidasPlayer[vidasPlayer.length - 1].max ) {
                if (LugaresPocionesGeneral[index].limite > 0) {
                                        
                    let actualImage = arrayDePociones[index]
                    const ancho = PlayerBar.clientWidth
                    const total =String(ancho + LugaresPocionesGeneral[index].vida)
                    vidasPlayer[vidasPlayer.length - 1].vida = total + 'px'
                    
  

                    if (InventarioContainer.childNodes[index+1].classList[0] != 'salir') {
                        LugaresPocionesGeneral[index].limite -= 1
                        InventarioContainer.childNodes[index+1].innerHTML =  LugaresPocionesGeneral[index].nombreAtaque + ' (' + LugaresPocionesGeneral[index].limite  + ')'
                        InventarioContainer.childNodes[index+1].appendChild(actualImage)
                    }
                
                }else{
                    aparecerMensaje('No tienes suficientes pociones')
                }
               

            }else{
                aparecerMensaje('Tu vida esta al maximo')
            }   
        }
        
    }
    
}

function aparecerMensaje(escribir) {
    if (MensajeContainer.childElementCount > 1) {
        MensajeContainer.removeChild(coin)
    }
    MensajeContainer.append(mensaje)
    gsap.to('.mensaje',{opacity:1})
    MensajeContainer.classList.add('aparecer')
    mensaje.innerHTML = escribir
    gsap.delayedCall(2,() => {MensajeContainer.classList.remove('aparecer');
    gsap.to('.mensaje',{opacity:0})})

    if (escribir[escribir.length - 1] == 'o') {
        gsap.delayedCall(4, () => {
            winSound.play()
            gsap.to('.mensaje',{opacity:1})
            let reward;
            let mostrarReward;
            let rewardActual = vidasEnemys.forEach((e,i) =>{
                if (EnemyName.innerHTML == e.nombreMonster) {
                    reward =  parseInt(lastFrame.player1.money) + e.reward
                    mostrarReward = String(e.reward)
                }
            })
            MensajeContainer.classList.add('aparecer')
            mensaje.innerHTML = 'Tu recompensa es: ' + mostrarReward 
            MensajeContainer.append(coin)
            lastFrame.player1.money = reward
            Dinero.innerHTML = lastFrame.player1.money
            gsap.delayedCall(2,() => {MensajeContainer.classList.remove('aparecer');
            gsap.to('.mensaje',{opacity:0});
            winSound.pause()})
        })

    }
}

function damage(total,index,array,vidaPersonaje,numero){
        if (total > 0){
            total = total - ataques[numero].vida
        }
       
            if (total > 0 ) {
                AnimationDamage()
                gsap.delayedCall(2, () => {vidaPersonaje[index].vida = String(total) + 'px'})
                totalDamage = PlayerBar.clientWidth
            }else if(index == vidasPlayer.length - 1){
                vidaPersonaje[index].vida ='0px'
                document.querySelector('.atacks').style.display ='none'
                aparecerMensaje("Derrota")
                AnimationDamageEfecto(jugador, jugadorDead2,7,10,true)
                gsap.delayedCall(1.5, () => {AnimationDamageEfecto(jugador, jugadorDead2,7,10,false)})
                gsap.delayedCall(8, () => {
                    gsap.to('.flash',{
                        opacity:1,
                        duration: 2,
                        onComplete(){
                            
                            gsap.delayedCall(4,() => {
                                cancelAnimationFrame(battleAnimationID);
                                gsap.to('.flash',{
                                    opacity: 0
                                })
                                for (let i = 0; i < objetosDesaparecer.length; i++) {
                                    objetosDesaparecer[i].style.display = 'none'
                                }
                                setBattle.initiaded = false
                                EliminarZonasEnemigos(EnemyName.innerHTML)
                                gsap.delayedCall(10, () => {
                                    ReUbicarZonasEnemigas();
                                })

                                animate()
                            });
                        }
                    })
                })
                turno = 0
                return;
            }
            
}

function AnimationDamage() {
    gsap.delayedCall(1,() => {Enemigo.position.x += -155})
    gsap.delayedCall(1.1,() => {Enemigo.position.x += 155})

}


function AnimationDamageEfecto(character,image,frames,velocity,animate) {
    character.image = image
    character.frames.max = frames
    character.velocity = velocity
    character.width = character.image.width  / character.frames.max
    character.animate = animate
}

function ElegirEfecto(nombreEfecto) {
    for (let index = 0; index < arrayDeEfectos.length; index++) {
        if (nombreEfecto == arrayDeEfectos[index].nombre) {
            Scream.play()
            AnimationDamageEfecto(GneralEfect,arrayDeEfectos[index].frame,10,10,true)
            gsap.delayedCall(2, () => {Scream.pause})
        }
        
    }
}

function LevelUp(nombre) {
    switch (nombre) {
        case 'Rey Ogro':
            document.querySelector('.next-level').classList.remove('off')
            break;
        case 'juan':
            document.querySelector('.next-level').classList.remove('off')
            break;
    
        default:
            break;
    }
}

