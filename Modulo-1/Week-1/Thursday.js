
/*
let isLogged = false;
const empty = true; // no puede cambiar
let food; //undefined
let vic = null
console.log("valor de food",food)

food = "Pollo"
console.log("valor2 de food",food)

food= [0,1,2]
console.log("valor3 de food",food)

console.log("la var vic",vic)
//Boolean true || false

// en condicion (if) true false || 0 1;

let newArr = []
//length regresa la loguitud(numero) de String o de un arreglo 
//0 
if(!newArr.length){
  //...
console.log("El array esta lleno")
}else{
//esta vacio el arreglo
console.log("El array no esta lleno")
}

// or  || 
// and && 
// not  ! 

let perro = true

console.log("que valor tiene===>",!perro)

const money = 0
const shoppi = []

if(!isLogged){
console.log("Primero has login o Signup")
}

let name = "Dylan"
name[0] = "M" // reasignar 

console.log("El nombre=>",name.length)
if(money >= 1 && shoppi.length){
  //se puede procesar
  console.log("Gracias por comprar",shoppi.length) 
}else{
  //no puedes bro necesitas cash
    console.log("Nooo! :( ") 

}

if(money >= 1 || shoppi.length){
  //se puede procesar
  console.log("Gracias por comprar con |||") 
}else{
  //no puedes bro necesitas cash
    console.log("Nooo! con || :( ") 

}

if(vic !== null || food !== undefined){

}else{
  vic = "valor"
}

//
//name = pedro

//name = undefined
//name = pedro

//predo
//

// complicada
name = name.split('') // separe 
console.log("perro",name)
name[2] = "x" // reasignar 
console.log("perro",name)
name = name.join('') //''
console.log("perro",name)


name.replace("lan","com")
console.log("perro",name)


//Math

let edad = 28.5
//un metodo se ejecuta con? () 
console.log(Math.floor(edad))

let anyNumber = 4.23778
let roundedToOne = +anyNumber.toFixed(2);

//Math.random()  0 && 1 0.21321532
                          2.9999
let random = Math.floor( Math.random() * 2 )

//Math.random()  nos regresa un valor entre el 0 y 1 nunca toca 0 ni el 1
// Math.random() * 6 se multiplica por la longuitud o el valor quieres obtener

//Math.floor( Math.random() * 2 )  para obtener un numero entero y redondear  


console.log("Random",random)
*/

//Condicionales
/*
const age = parseInt(prompt('Welcome to Ironhack cinema. How old are you?'));
 //eso no es aninado || nested
if (age <= 16) {
  console.log('You have a teenager discount.');
}else if (age >= 65) {
  console.log('You have a senior citizen discount :)');
} else {
  console.log("Sorry, you don't have any discount :(");
}
*/
/*
if(true){
  if(true){
    if(true){

    }
  }else{
  if(){
  
  }
}

if(true && !true){
  //...
  if(true)
}
*/
let menu= parseInt(prompt('que quieres?'));
/*`
1.Papas
2.Sopa
3.jocho
4.Torta
5.Quesadilla sin queso
`*/
switch(menu){
  case 1:
   console.log("Pediste unas papas")
  break
  case 2:
     console.log("Pediste un sopa")
  break 
  case 3:
     console.log("Pediste un jocho")
  break 
  case 7:
  case 4:
     console.log("Pediste un Torta")
  break 
  case 5:

     console.log("Pediste un Quesadilla sin queso")

  break
  default:

      if(menu) {
              console.log("Pide algo no! ", menu)
        }else{
        console.log("Debes escribir un numero")

        }

  break 
}

let i = 0;
do{
  
  console.log(i);
  i++; // this is the same as i = i + 1

}while (i <= 10) 


//
for(let x =10;x>= 0 ; x --){
  console.log("x,",x)
}

const someIterable = 'amsterdam';

//Objecto {}
for (const value of someIterable) {
  console.log(value);
}

let v = 0;
 
while (v < 5) {
  v++;
  if (v === 3) {
    
    if(true){
      
      continue;

      console.log("despuess")

    }
          console.log("despuess3")

        continue;

  }
  console.log(`The number is: ${v}.`);
}