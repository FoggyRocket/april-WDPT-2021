const input = document.getElementById("count");
const btn = document.querySelector("button") // nos regresa la primera coincidencia

console.log("todo esta bien!!",input)
console.log("todo esta bien x2!!",btn)
// const btn2 = document.getElementsByTagName("button");

// console.log("todo esta bien x3!!",btn2)
/* btn2 = [
    button,
    button,
    ....
].forEach((item,index)=>{
    item.onlcick=()=>{

    }
})

btn2.onclick =function () {
    console.log("ME estan picando")
}

*/
// let objButton = {
//     name:"",
//     type:"",
//     //

//     onclick:()=>{

//     },
//     onmousedown:()=>{

//     }
// }

// objButton.onclick = ()=>{
//     console.log("perro", 2 + 2)
//}
btn.onclick = () => {

    console.log(input.value)

}
//
btn.onmouseenter = () => {
    console.log("El mouse esta arriba de mi")
}
/*
vamos por la cartina (Ejemplo)
*/

const container = document.getElementById("cart")
let total = document.querySelector("span")

//borrar elemento de carrito
function killElement(event){
    //div.target
    event.target.parentNode.remove() 
}


//get total
function getTotal(){
    
    const priceItems = [...document.getElementsByClassName("price")];
    const total = priceItems.reduce((acc,item)=>{
                    //parseInt
                    //item.innerText // traete el texto que contenga tu etiqueta
        return acc += Number(item.innerText)
    },0)
    console.log("el totoal",total)
    return total
}
//function agregar al carrito
function addItem(){
    const price = input.value;
    // aqui creamos una nueva etiqueta  con esta sintax
    const div = document.createElement("div") ;
    const button = document.createElement("button");
    //modificar texto con el innerText
    button.innerText = " Matame!!!!";
    button.onclick = killElement;
    //modifcar HTML innerHTML
    div.innerHTML = `
    <div class="item">
        <div>Producto nombre</div>
        <div class="price">${price}</div>
    </div>
    `
    div.appendChild(button)
    container.appendChild(div)
    total.innerText = getTotal()
    
}

btn.onclick = addItem;


console.log("Perro",total.innerHTML)