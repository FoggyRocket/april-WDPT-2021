
let arr = ["Yani","Vic","Cesar","Jaime","Ana"]
let arrNum = [1,7,2,56,3,5]
let exampleAmazon = [
  {
    name:"Barras de Granola",
    price :50,
    cant :10
  },
    {
    name:"Alitas",
    price :150,
    cant :2
  },
];
let amount = 500;
//map filter y reduce

//undefined 
let newArrFor = arr.forEach((item,index,arryOriginal)=>{
  return `item ${index}`
})



 // map regresa un nuevo arreglo es lo mismo que un forEach solo que este te regresa un arreglo nuevo
let newArrMap = arr.map((item,index,arryOriginal)=>{
  return `${item} ${index}`
})

//filter regresa un nuevo arreglo con los valores que colocamos 
const letter = "ANA"
// ["Yani","Cesar"]
//arr.filter(callback)
let newArrFilter = arr.filter( (item,index)=> item.toLowerCase().includes(letter.toLowerCase()) )

console.log("Filter",newArrFilter)


/*

console.log("ForEach",newArrFor)
console.log("Map",newArrMap)
console.log("oldArr",arr)

*/


// Este regressa lo que este acumulando 
// arr.reduce( (acumulador,elemeto_actual)=>{}, 0//valor inicial )
// [] , 0 , {}

let sum = arrNum.reduce((acc,item)=>{
  return acc = acc + item /* acc +=*/
},0)
                                            /*
                                            item = {
                                        name:"Barras de Granola"
                                        price :50,
                                        cant :1
                                      },
                                            */
amount = exampleAmazon.reduce(function(acc,item){
  return acc = acc + (item.price * item.cant)
},amount)
console.log("suma",amount)

//Sort
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];


function compare2(a,b){
    return a-b
}
const letters = [ 'a', 'b', 'Z', 'Aa', 'AA',"aa" ];

numbers.sort(function compare(a,b){
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
});
arr.sort(compare2)

arr.sort((a,b)=> a - b)

console.log("==>",arr)
console.log(numbers);
// [ 0, 1, 112, 18, 22, 223, 23, 64, 68, 9, 99 ]

const a = ['one', 'two', 'three'];
const reversed = a.reverse();
let word = "Andres"

word = word.split("").reverse().join("")

console.log("word",word)
console.log(reversed)