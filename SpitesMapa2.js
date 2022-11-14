let offset = {
    x:-613,
    y:-570
}

//Enemigos en batalla
const EnemigoImage = new Image()
EnemigoImage.src = './assets/Enemigo.png'
const Enemigo2Batalla = new Image()
Enemigo2Batalla.src = './assets/Jefe2Batalla.png'

const jefeMapa2Batalla = new Image()
jefeMapa2Batalla.src = './assets/Jefe2Batalla.png'

//jefe mapa2
const jefeMpa2 =new Image()
jefeMpa2.src = './assets/Jefe-Segundo-mapa.png'
const jefe2 = new sprite({
    position:{
        x: offset.x,
        y: offset.y
    },
    image:jefeMpa2
})

//Enmigo 2
const Enemigo2 = new Image()
Enemigo2.src = './assets/Enemigo2.png'
const enemigo2 = new sprite({
    position:{
        x: offset.x,
        y: offset.y
    },
    image:Enemigo2
})