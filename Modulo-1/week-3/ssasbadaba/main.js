const numbers = [
    100,
  -10,
  0,
  0,
  -40,
  -10,
  -10,
  5,
  0,
  -10,
  -50,
  -10,
  0,
  0,
  -50,
  -10
]

// new Array([...])
let player111 = {
  name: 'David',
  color: 'red',
  position: 0,
  cash: 1000,
  move: () => {
    console.log("ya etoy en otro lugar")
  },
  atk: function(){
    console.log("Te navajeo")
  }
}

let player2111 = {
  name: 'Luis',
  color: 'Azul',
  position: 0,
  cash: 1000,
  move: () => {
    console.log("ya etoy en otro lugar")
  },
  atk: function(){
    console.log("Te navajeo")
  }
}

let Santi ={
//atributos o propiedades
nombre:"SSAntiago",
edad:28,
animalFav:"Tortuga",
tipo_cabello:"largo",
usaGafas:true,

//Metodos o aciones;
habla:()=>{  },
programa:()=>{  },
camina:()=>{ },
hacerDeComer: ()=>{ console.log("sopa Marucha")}

}

let jugador ={}


jugador.name ="luis"

//jugador={
//  name:"luis"
//}

class Player{
  //Methods(...arg)
  constructor(name,color){
     /* name: 'Luis',
      color: 'Azul',
      position: 0,
      cash: 1000,
      */
      //player.name
      this.name = name;
      this.color = color;
      this.position = 0;
      this.hp=100;
  
  }

  //actions ||  Methods

  move(param1){
    //...

    console.log("ME mouevo!!!!",param1)
  };

  atk(enemi){
    //..

        enemi.hp -= 30
        console.log(`Navajeo a ${enemi.name}!!!! y le queda de vida ${enemi.hp}`)
  }

}

const player1 = new Player("Santi","Rojo")
const player2 = new Player("Yani","Morado")

console.log("player2",player2)

player1.move("izq")
player2.move()

console.log("player1",player1)

player1.atk( player2 )
console.log("me dañaron?",player2)


class Rectangle{
  //
  constructor(width,height){
      this.width = width;
      this.height = height;
      //this.area = width * height;
      this.area = this.calculateArea()
  }
  //action 
  calculateArea(){
    //rect1.area = 1111
    //this.area = this.width * this.height
    console.log("ejectuo")
    return this.width * this.height
  }
  calculatePerimeter(){
    console.log(2 * this.height + 2 * this.width)
    return  2 * this.height + 2 * this.width;
  }
}

let rect1 = new Rectangle(200,100);

rect1.calculatePerimeter()

console.log("Rect",rect1)



//
class Pokemon{
  constructor(level,name,type,region){
    this.type = type;
    this.level= level;
    this.hp = 80;
    this.name= name;
    this.region = region;
    this.damage = 10;
  }

//Metodos || actions 
  atk(enemie){
    let weakness = 1
    switch(enemie.type){

      case "Fuego":
        if(this.type === "Agua"){
          weakness = 2
        }

      break
      case "Electro":
      if(this.type === "Agua"){
          weakness  = 0.5
        }
      break
      case "Agua":
        if(this.type === "Agua"){}

      break;
    }
    enemie.hp -= (this.damage * weakness)
    if(enemie.hp <= 0){
      console.log(`${this.name} gana se debilito: ${enemie.name}`)
    }
    console.log("Ataca")
  }
  def(){

  }
  leveUp(evol){
    this.name = evol.name;
    this.level = evol.level;
    this.damage = evol.damage;
    this.hp = evol.hp;
  }


}


                      /*level,name,type,region   */
let poke1=  new Pokemon(1, "Charmander","Fuego","Soa")
let poke2=  new Pokemon(1, "VamoACalmarlo","Agua","MAr")
let poke3=  new Pokemon(1,"Pikachu","Electro","Planta Energia")

let charmeelon = {
  name:"charmeelon",
  level :15,
  damage:120,
  hp:120
}
poke1.leveUp(charmeelon)



poke2.atk(poke3)

poke1.atk(poke3)


console.log(poke1,poke2,poke3)


class Mewtwo extends Pokemon {
   constructor(level,name){
        /*level,name,type,region   */

     super(level,name,"Pyscho","Pueblo Paleta")

     this.damage = 300;
     this.movies = ["Anime","live-Action"]
   }
//para modificar tenemos que nombrarlo igual
atk(){
  //..
  console.log("siempre Gano")
}
leveUp(){
    console.log("Evulcio MEga")
}


}

let newMew = new Mewtwo(120,"Godzilla")

console.log(newMew)

newMew.def()
newMew.atk()





//setInterval

//setInterval(callback,3000 //ms)

function perrito (){
  console.log("Nova")
}
/*
setInterval(perrito,3000)

setInterval(function (){
console.log("Cada 10")

},10000)

function otra(){
  console.log("otra")
}
setInterval(()=>{
    otra()
},15000)

*/
let tiempo = setInterval(()=>{

  console.log("tiempo1")

},3000)

let tiempo2 = setInterval(()=>{

  console.log("tiempo2")

},3000)

console.log("que es esto===>",tiempo)
console.log("tieeee",tiempo2)

//clearInterval(tiempo)


//


//let timeOut = setTimeout(perrito,10000)

let detener = setTimeout(function (){
console.log("Se Termino tu tiempo ")
  clearInterval(tiempo)
  clearInterval(tiempo2)
},10000)


//SetInterval & TimeOut
//1.- el nombre
//2.- Cuantas veces se repite 
//

try{
//...mientrass todo esste bien
}catch(error){
	//console.log("Algo ssalio mal masster!!",error)
	
  alter("Algo salio mal intenta mas tarde")
}

function perrito(num){
  try{
    let total =num/10
    consol.log("total",total)
  }catch(err){
   console.log("Error ===>",err)
  }
}






