// {} <== es un objeto
// {key:"value" } 

// let oldObj = new Object()
// let newObj = { key:"value"}

let food = "Mixotes"
let drink = "Agua"

let newObj = { 
   name: "Dylan",
   "last-Name": "Torres",
   age : 28,
   status: false,
   pets:[
     { 
      name:"Nova",
      type:"dog",
      toys:["cocodrilo","Ardilla","pelotas"]
      },
      {
     name:"Venus",
     type:"cat" 
   } ],
   heigth:1.68,
   weight:84,
   food:food,
   run: function run2(){
     return true
   },
   // drink
   // drink :"Agua"
   drink,

};
//formas de sacar valores de un objeto
console.log(newObj["weight"])
console.log(newObj.name)
//
console.log(newObj.pets[0]["type"])
//"..." [] {} (copia y pega valores anteriores)
//Forma de agregar valores
newObj.breakFast = false
newObj["TeamPet"] = "Dog"
newObj = {...newObj,"MarvelVsDc":"DC"}


//Update 
newObj.drink = "Beer";
newObj["food"] = "Sopa Maruchan";
newObj['TeamPet'] = ""
//? newObj.animal = "Perro"
//Delete

delete newObj["weight"]
delete newObj.status
//newObj = {}

//Como saber si esta lleno 

console.log("Tiene valores", Object.keys(newObj))

if(Object.keys(newObj).length){
  console.log(true)
}else{
  console.log(false)
}
//for in sintax for (let key in objecto)
for(let key in newObj  ){
  console.log("key:",key,", value:",newObj[key])
  
}



const student = {}
/*
const num = 4
num = 5
*/
 student.perrito = "Nova"


console.log("que paso ",student)