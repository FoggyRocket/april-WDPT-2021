const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const ctx2 = canvas.getContext("2d")
ctx.beginPath()//Inicia un trazo solo espera  
    ctx.moveTo(50,50) //Coloca la posicion incial para el trazo
    ctx.lineTo(250,50)//Termina de dibujar el trazo 

    ctx.stroke() // es para ejecutar el dibujo 


    ctx.moveTo(250,50)
    ctx.lineTo(250,150)
    ctx.stroke()


ctx.closePath()

