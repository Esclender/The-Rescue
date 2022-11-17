const personaje = new Image()
personaje.src= './assets/Personaje-down.png'
const personajeRigth = new Image()
personajeRigth.src= './assets/personaje-right.png'
const personajeleft = new Image()
personajeleft.src= './assets/personaje-left.png'
const personajeup = new Image()
personajeup.src= './assets/personaje-up.png'
const botonInventarioMapa = document.querySelector('.boton-inventario-mapa')
const lifeMap = document.querySelector('.life-map')
let terminarJuego = true

botonInventarioMapa.addEventListener('mouseover', ()=>{
    buttonsClick.play()
})


let lastMover = 1


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
    image:AtaquDefaultEfecct,
    frames:{
        max:6
    },
    animate: true,
    velocity: 22
})


let lastFrame = new movimiento({
    player1: new sprite({
        position:{
            x:canvas.width / 2 - (188 / 3),
            y:canvas.height / 2 - (66 / 8) 
        },
        image:personajeRigth,
        frames:{
            max:4
        },
        velocity:15,
        money:100
    })
})

//Relacion de dinero con html y js
const Dinero = document.querySelector(".coins")
let BilleteraStorage ;
function Billetera(cantidad) {
    Dinero.innerHTML = cantidad
    BilleteraStorage  = localStorage.setItem('Money', Dinero.innerHTML )
}


//Lugares inventario Mapa
//limite es == cantidad
botonInventarioMapa.addEventListener('click',() => {
    inventarioContenedorMapa.classList.toggle("off")

})

function BajarVidaMapa() {
    if (totalDamage < 250 && totalDamage >= 150) {
        lifeMap.style.width = '100px'
    }else if(totalDamage < 150 && totalDamage > 50){
        lifeMap.style.width = '50px'
    }
}


let pocionesEninventario;
let pocionesParaBatalla;
//Eventos de click de las pociones en el mapa
function crearVariablesPociones() {
    window.requestAnimationFrame(crearVariablesPociones)
    pocionesEninventario = document.querySelectorAll('.pociones-mapa')
    pocionesParaBatalla = document.querySelectorAll('.pociones-batalla')
// Codigo del click
    for (let index = 0; index < pocionesEninventario.length; index++) {
        pocionesEninventario[index].addEventListener('click', (e) => {
            if (e.target.classList.value == 'pociones-mapa') {
                pocionesEninventario[index].classList.remove("pociones-mapa")
                pocionesEninventario[index].classList.add("pociones-batalla")
                PocionesBatalla.append(pocionesEninventario[index])
                LugaresEnInventarioBatalla.push(pocionesEninventario[index].style.backgroundImage)
            }
    
        })
    
    }
    
      
    for (let index = 0; index < pocionesParaBatalla.length; index++) {
        pocionesParaBatalla[index].addEventListener('click', (e) => {
            if (e.target.classList.value == 'pociones-batalla') {
                console.log('pociones batalla')
                pocionesParaBatalla[index].classList.remove("pociones-batalla")
                pocionesParaBatalla[index].classList.add("pociones-mapa")
                pocionContainer.append(e.target)
            }
            
    
        })
    
    }  

}
crearVariablesPociones()



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
        rectangle1.position.y <= rectangle2.position.y )
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
        if (background.position.x < -2800 && background.position.x > -2908  )  {
            if (background.position.y < -218 && background.position.y > -297  )  {
                window.location.href = './level2.html'
            }
        }
    }else if(background.image == mapa2){
        console.log(background.position)
        if (background.position.x < -1406 && background.position.x > -1646  )  {
            if (background.position.y < -43 && background.position.y > -163  )  {
                window.location.href = './MpaFinal.html'
            }
        }
    }else if(background.image == mapa3){
        console.log(background.position)
        if (background.position.x < -1850 && background.position.x > -1946  )  {
            if (background.position.y < -43 && background.position.y > -563  )  {
                window.location.href = './credi/pre-creditos.html'
            }
        }
    }
}

function isMpa() {
    if (background.image == mapa2) {
        movibles= [background,...cuadros, ...Enemys,foreground2,jefe2,enemigo2,vendedorLuis.imagen,enemigo3]
    }else if(background.image == mapa1){
        movibles= [background,...cuadros, ...Enemys,foreground1,vendedorEduardo.imagen,enemigo1Mpa1,enemigo2Mpa1,jefe1,Npc.imagen]
    }else if(background.image == mapa3){
        movibles= [background,...cuadros, ...Enemys,Devil]
    }
}

function isForeground() {
    if (background.image == mapa2) {
        enemigo3.draw()
        enemigo2.draw()
        jefe2.draw()
        vendedorLuis.imagen.draw()
        foreground2.draw()
    }else if(background.image == mapa1){
        Npc.imagen.draw()
        jefe1.draw()
        enemigo1Mpa1.draw()
        enemigo2Mpa1.draw()
        vendedorEduardo.imagen.draw()
        foreground1.draw()
    }else if(background.image == mapa3){
        Devil.draw()
    }
}

const setBattle = {initiaded: false}
const moving = true

function animate() {
    const animationId = window.requestAnimationFrame(animate)
    background.draw()
    if (background.image == mapa1) {
        Billetera(lastFrame.player1.money)
    }
    
    BajarVidaMapa()
    
    let pocionesParaVender = document.querySelectorAll('.pocion-a-vender')
    let inputCantidad = document.querySelector('.cantidad-a-comprar')
    
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
    if (background.image == mapa3 && terminarJuego) {
            if (JefeFinalUbicacion(activarBtallaFinal)) {
                Enemigo.position.x = canvas.width / 2 - (-106) 
                Enemigo.position.y = canvas.height / 2 - (480 / 2) 
                Enemys.push(
                    new cuadro({
                        position:{
                            x: 0,
                            y: 0
                        },
                        name: "Rey demonio"
                    })
    
                    )
                    activarBtallaFinal = true
            }
    }

    EscucharClicksDeCompra(pocionesParaVender)
    zonaNpc(background)
    zonaVendedor(background)

    if ( limitadorDePago == 1 ) {

        if (BotonComprar != undefined  ) {
            limitadorDePago = 0
            BotonComprar.addEventListener('click',() => {
                CompraDePocion(inputCantidad)
            })
        }else{
            CrearInventarioEnmapa()
            limitadorDePago = 0
        }
        
        
    }


    if(setBattle.initiaded) return

    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed ) {

        crearInventario = 0
        NextLevelAfterDefeatBoss(background)
        for (let i = 0; i < Enemys.length; i++) {
            actualBattle = Enemys[i]

            
            if (collisionEnemys({
                rectangle1: lastFrame.player1,
                rectangle2:actualBattle
            }) || activarBtallaFinal){

                SeleccionarFrameBatalla(actualBattle.nombre)
                EnemyName.innerHTML = actualBattle.nombre
                let mensaje;
                if (actualBattle.nombre == "Rey Ogro"||actualBattle.nombre == "Rey fantasma") {
                    mensaje = actualBattle.nombre + " cambio a su verdaddera forma!!"   
                }else if(actualBattle.nombre == "Rey demonio"){
                    mensaje = "Dominare el reino de medor y nadie me podra detener!!!"                    
                }else{
                    mensaje = actualBattle.nombre + " te esta atacando!!" 
                }

                aparecerMensaje(mensaje)
                gsap.delayedCall(3,() => {
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






