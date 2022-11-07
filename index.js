const personaje = new Image()
personaje.src= './assets/Mi proyecto.png'
const personajeRigth = new Image()
personajeRigth.src= './assets/Mi proyecto2.png'
const personajeleft = new Image()
personajeleft.src= './assets/mi-proyecto-3.png'
const personajeup = new Image()
personajeup.src= './assets/Mi proyecto4.png'



let lastMover = 1

const keys ={
    w:{
        pressed:false
    },
    a:{
        pressed:false
    },
    s:{
        pressed:false
    },
    d:{
        pressed:false
    }
}

//Creacion del Mapa
canvas.width = 1054
canvas.height = 576;
ctx.fillStyle= '#fff'
ctx.fillRect(0, 0, canvas.width,canvas.height)



const JugadorImage = new Image()
JugadorImage.src = './assets/CaballeroImg.png'
const jugador= new sprite({
    position:{
        x:canvas.width / 2 - 400 ,
        y:canvas.height / 2 - (217 / 2) 
    },
    image:JugadorImage,
    frames:{
        max:10
    },
    animate: true,
    velocity: 20
})


const Enemigo= new sprite({
    position:{
        x:canvas.width / 2 - (-196) ,
        y:canvas.height / 2 - (209 / 2) 
    },
    image:EnemigoImage,
    frames:{
        max:6
    },
    animate: true,
    velocity: 22
})


let lastFrame = new movimiento({
    player1: new sprite({
        position:{
            x:canvas.width / 2 - (189 / 3),
            y:canvas.height / 2 - (66 / 8) 
        },
        image:personaje,
        frames:{
            max:4
        },
        velocity:8
    })
})






//Determinar zona del jugador
for (let i = 0; i < collision.length; i+=50) {
    batlleColisionPlayer.push(battleZonesDataPlayer.slice(i, 50 + i))
}

batlleColisionPlayer.forEach((row,i) => {
    row.forEach((date,j) => {
        if (date === 974 ) {
            battleZone.push(
            new cuadro({
                position:{
                    x: j * cuadro.width + offset.x ,
                    y: i * cuadro.height + offset.y
                }
            })
        )}
   
    })
})

UbicarZonasEnemigas(974,'juan',CollisionBattles)
UbicarZonasEnemigas(965,'cannibal',CollisionBattles2)




const anchoBoundaries = {
    ancho: cuadros.length + 10
}

let movibles= [background,...cuadros, ...Enemys]
isMpa()
function collisionObjects({rectangle1, rectangle2}) {
    return(
        rectangle1.position.x + (rectangle1.width + 20)   >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x  + (rectangle2.width - 20)   && 
        rectangle1.position.y  + (rectangle1.height - 20)  >= rectangle2.position.y  && 
        rectangle1.position.y <= rectangle2.position.y    )
}

function collisionEnemys({rectangle1, rectangle2}) {
    return(
        rectangle1.position.x + ( rectangle1.area - (48 * 4) )  >= rectangle2.position.x && 
        rectangle1.position.x - ( rectangle1.area - (48 * 4) ) <= rectangle2.position.x   && 
        rectangle1.position.y  + (rectangle1.area - (48 * 4) )  >= rectangle2.position.y  && 
        rectangle1.position.y - ( rectangle1.area - (48 * 4) ) <= rectangle2.position.y  &&
        !rectangle2.isdead  )
}

function NextLevelAfterDefeatBoss(background) {
    if (background.image == mapa1) {
        console.log(background.position.x, background.position.y)
        if (background.position.x < -736 && background.position.x > -820  )  {
            if (background.position.y < -198 && background.position.y > -279  )  {
                window.location.href = './level2.html'
            }
        }
    }
}

function isMpa() {
    if (background.image == mapa2) {
        movibles= [background,...cuadros, ...Enemys,foreground2,jefe2,enemigo2]
    }
}

function isForeground() {
    if (background.image == mapa2) {
        enemigo2.draw()
        jefe2.draw()
        foreground2.draw()
    }
}


