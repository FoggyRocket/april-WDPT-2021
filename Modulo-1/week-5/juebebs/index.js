const canvas = document.getElementById("canvas") // estoy llendo por la etiqueta 
//quiero el contexto
const ctx = canvas.getContext("2d")
/*
todo las variables de fondos personajes ataques etc.
contadores....

*/

let frames  = 0
let requestID;
//esto es para reforzar como cargar una imagen al canvas
/*
const img = new Image() //instancio un class Image en una variable
img.src = "https://bit.ly/2L7yH3f"; 

img.onload = function (){
    //al contexto le decimos que dibuje nuestra imagen!!
    ctx.drawImage(img,100,100,100,120)
}
*/

class Hero {
    constructor(x,y,w,h,imgs){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        //imagen
        this.image1 = new Image();
        this.image1.src = imgs[0];

        this.image2 = new Image();
        this.image2.src = imgs[1];

        this.image = this.image1
    }


    //es para dibujarlo!!!!!!!

    //Method nameMethod(){}

    draw(){
        if(this.y <= 286) this.y += 2
        if(frames % 10 === 0){

            // if ternario  "?("if")  :("else")" 
            this.image = this.image === this.image1 ? this.image2 : this.image1
            /*
            if(this.image === this.image1){
                this.image = this.image2
            }else {
                this.image = this.image1
            }
            */
        }
         
        // datos basicos ctx.drawImage(img,x,y,width,height)
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }

    collision(enemy){
        return(
            this.x < enemy.x + enemy.width &&
            this.x + this.width > enemy.x  &&
            this.y < enemy.y + enemy.height &&
            this.y + this.height > enemy.y
        ) 
    }


}

class Background{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = new Image ()
        this.image.src = "https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png"
    }

    gameOver(){
        ctx.font ="80px Arial" 
        ctx.fillText("Te Moriste!!!",250,200)
    }
    draw(){
        //
        this.x --;
        if(this.x < -canvas.width) this.x = 0;
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(
            this.image,
            this.x + canvas.width,
            this.y,
            this.width,
            this.height
        )

    }
}
class Enemi{
    constructor(){
        this.x = canvas.width;
        this.y = 256;
        this.width = 80;
        this.height = 80;
        //imagen
        this.image = new Image();
        this.image.src = "https://image.pngaaa.com/893/380893-middle.png";
    }

    draw(){
        if(frames % 10 ) this.x -= 5;


        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }

}

class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 30
        this.height = 30
        this.image = new Image()
        this.image.src = "https://mexicobakery.us/wp-content/uploads/2020/07/bolillo1.png"
    }

    draw(){
        this.x +=2
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)

    }

    collision(enemy){
        return(
            this.x < enemy.x + enemy.width &&
            this.x + this.width > enemy.x  &&
            this.y < enemy.y + enemy.height &&
            this.y + this.height > enemy.y
        ) 
    }
}
const marioImgs = [
    "https://bit.ly/2L7yH3f",
    "https://art.pixilart.com/33b1bbc23398be7.png"
]

let enemies = []
let bullets = []


const mario = new Hero(200,286,50,50,marioImgs)
const fondito = new Background()
/*update!! es para mover todo lo que queramos y
 verlo reflejado en el canvas*/

function update(){
    frames ++;
    //limpiar el canvas es muy importante para que no se sobrepongas las anteriores capas
    ctx.clearRect(0,0,canvas.width,canvas.height)
    fondito.draw()

    mario.draw()
    generateEnemies()
    drawEnemies()

    if(requestID){
       requestID =  requestAnimationFrame(update)
    }
    

}

function start(){
   requestID =  requestAnimationFrame(update)
}

function gameOver(){
    fondito.gameOver()
    requestID = undefined
}
//solo nos sirve para instanciar la clase enemi y subirla al arreglo 
function generateEnemies(){
    if(frames % 100 === 0 || frames % 60 === 0 || frames % 170 ===  0){
        //esto es  ejemplo para cosas random
        let widthRan = Math.floor(Math.random() * 300 )

        let x = Math.floor(Math.random() * canvas.width - 400 )
       //
        const enemy = new Enemi(widthRan, x)
        //enemies.push(enemy)
        enemies = [...enemies,enemy]
    }


}


function  generateBullet(){
    const bullet = new Bullet(mario.x+mario.width,mario.y)
  
   // if(bullets < 3){
        console.log("mando bien")
        bullets = [...bullets,bullet]
   // }
}



//Dibujamos los enemigos del arreglo!!!

function drawEnemies(){
    enemies.forEach((enemy,index_enemy)=>{
        enemy.draw()
        

        bullets.forEach((bullet,index_bullet)=>{
            console.log("me dibujo!!!",bullet)
            bullet.draw()
            if(bullet.collision(enemy)){
                enemies.splice(index_enemy,1)
                bullets.splice(index_bullet,1)

            }
            if(bullet.x+bullet.width > canvas.width){
                bullets.splice(index_bullet,1)
            }

        })

    if(mario.collision(enemy)){
        console.log("Me esta tocando!!!!!!")
        gameOver()
    }

    if(enemy.x + enemy.width <= 0 ){
        enemies.splice(index_enemy,1)
    }
    })
}
//mover el mario


addEventListener("keydown", (event)=>{
    //izq
    if(event.keyCode === 65){
        mario.x -= 20;
    }
    //de
    if(event.keyCode === 68){
        mario.x += 20
    }
    //salto
    if(event.keyCode === 87){
        mario.y -= 60;
    }

    if(event.keyCode === 32){
        generateBullet()
    }

    if(event.keyCode === 13){
        start()
    }
    
})
