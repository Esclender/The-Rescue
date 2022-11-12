let pocion1;
let pocion2;
let pocion3;
let pocion4;
const LugaresEnInventarioBatalla = []
const LugaresEnInventarioMapa = []
const LugaresPocionesGeneral = []
const PocionesBatalla = document.querySelector(".pociones-a-usar")
const pocionContainer = document.querySelector(".pociones-contenedor")
let pocionMedium = new Image()
pocionMedium.src = './assets/pociones/Icon14.png'
let pocionBig = new Image()
pocionBig.src = './assets/pociones/Icon4.png'
let pocionSmall = new Image()
pocionSmall.src = './assets/pociones/Icon15.png'

const arrayDePociones = [pocionBig,pocionSmall]