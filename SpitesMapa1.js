let offset = {
    x:-613,
    y:-570
}

//Enemigos en batalla
const Enemigo2Batalla = new Image()
Enemigo2Batalla.src = './assets/Jefe2Batalla.png'
const jefeMapa1Batalla = new Image()
jefeMapa1Batalla.src = './assets/Jefe2Batalla.png'


//jefe mapa2
const jefeMpa1 =new Image()
jefeMpa1.src = './assets/Jefe-Segundo-mapa.png'
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
const enemigo1 = new sprite({
    position:{
        x: offset.x,
        y: offset.y
    },
    image:Enemigo1
})

//Enmigo 2
const Enemigo2 = new Image()
Enemigo2.src = './assets/Enemigos-mapa1/ENEMIGO 4.png'
const enemigo2 = new sprite({
    position:{
        x: offset.x,
        y: offset.y
    },
    image:Enemigo2
})