let offset = {
    x:0,
    y:-510
}


function JefeFinalUbicacion(activar){
    return(background.position.x < -1605 && background.position.x > -1803 &&
            background.position.y < -380 && background.position.y > -522 &&
            !activar )
}

const ReyFinal= new Image()
ReyFinal.src = './assets/ReyDemonio.png'

const JefeFinal = new Image()
JefeFinal.src = './assets/ReyDemonioMapa.png'
const Devil = new sprite({
    position:{
        x: offset.x,
        y: offset.y
    },
    image:JefeFinal
})