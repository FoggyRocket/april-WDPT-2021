import {useState,useEffect} from 'react';

function FnComponent(props){
    /**
     * state={
     * title:
     * }
     */
    //de esta forma se declara un hooks
          // 'Perrito',()=>this.setState({title:''})
          //si el useState() se ejecuta vacio eel valor  de nuestro  contenedor es undefined
     const [ title, setTitle] = useState('Hola mundo') 


     //functiones para funcion***
   const runPacoRun=()=>{
        //usamos nuestro setTitle
        setTitle("este es el nuevo titulo")
     }
    // estardar 
    function perro(){

    }

    //se utiliza el useEffect
    // remplazar los ciclos de vida 3 => 1(useEffect)
    //Tiene 2 parametros
    //1º  es un callback = ()=>{}
    //2º es un [] o [var]
    // se ejecuta al cargar el  archivo tambien tienende a estar escuchado
    // a determinadas variables(const,let,props) para volver a ejecutarse
    // y si el arreglo esta vacio solo se ejecutara una vez en su vida
    // tambien si contiene un return esta en espera que el componente se muera
    // para poder ejecutar esa acción

    //componentDidmout Se ejecuta una vez
    useEffect(()=>{
        perro()

        promesa().then(res=>{}).catch(e=>{})
        
    },[])//<-- este es un useEffect normal se ejecuta una vez carguee el archivo


    //Como si fuer un didUpdate esucha cuando el valor del [var] cambia para ejecutarse
    useEffect(()=>{
        if(title != "perro"){
            console.log("Se actulizo a otra cosa")
        }
    },[title ])

    //el que se muere didUnmount, espera a que el component se desmonte
    useEffect(()=>{
        /*---*/
        return ()=>{
            console.log("Me voy a morir adios!")
        }
    },[ ])

    return(
        <div>
            <span>Esto es una Function component {title}</span>
        </div>
    )
}

export default Fn