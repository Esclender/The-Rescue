let offset = {
    x:-613,
    y:-570
}
const collisionMapa2 = 965
const medidasExactasMapa2 = [
    roj={
        x:292 ,
        y:225
    },
    defrente={
        x:290,
        y:240
    }
]


let actualBattle;
let ubicarColisones = true
let arrayDeApariciones = []
let actualPosicionX = [] ;
let actualPosicionY = [] ;


const CollisionBattles = []
const CollisionBattles2 = []
const posiciones = [
]
const battleZone = []
const batlleColisionPlayer = []
const Enemys = []

//Enemigo 1
for (let i = 0; i < collision.length; i+=80) {
    CollisionBattles.push(zonaBatallaEnemigo1.slice(i, 80 + i))
}
//Enemigo 2
for (let i = 0; i < collision.length; i+=80) {
    CollisionBattles2.push(zonaBatallaEnemigo2.slice(i, 80 + i))
}




//Colocacion de las zonas (Por tipo de monstruo)






function UbicarZonasEnemigas(numero,nombre,array) {
    array.forEach((row,i) => {
        row.forEach((date,j) => {
            if (date == numero) {
                Enemys.push(
                new cuadro({
                    position:{
                        x: j * cuadro.width + offset.x ,
                        y: i * cuadro.height + offset.y
                    },
                    name: nombre
                })

                )

            }

        })
    }) 
    for (let index = 0; index < Enemys.length; index++) {
        actualPosicionX.push(Enemys[index].position.x)
        actualPosicionY.push(Enemys[index].position.y)
    }
    
}

function ReUbicarZonasEnemigas(nombre) {
    Enemys.forEach((e) => {
        if (e.nombre == nombre) {
           e.isdead = false
           
        }
    })

    if (nombre == 'juan') {
        jefe2.image = jefeMpa2
        for (let index = 0; index < vidasEnemys.length; index++) {
            if (vidasEnemys[index].nombreMonster == nombre) {
               vidasEnemys[index].vida = '300px' 
            }      
            
        }
    }else if(nombre == 'cannibal'){
        enemigo2.image = Enemigo2
        for (let index = 0; index < vidasEnemys.length; index++) {
            if (vidasEnemys[index].nombreMonster == nombre) {
               vidasEnemys[index].vida = '300px' 
            }      
            
        }
    }
}

//Eliminar enemigo despues de derrotado
function EliminarZonasEnemigos(nombre) {
    Enemys.forEach((e) => {
        if (e.nombre == nombre) {
           e.isdead = true
        }
    })

    if (nombre == 'juan') {
        jefe2.image = AtaquDefaultEfecct
    }else if(nombre == 'cannibal'){
        enemigo2.image = AtaquDefaultEfecct
    }
}

function SeleccionarFrameBatalla(nombre) {
    if (nombre == 'juan') {
        Enemigo.image = jefeMapa2Batalla
        Enemigo.animate = false
        Enemigo.frames.max = 1
        Enemigo.width = Enemigo.image.width / Enemigo.frames.max
    }
}

