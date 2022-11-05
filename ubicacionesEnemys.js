let offset = {
    x:-210,
    y:-470
}
let actualBattle;
let ubicarZona = false
let arrayDeApariciones = []
let actualPosicionX = [] ;
let actualPosicionY = [] ;


const CollisionBattles = []
const posiciones = [
]
const battleZone = []
const batlleColision = []
const Enemys = []

//Enemigo 1
for (let i = 0; i < collision.length; i+=50) {
    CollisionBattles.push(zonaBatallaEnemigo.slice(i, 50 + i))
}



//Colocacion de las zonas (Por tipo de monstruo)






function UbicarZonasEnemigas(numero,nombre) {
    CollisionBattles.forEach((row,i) => {
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
}

//Eliminar enemigo despues de derrotado
function EliminarZonasEnemigos(nombre) {
    Enemys.forEach((e) => {
        if (e.nombre == nombre) {
           e.isdead = true
        }
    })
}

