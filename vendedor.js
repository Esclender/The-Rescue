const Indicacion = document.querySelector('.indicador')
const MensajeNpc =document.querySelector('.mensaje-Npc')
const EscribirMensajeNpc = document.querySelector('.EscribirMensaje-Npc')
const botonNpc = document.querySelector('.botonNpc')
const cerrarVenta = document.querySelector('.close-sale')
const iconoBoton = document.querySelector('.icono')
const vendedorMapa1 = new Image()
vendedorMapa1.src = './assets/Mpa1-Vendedor.png'
const inventarioVendedor = document.querySelector('.inventario-vendedor')
const contenedorDatos = document.querySelector('.datos-de-la-pocion')
const DatosdePocion = document.querySelector('.datos')
let cantidadDePocionesEninventario = [];
const inventarioContenedorMapa = document.querySelector('.inventario-mapa')
let imagenDearticuloComprado;
let cantidadLimitante =[];
let precioDePocionActual;

let BotonComprar ;
let limitadorDePago = 1
const vendedorEduardo = new vendedor({nombre:'Eduardo',image:new sprite({            
    position:{
    x: offset.x ,
    y: offset.y 
},
image:vendedorMapa1})
,pociones:[]})
const coin = new Image()
coin.src = './assets/COin.png'

pocion1 = new ataquesLista({vida:35,nombreAt: 'Pocion grande',limite:5,elemento:document.createElement('button'),letras:13,image: pocionBig.src})
pocion2 = new ataquesLista({vida:35,nombreAt: 'Pocion small',limite:5,elemento:document.createElement('button'),letras:12,image: pocionSmall.src})
pocion3 = new ataquesLista({vida:45,nombreAt: 'Pocion mediana',limite:0,elemento:document.createElement('button'),letras:12,image: pocionMedium.src})

LugaresPocionesGeneral.push(pocion1,pocion2,pocion3)
LugaresEnInventarioMapa.push(pocion1,pocion2)
function CrearInventarioEnmapa() {
    
    for (let index = 0; index < LugaresEnInventarioMapa.length; index++) {
        if (index == 0) {
            pocionContainer.innerHTML= ""
            cantidadDePocionesEninventario = []
        }
        let actual = document.createElement('div')
        cantidadLimitante.push(document.createElement('div'))
        cantidadDePocionesEninventario.push(LugaresEnInventarioMapa[index].limite)
        
        actual.classList.add('pociones-mapa')
        cantidadLimitante[index].innerHTML = cantidadDePocionesEninventario[index]
        actual.style.backgroundImage = LugaresEnInventarioMapa[index].url ;
        actual.append(cantidadLimitante[index])
        pocionContainer.append(actual)
        
    }
}

vendedorEduardo.pociones.push(new pocionesAvender({nombre:'Pocion grande', precio:50, avaible:20,imagen:pocionBig}))
vendedorEduardo.pociones.push(new pocionesAvender({nombre:'Pocion small', precio:25, avaible:50,imagen:pocionSmall}))
vendedorEduardo.pociones.push(new pocionesAvender({nombre:'Pocion mediana', precio:35, avaible:30,imagen:pocionMedium}))

const DialogoEduardo ='Bienvenido a Mi tienda, <br> sobrellevamos la explotacion y <br> aumentamos los precios cada dia, Como Puedo ayudarte?'
botonNpc.addEventListener('click',() =>{
    Indicacion.classList.add('off')
    MensajeNpc.classList.add('off')
    inventarioVendedor.classList.remove('off')
})

cerrarVenta.addEventListener('click',() => {
    keys.f.pressed = false
    MensajeNpc.classList.add('off')
    inventarioVendedor.classList.add('off')
    contenedorDatos.classList.add('off')
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
    DatosdePocion.innerHTML= ""
    let datos = elemento
    for (let i = 0; i <= 4; i++) {
        let actual = document.createElement('span')
        let botonDecantidad = document.createElement('input')
        botonDecantidad.type= 'number'
        botonDecantidad.classList.add('cantidad-a-comprar')
        let BotonCompra = document.createElement('button')
        BotonCompra.classList.add('Boton-compra')
        BotonCompra.innerHTML = 'Comprar'
        switch (i) {
            case 0:
                actual.innerHTML = datos.nombre
                actual.append(datos.imagen)
                break;
            case 1:
                actual.innerHTML = 'Cantidad Disponible ' + datos.cantidad
                break;
            case 2 :
                actual.innerHTML = 'Precio ' + datos.precio 
                actual.append(coin)
                break;
            case 3:
                actual.innerHTML = 'Cantidad'  
                actual.append(botonDecantidad)
                break;
            case 4:
                DatosdePocion.append(BotonCompra)
                break;
            default:
                break;
        }
        precioDePocionActual = datos.precio
        DatosdePocion.append(actual)
        contenedorDatos.classList.remove('off')
        BotonComprar = document.querySelector('.Boton-compra')
        limitadorDePago = 1
        keys.f.pressed = false
    }
    
}

let valorParaCambiaF = 1
function zonaVendedor(background){
    if (background.image == mapa1) {
        if (background.position.x < -2221 && background.position.x > -2341 )  {
            if (background.position.y < -204 && background.position.y > -291  )  {    
                Indicacion.classList.remove('off')
 
                if (keys.f.pressed ) {
 
                    //Inicio de dialogo
                    Indicacion.classList.add('off')
                    HablarconNpc(DialogoEduardo,'Comprar')
                    //
 
                }
  
            }else{
                Indicacion.classList.add('off')
            }
        }
    }
}

function EscucharClicksDeCompra(array) {
                        
    for (let index = 0; index < array.length; index++) {
        array[index].addEventListener('click', (e) => {
            
            if (e.path[0].src == vendedorEduardo.pociones[index].imagen.src && valorParaCambiaF == 1) {
                mostrarDatos(vendedorEduardo.pociones[index])
                imagenDearticuloComprado = `url("${e.path[0].src}")`
            }
         
        })
    
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

function CompraDePocion(pocionPrecio) {
    if (lastFrame.player1.money > parseInt(pocionPrecio.value) ) {
        let cantidad = parseInt(pocionPrecio.value) 
        lastFrame.player1.money -= precioDePocionActual * cantidad
        for (let index = 0; index < LugaresPocionesGeneral.length; index++) {
            console.log(imagenDearticuloComprado, LugaresPocionesGeneral[index])
            if (imagenDearticuloComprado == LugaresPocionesGeneral[index].url) {
                
                if (LugaresPocionesGeneral[index].limite == 0) {
                    LugaresPocionesGeneral[index].limite +=cantidad
                    LugaresEnInventarioMapa.push(LugaresPocionesGeneral[index])
                    CrearInventarioEnmapa()
                    limitadorDePago = 0
                }else{
                    LugaresPocionesGeneral[index].limite += cantidad
                    cantidadLimitante[index].innerHTML = LugaresPocionesGeneral[index].limite
                    limitadorDePago = 1   
                }


            }
        }
    }

}