const setBattle = {initiaded: false}
const moving = true
function animate() {
    const animationId = window.requestAnimationFrame(animate)
    background.draw()

    cuadros.forEach((row) => {
        row.draw()
    })

    battleZone.forEach((row) => {
        row.draw()
    })

    Enemys.forEach((row) => {
        row.draw()
    })
    lastFrame.player1.draw()
    isForeground()


    
    if(setBattle.initiaded) return

    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed ) {
        NextLevelAfterDefeatBoss(background)
        for (let i = 0; i < Enemys.length; i++) {
            actualBattle = Enemys[i]
            if (collisionEnemys({
                rectangle1: lastFrame.player1,
                rectangle2:actualBattle
            })){
                SeleccionarFrameBatalla(actualBattle.nombre)
                EnemyName.innerHTML = actualBattle.nombre
                gsap.to('.flash',{
                    opacity:1,
                    repeat:5,
                    onComplete(){
                        gsap.to('.flash',{
                            opacity: 0
                        })
                        gsap.delayedCall(-0.2, animateBattle)
                    }
                })
                

                setBattle.initiaded = true
                window.cancelAnimationFrame(animationId)
                break;

            }
           
        }   
    }

    
        if (keys.w.pressed) {
            lastFrame.player1.image = personajeup
            lastFrame.player1.moving =true
            for (let i = 0; i < cuadros.length; i++) {
                const row = cuadros[i]
                if (collisionObjects({
                    rectangle1: lastFrame.player1,
                    rectangle2: {...row, position:{
                        x: row.position.x,
                        y: row.position.y + 3
                    } }
                }) ) {
                    moving = false
                    break;

                }
            } 

            if (moving) {
                    movibles.forEach((elemen) => {
                    if (elemen.length == anchoBoundaries.ancho) {
                        console.log(elemen)
                        elemen.forEach((valor) => {valor.position.y += 3})
                    }
                    elemen.position.y += 3
                })
            }
               
        }else if(keys.a.pressed){
            lastFrame.player1.image = personajeleft
            lastFrame.player1.moving =true
            for (let i = 0; i < cuadros.length; i++) {
                const row = cuadros[i]
                if (collisionObjects({
                    rectangle1: lastFrame.player1,
                    rectangle2: {...row, position:{
                        x: row.position.x + 3,
                        y: row.position.y 
                    } }
                }) ) {
                    moving = false
                    break;

                }
            }
            if (moving) {
                movibles.forEach((elemen) => {
                if (elemen.length == anchoBoundaries.ancho) {
                    elemen.forEach((valor) => {valor.position.x += 3})
                }
                elemen.position.x += 3
            })
            }
                
        }else if(keys.s.pressed){
            lastFrame.player1.image = personaje
            lastFrame.player1.moving =true
            for (let i = 0; i < cuadros.length; i++) {
                const row = cuadros[i]
                if (collisionObjects({
                    rectangle1: lastFrame.player1,
                    rectangle2: {...row, position:{
                        x: row.position.x,
                        y: row.position.y - 3
                    } }
                }) ) {
                    moving = false
                    break;

                }
            }
            if(moving){
                movibles.forEach((elemen) => {
                if (elemen.length == anchoBoundaries.ancho) {
                    elemen.forEach((valor) => {valor.position.y += -3})
                }
                elemen.position.y += -3
                })
            }
            
        }else if(keys.d.pressed){
            lastFrame.player1.image = personajeRigth
            lastFrame.player1.moving =true
            for (let i = 0; i < cuadros.length; i++) {
                const row = cuadros[i]
                if (collisionObjects({
                    rectangle1: lastFrame.player1,
                    rectangle2: {...row, position:{
                        x: row.position.x - 3,
                        y: row.position.y 
                    } }
                }) ) {
                    console.log("No cruza ")
                    moving = false
                    break;

                }
            }
            if (moving ) {
                movibles.forEach((elemen) => {
                if (elemen.length == anchoBoundaries.ancho) {
                    elemen.forEach((valor) => {valor.position.x -= 3})
                }
                elemen.position.x -= 3
            })
            }
            
        }

}
animate()




window.addEventListener('keydown',(e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            break;
        case 'a':
            keys.a.pressed = true
            break;
        case 's':
            keys.s.pressed = true
            break;
        case 'd':
            keys.d.pressed = true
            break;
        default:
            break;
    }
})

window.addEventListener('keyup',(e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            lastFrame.player1.moving = false
            console.log(keys)
            break;
        case 'a':
            keys.a.pressed = false
            lastFrame.player1.moving = false
            lastkey = 'a'
            break;
        case 's':
            lastFrame.player1.moving = false
            keys.s.pressed = false
            lastkey = 's'
            break;
        case 'd':
            keys.d.pressed = false
            lastFrame.player1.moving = false
            lastkey = 'd'
            break;
        default:
            break;
    }
})

