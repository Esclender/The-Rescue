let offset = {
    x:-200,
    y:-700
}

function JefeFinalUbicacion(){
    return(background.position.x < -1605 && background.position.x > -1803 &&
            background.position.y < -358 && background.position.y > -402 )
}

//Enemigos en batalla
const EnemigoImage = new Image()
EnemigoImage.src = './assets/Enemigo.png'
const Enemigo2Batalla = new Image()
Enemigo2Batalla.src = './assets/Jefe2Batalla.png'
const Enemigo3Mapa2 = new Image()
Enemigo3Mapa2.src = './assets/EnemigosMapa2/Enemigo3Btalla.png'
const jefeMapa2Batalla = new Image()
jefeMapa2Batalla.src = './assets/EnemigosMapa2/Rey-fantasma.png'

//jefe mapa2
const jefeMpa2 =new Image()
jefeMpa2.src = './assets/EnemigosMapa2/Jefe-2.png'
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

//Enmigo 3
const Enemigo3 = new Image()
Enemigo3.src = './assets/EnemigosMapa2/Enemigo3.png'
const enemigo3 = new sprite({
    position:{
        x: offset.x,
        y: offset.y
    },
    image:Enemigo3
})