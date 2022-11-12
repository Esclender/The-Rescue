let offset = {
    x:-613,
    y:-570
}

const jefeMpa2 =new Image()
jefeMpa2.src = './assets/Jefe-Segundo-mapa.png'
const Enemigo2 = new Image()
Enemigo2.src = './assets/Enemigo2.png'


//jefe mapa2
const jefeMapa2Batalla = new Image()
jefeMapa2Batalla.src = './assets/Jefe2Batalla.png'
const jefe2 = new sprite({
    position:{
        x: offset.x,
        y: offset.y
    },
    image:jefeMpa2
})

//Enmigo 2
const Enemigo2Batalla = new Image()
Enemigo2Batalla.src = './assets/Jefe2Batalla.png'
const enemigo2 = new sprite({
    position:{
        x: offset.x,
        y: offset.y
    },
    image:Enemigo2
})