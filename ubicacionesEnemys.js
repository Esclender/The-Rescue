
const collisionMapa2 = 965
const collisionMapa1 = 1141
const collisionMapa3 = 3433
let activarBtallaFinal = false
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


const posiciones = []


const battleZone = []
const batlleColisionPlayer = []
const Enemys = []

//Jefe mapa1
const collisionBattlesJefeMapa1=[]
for (let i = 0; i < collision.length; i+=80) {
    collisionBattlesJefeMapa1.push(ZonaJefeMapa1.slice(i, 80 + i))
}


//Enemigo1 mapa1
const collisionBattlesEnemigo1Mapa1=[]
for (let i = 0; i < collision.length; i+=80) {
    collisionBattlesEnemigo1Mapa1.push(ZonaEnemigo1Mapa1.slice(i, 80 + i))
}

//Enemigo2 mapa1
const collisionBattlesEnemigo2Mapa1=[]
for (let i = 0; i < collision.length; i+=80) {
    collisionBattlesEnemigo2Mapa1.push(ZonaEnemigo2Mapa1.slice(i, 80 + i))
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

    if (nombre == 'Rey fantasma') {
        jefe2.image = jefeMpa2
        for (let index = 0; index < vidasEnemys.length; index++) {
            if (vidasEnemys[index].nombreMonster == nombre) {
               vidasEnemys[index].vida = '300px' 
            }      
            
        }
    }else if(nombre == 'cannibal'){
        enemigo2.image = Enemigo2Batalla
        for (let index = 0; index < vidasEnemys.length; index++) {
            if (vidasEnemys[index].nombreMonster == nombre) {
               vidasEnemys[index].vida = '300px' 
            }      
            
        }
    }else if(nombre == 'Lobo oscuro'){
        enemigo2.image = Enemigo2Batalla
        for (let index = 0; index < vidasEnemys.length; index++) {
            if (vidasEnemys[index].nombreMonster == nombre) {
               vidasEnemys[index].vida = '300px' 
            }      
            
        }
    }else if(nombre = 'Demonio gargola'){
        enemigo2.image = Enemigo3Mapa2
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

    if (nombre == 'Rey fantasma') {
        jefe2.image = AtaquDefaultEfecct
    }else if(nombre == 'Rey Ogro'){
        jefe1.image = AtaquDefaultEfecct
    }else if(nombre == 'Goblin'){
        enemigo1Mpa1.image = AtaquDefaultEfecct
    }else if(nombre == 'Lobo oscuro'){
        enemigo2Mpa1.image = AtaquDefaultEfecct
    }else if(nombre == 'Demonio gargola'){
        enemigo2.image = AtaquDefaultEfecct
    }else if(nombre == 'cannibal'){
        enemigo3.image = AtaquDefaultEfecct
    }else if(nombre == 'Rey demonio'){
        JefeFinal.image = AtaquDefaultEfecct
    }
}

function SeleccionarFrameBatalla(nombre) {
    if (nombre == 'Demonio gargola') {
        Enemigo.image = Enemigo3Mapa2
        Enemigo.animate = false
        Enemigo.frames.max = 1
        Enemigo.width = Enemigo.image.width / Enemigo.frames.max
    }else if(nombre == 'cannibal'){
        Enemigo.image = EnemigoImage
        Enemigo.animate = true
        Enemigo.frames.max = 6
        Enemigo.width = Enemigo.image.width / Enemigo.frames.max
    }else if(nombre == 'Rey Ogro'){
        Enemigo.image = jefeMapa1Batalla
        Enemigo.animate = true
        Enemigo.frames.max = 1
        Enemigo.width = Enemigo.image.width / Enemigo.frames.max
    }else if(nombre == 'Lobo oscuro'){
        Enemigo.image = Enemigo2Mapa1Batalla
        Enemigo.animate = true
        Enemigo.frames.max = 1
        Enemigo.width = Enemigo.image.width / Enemigo.frames.max
    }else if(nombre == 'Goblin'){
        Enemigo.image = Enemigo1Mpa1Btalla
        Enemigo.animate = true
        Enemigo.frames.max = 1
        Enemigo.width = Enemigo.image.width / Enemigo.frames.max
    }else if(nombre == 'Rey fantasma'){
        Enemigo.image = jefeMapa2Batalla
        Enemigo.animate = true
        Enemigo.frames.max = 1
        Enemigo.width = Enemigo.image.width / Enemigo.frames.max
    }else if(nombre == 'Rey demonio'){
        Enemigo.image = ReyFinal
        Enemigo.animate = true
        Enemigo.frames.max = 1
        Enemigo.width = Enemigo.image.width / Enemigo.frames.max
    }
}

