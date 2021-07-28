import { useState,useEffect } from 'react';
import './App.css';
import { Loader }  from './Loadere'
function App() {
  const [loader,setLoader] = useState(true)
  const [count,setCount] = useState(0)
  const [title,setTitle] = useState("")
  const onPressCount =(value)=>{
    
    if(value === 1){
      //voy a sumar
      //a)
      //setCount(prevState => prevState + 1 )
      //b)
      setCount(count + 1)
      
    }else{
      //restando
      //a)
      setCount(prevState => prevState - 1 )
      //b)
      //setCount(count - 1)
      
    }

  }

  const handleChange = (e) =>{
    const {name,value} = e.target
    setTitle(value)
  }

  useEffect(()=>{

    setTimeout(()=>{
      setLoader(false)
    },3000 )

  } , [] )


  useEffect(()=>{

    console.log("me ejecunto con el count",count)
  
  } , [count] )

  useEffect(()=>{

    if(title==="perro"){
      console.log("Nova")
    }
  } , [title] )

  return (
    loader ?
    <Loader/>
    :
    <div className="App">
      <span>Hola mundo</span>
      <div className="containerCount">
        <button onClick={()=>onPressCount(1)}>+</button>
        <span>{count}</span>
        <button onClick={()=>onPressCount(0)}>-</button>
      </div>

      <div>
          <input
            name="valor"
            onChange={handleChange}
          />
          <span>Texto: {title}</span>
      </div>
    </div>
   

  );
}

export default App;
