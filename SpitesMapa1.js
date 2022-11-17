let offset = {
    x:-200,
    y:-680
}

function JefeFinalUbicacion(){
    return(background.position.x < -1605 && background.position.x > -1803 &&
            background.position.y < -358 && background.position.y > -402 )
}

//Enemigos en batalla
const Enemigo1Mpa1Btalla = new Image()
Enemigo1Mpa1Btalla.src = './assets/Enemigos-mapa1/Goblin.png'
const Enemigo2Batalla = new Image()
Enemigo2Batalla.src = './assets/Jefe2Batalla.png'
const jefeMapa1Batalla = new Image()
jefeMapa1Batalla.src = './assets/JefeMapa1.png'
const Enemigo2Mapa1Batalla = new Image()
Enemigo2Mapa1Batalla.src = './assets/Enemigos-mapa1/Enemigo2Mpa1.png'


//jefe mapa1
const jefeMpa1 =new Image()
jefeMpa1.src = './assets/Enemigos-mapa1/JEFE 1.png'
const jefe1 = new sprite({
    position:{
        x: offset.x,
        y: offset.y
    },
    image:jefeMpa1
})

//Enmigo 2
const Enemigo1 = new Image()
Enemigo1.src = './assets/Enemigos-mapa1/ENEMIGO 1.png'
const enemigo1Mpa1 = new sprite({
    position:{
        x: offset.x,
        y: offset.y
    },
    image:Enemigo1
})

//Enmigo 2
const Enemigo2 = new Image()
Enemigo2.src = './assets/Enemigos-mapa1/ENEMIGO 4.png'
const enemigo2Mpa1 = new sprite({
    position:{
        x: offset.x,
        y: offset.y
    },
    image:Enemigo2
})