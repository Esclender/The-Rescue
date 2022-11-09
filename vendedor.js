const Indicacion = document.querySelector('.indicador')
const MensajeNpc =document.querySelector('.mensaje-Npc')
const EscribirMensajeNpc = document.querySelector('.EscribirMensaje-Npc')
const botonNpc = document.querySelector('.botonNpc')
const iconoBoton = document.querySelector('.icono')
const vendedorMapa1 = new Image()
vendedorMapa1.src = './assets/Mpa1-Vendedor.png'
const inventarioVendedor = document.querySelector('.inventario-vendedor')
const contenedorDatos = document.querySelector('.datos-de-la-pocion')
const DatosdePocion = document.querySelector('.datos')
const vendedorEduardo = new vendedor({nombre:'Eduardo',image:new sprite({            
    position:{
    x: offset.x ,
    y: offset.y 
},
image:vendedorMapa1})
,pociones:[]})

vendedorEduardo.pociones.push(new pocionesAvender({nombre:'Pocion grande', precio:50, avaible:20,imagen:pocionBig}))
mostrarDatos(vendedorEduardo.pociones)

const DialogoEduardo ='Bienvenido a Mi tienda, <br> sobrellevamos la explotacion y <br> aumentamos los precios cada dia, Como Puedo ayudarte?'
botonNpc.addEventListener('click',() =>{
    MensajeNpc.classList.add('off')
    inventarioVendedor.classList.remove('off')
})
const keys ={
    w:{
        pressed:false
    },
    a:{
        pressed:false
    },
    s:{
        pressed:false
    },
    d:{
        pressed:false
    },
    f:{
        pressed:false
    }
}


window.addEventListener('keydown',(e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            break;
        case 'a':
            keys.a.pressed = true
            break;
        case 's':
            keys.s.pressed = true
            break;
        case 'd':
            keys.d.pressed = true
            break;
        case 'f':
            console.log('si')
            keys.f.pressed = true

        default:
            break;
    }
})

window.addEventListener('keyup',(e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            lastFrame.player1.moving = false
            break;
        case 'a':
            keys.a.pressed = false
            lastFrame.player1.moving = false
            lastkey = 'a'
            break;
        case 's':
            lastFrame.player1.moving = false
            keys.s.pressed = false
            lastkey = 's'
            break;
        case 'd':
            keys.d.pressed = false
            lastFrame.player1.moving = false
            lastkey = 'd'
            break;
        default:
            break;
    }
})

function mostrarDatos(elemento) {
    let datos = elemento[0]
    
    for (let i = 0; i < 4; i++) {
        let actual = document.createElement('span')
        switch (i) {
            case 0:
                actual.innerHTML = datos.nombre
                break;
            case 1:
                actual.innerHTML = datos.precio
            default:
                break;
        }
    }
    
}


function zonaVendedor(background){
    if (background.image == mapa1) {
        if (background.position.x < -2221 && background.position.x > -2341 )  {
            if (background.position.y < -204 && background.position.y > -291  )  {
                Indicacion.classList.remove('off')
                if (keys.f.pressed) {
                    Indicacion.classList.add('off')
                    HablarconNpc(DialogoEduardo,'Comprar')
                    
                    window.addEventListener('keydown',(e) => {
                        switch (e.key) {
                            case 'w':
                                keys.w.pressed = false
                                break;
                            case 'a':
                                keys.a.pressed = false
                                break;
                            case 's':
                                keys.s.pressed = false
                                break;
                            case 'd':
                                keys.d.pressed = false
                                break;
                            case 'f':
                                keys.f.pressed = false
                    
                            default:
                                break;
                        }
                    })
                }
            }
        }else{
            keys.f.pressed = false
            Indicacion.classList.add('off')
        }
    }else{
        
    }
}

function HablarconNpc(escribir,textoB) {
    if (inventarioVendedor.classList.contains('off')) {
            MensajeNpc.classList.remove('off')
        EscribirMensajeNpc.style.fontSize = '12px'
        EscribirMensajeNpc.innerHTML = escribir
        botonNpc.childNodes[0].textContent = textoB
        iconoBoton.classList.add('fa-solid')
        iconoBoton.classList.add('fa-bag-shopping')
    }

}