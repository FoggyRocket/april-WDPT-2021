//Arreglos o Arrays (Matrix)

//   []

//let perrito = new Array(); //antiguo

let arrEmpty = []

// ","  los elementos se separa por comas
let perro = "Dona!!"
let myAge = () => {
 
 return 28
}
let arrFull = [true , 28, perro, {key:"perro"}, [0,1,2,3],"Venus", myAge, 28.111,-123 , !false ]

// console.log("tag;", perro)
console.log("===>",arrFull)


// index  [0,1,2,...n]

console.log("Position",arrFull[2])

console.log("Function", arrFull[6]() )

// push  [...elemtos, 0] 
// unshift [0,...elemtos]
// spread "..."
let newVar = "Mixotes"
arrFull.push(newVar)

//console.log("con Push", arrFull )


let drink = "Vive100"
arrFull.unshift(drink)

//console.log("unshift", arrFull )
//copia  todo los elementos de arrFull y pegalos en el nuevo arreglo de asigado a arrFull 
arrFull = [...arrFull, "spread"]
arrFull = ["spread2",...arrFull]

//console.log("con Push", arrFull )


// splice  [].splice(index, deleteCount)

arrFull.splice(4,1)

//console.log(arrFull)

function deleteItem (perrito){
  arrFull.splice(perrito,1)
}

// 0 ,1 , 2, ...n
//[item1,item2,item3,...itemN]
deleteItem(1)

//console.log(arrFull)

arrFull.shift(); // primero sale
arrFull.pop() // ultimo sale
//console.log(arrFull)

//       callback = (item, index, arrOrigin)=>{}
//arrFull.forEach(callback)
// element, position, arr origin
arrFull.forEach( function ( item, index, or){
  console.log(`item: ${item}, indice: ${index}`)

  if(item === 28){
    arrFull.splice(index,1)
  }

} )

//arrFull.forEach((elemt, id, or)=>{ ...})
/*arrFull.forEach((elemt, id)=>{
  console.log(id)
})
arrFull.forEach((elemt)=>{
  console.log(elemt)
})*/

console.log(arrFull)

let gato = "Anita lava la tina";

console.log(gato.split(""))

//length 

console.log(arrFull.length)
console.log(gato.length)