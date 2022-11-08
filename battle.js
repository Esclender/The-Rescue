const batlleBackgroundImage = new Image()
batlleBackgroundImage.src = './assets/Fondo de batalla.png'
const InventarioContainer = document.querySelector('.inventario')
const AttacksContainer = document.querySelector('.attacks-container')
const MensajeContainer = document.querySelector('.mensaje')
const mensaje = document.querySelector('.EscribirMensaje')
const barraDevidaActual = String(PlayerBar.clientWidth) + 'px'
const objetosDesaparecer = [EnemyBar,PlayerBar,playerName,EnemyName]

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




// contenedor de ataques
let ataques = []
const ataqueOne = new ataquesLista({vida:105,nombreAt:'zero',turno:0})
const ataqueTwo = new ataquesLista({vida:65,nombreAt:'Cuchilla',limite:5,turno: 1,elemento:document.createElement('button'),letras:8,image:'./assets/personaje2.png'})
const ataqueThree = new ataquesLista({vida:45,nombreAt:'Fire Ball',limite:10,turno:2,elemento:document.createElement('button'),letras:9})
const ataqueFour = new ataquesLista({vida:55,nombreAt:'Rayo',limite:10,turno:3,elemento:document.createElement('button'),letras:4})

ataques.push(ataqueOne,ataqueTwo,ataqueThree,ataqueFour)
for (let index = 1; index < ataques.length; index++) {
    let actual = ataques[index].elemento
    actual.innerHTML = ataques[index].nombreAtaque + ' (' + ataques[index].limite + ')'
    console.log(actual.innerHTML,ataques[index].nombreAtaque)
    AttacksContainer.appendChild(actual)
    
}


let finalAtaque = false
let turno = 1
let choice = {value: undefined}
let restar = false

//Lugares del Inventario batalla
function CrearInventarioBatalla() {
    
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







const SalirDeInventario = document.createElement('button')
SalirDeInventario.classList.add('salir')
SalirDeInventario.innerHTML = 'Salir'

let battleAnimationID ;
function animateBattle() {
    battleAnimationID = window.requestAnimationFrame(animateBattle)
    for (let i = 0; i < objetosDesaparecer.length; i++) {
        objetosDesaparecer[i].style.display = 'block'
    }
    battleBackground.draw()
    gsap.to('.atacks',{
        opacity:1,
        duration: 3
    })
    gsap.to('.life',{
        opacity:1,
        duration: 1
    })
    document.querySelector('.atacks').classList.remove('off')

    
    healthBar.draw()
    healthEnemyBar.draw()
    jugador.draw()
    Enemigo.draw()
    GneralEfect.draw()

    document.querySelectorAll('button').forEach((e) =>{ e.addEventListener('click', (e) =>{choice = {
        value: e.target.innerHTML}
        restar = true
        if (e.target.innerHTML != 'Inventario') {
            finalAtaque = true
        }
        })
    })

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
            }
            document.querySelector('.atacks').style.display ='flex'
     
            pelea(choice.value)
        }
    

            

        
    
}
function pelea(ataque) {
    //Ataque del Player
    if (restar) { 
        CrearInventarioBatalla()
        for (let i = 0; i < ataques.length ; i++) {
            if(ataque.slice(0,ataques[i].letras) ==  ataques[i].nombreAtaque ){
                if (turno == 1 ) {
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
                                gsap.delayedCall(2,() => {Scream.pause()})
                                gsap.delayedCall(2.5,() => {AnimationDamageEfecto(Enemigo,AtaquDefaultEfecct,4,10,false)}) 
                                gsap.delayedCall(.5,defaulter)
                                gsap.delayedCall(8, () => {
                                    let nombreactual = EnemyName.innerHTML
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
                                                EliminarZonasEnemigos(nombreactual)
                                                animate()
                                            });
                                            gsap.delayedCall(10,() => {ReUbicarZonasEnemigas(nombreactual)})
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
    for (let index = 0; index < LugaresEnInventarioBatalla.length; index++) {
        if (objeto.slice(0,LugaresEnInventarioBatalla[index].letras) == LugaresEnInventarioBatalla[index].nombreAtaque ) {
            if (PlayerBar.clientWidth < vidasPlayer[vidasPlayer.length - 1].max) {
                let actualImage = arrayDePociones[index]
                const ancho = PlayerBar.clientWidth
                const total =String(ancho + LugaresEnInventarioBatalla[index].vida)
                vidasPlayer[vidasPlayer.length - 1].vida = total + 'px'
                LugaresEnInventarioBatalla[index].limite -= 1
                LugaresEnInventarioBatalla[index].elemento.innerHTML =  LugaresEnInventarioBatalla[index].nombreAtaque + ' (' + LugaresEnInventarioBatalla[index].limite + ')' 
                LugaresEnInventarioBatalla[index].elemento.appendChild(actualImage)
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

function damage(total,index,array,vidaPersonaje,numero){
        if (total > 0){
            total = total - ataques[numero].vida
        }
       
            if (total > 0 ) {
                AnimationDamage()
                gsap.delayedCall(2, () => {vidaPersonaje[index].vida = String(total) + 'px'})
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
    console.log("animacion de ataque")
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
            AnimationDamageEfecto(GneralEfect,arrayDeEfectos[index].frame,4,10,true)
        }
        
    }
}

