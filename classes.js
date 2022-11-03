class sprite{
    constructor({position,image,frames = {max:1},animate,velocity,name}){
        this.position = position
        this.image = image
        this.frames = {...frames,val:0,elapse:0}

        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
            this.area = ((48 * 3) * 2)
        }
        this.velocity = velocity
        this.animate = animate
        this.moving= false
        this.name = name
        
    }

    draw(){
        //ctx.drawImage(this.image,this.position.x,this.position.y)
        ctx.drawImage(
            this.image,
            this.frames.val  * this.width ,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max ,
            this.image.height)

            if (this.moving || this.animate) {
                if (this.frames.val > 1) {
                    this.frames.elapse++
                }

                if (this.frames.elapse % this.velocity == 0) {
                    if (this.frames.val < this.frames.max - 1) {
                        this.frames.val++
                    }else{
                        this.frames.val = 0
                    }
                }

                
            }

            
            
    }

    
}


class cuadro{
    static width = 48
    static height = 48
    constructor({position}){
        this.position = position
        this.width = 48
        this.height= 48
    }

    draw(){
        ctx.fillStyle ='red'
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}

class movimiento{
    constructor({player1}){
        this.player1 = player1
    }

}

class ataquesLista{
    constructor({vida,nombreAt,limite,turno,elemento,letras,image}){
        this.vida = vida
        this.nombreAtaque = nombreAt
        this.limite = limite
        this.turno = turno
        this.elemento = elemento
        this.letras = letras
        this.image = image
    }

}

class frameso{
    constructor({dmg = {capas}}){
        this.damage = {frams:capas}
        
    }
}