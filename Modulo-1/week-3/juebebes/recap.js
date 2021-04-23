//
//Data
//
/*
let text="perro";
let vdd = true || false ;
let num = 23.000909009809809;
let variabl = ["let","const","var"];

let perrito; //viariable con valor undefineed

//

//text[0] = "x"
text = "xerro"
let newArr = []
let newOb  = {}
//["perro"]
//text= "xerro"

if(ihaveMoney){
  //--
  console.log("ME compro mi torta de tamal")
}else{
  console.log("tengo que busccar dinero")
}


//while
//No se cuando te detengass pero hasta que te cumplas detente
let i = 1
while (i < 10){
    delete  * from * 
    
    // i = i + 1
    // i += 1

    // i = i + 1
    // i *= 
    
    
    i++
}

let t = 0;
do {
  //
  console.log("Hola mundo")
  t ++;
} while (t < 10);

//For cuantas veces te queremos ejecutar
for(let x = 0 ; x <= [0,1,3].length; x++){
//...
}


//Fizz Buzz
// 0 ,1,...n
let anotherArr = ["Perro",237.65768,false,function perro(name){console.log(`hola!! ${name}`)},[ {dylan:"value"},{} ]  ]

//
anotherArr[3]("Yani")
//Arrgelo/Arrgelo/objecto/string
// .dylan
// ["dylan"]

anotherArr[4][0].dylan
// Arreglo/Arreglo/
console.log(anotherArr[4])

              // puede o tener params 
function esau ( ){
  console.log("Funcion con nombre");
}

esau()



let perritos = function (call){
//mas codigo..
  call()
  //console.log("El nombre de mi perro es",perro)
}

perritos(function (){
  let i = 7
  i *=3
  console.log("Tipo callback",i)
})
//filter map forEach reverse reduce  sort split push unshift ....
//method or funcction
// (callback) 
anotherArr.forEach(
        function (item,index){
        console.log("que es:",item," su index:",index)
  }
)

console.log(Math.round(anotherArr[1]))
let games = ["MH","Zelda","Mario"]
// ... spread
// {} 
// 

let obj = {
  "key":"",
  name:"dyla",
  edad:28,
  hobby:[...anotherArr , games],
  pet:{name:"Nova"},
  action: function patada(){
    console.log("Golpe KArate")
  }
}
// [] pos 
// {} key
console.log(obj.hobby[5][1])
let obj2 = {...obj} 
[0,1,3].map
obj["edad"]= 29
console.log(obj2)
*/
let movies = [
    {
      "title": "Deadpool 1",
      "year": 1994,
      "director": "Dylan Torres Cruz",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "duration": "2h 55min",
      "genre": [
        "Crime",
       
      ],
      "rate": 9.2
    },
    {
      "title": "Deadpool 2",
      "year": 1994,
      "director": "Francis Ford Coppola",
      "duration": "3h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9
    },
]


let moviesFilter = movies.filter(function (movie,index,arr){
return movie.genre.includes(`Drama`) || movie.director.includes("Dylan Torres")
});

let moviesFilter2 = movies.map(function (movie,index,arr){
  
    return {title:movie.title}
  

});

//reduce Avg
let avg ;
let total = 0;
//for(let i = 0; i <movies.length; i++){
  //total = movies[i].rate + total;
  //total  += movies[i].rate
//}


movies.forEach((movie,index)=>{
  total = movie.rate + total;
})
avg = total/movies.length

let prom = movies.reduce((acc,movie)=>{
  // acc = acc + ...
return acc += movie.rate
} ,0)
prom =Number( (prom/movies.length).toFixed(2) )
console.log("total",prom)



/*let exampleFilt = [0,1,2].filter((item,idenx)=>{
  return function (item){ //perrotp()
    if(){
      return
    }
    return
  }
})
*/

let orderNew = movies.map(function (movie,idenx){
  return movie
 }).sort(function (a,b){
   if (a.year > b.year) return 1;
    if (a.year == b.year){ 
      if(a.title > b.title) return 1
      if(a.title < b.title) return -1
      return 0;
      }
    if (a.year < b.year) return -1;
   //return a.year + b.year
 })
console.log(movies)
console.log(orderNew)

//filter map reduce
