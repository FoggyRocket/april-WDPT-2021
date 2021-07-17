//React
import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import Card from './Card'
// import {Card} from './Card'
class App extends Component{
  /*
  -Ciclos vida //ºººº
  Como se implemeenta una funcion normal || dentro de un map //ºººº
  los maps  //ºººº
  los props crear un componente
  state 
  css <=== no
  tipos de componentes :
          1-class
          2-conts 
          3-function
  */

  // Ciclos de vida 3
 //SE EJECUTA DESPUES DE CARGAR LOS ELEMENTOS HTML
  // componentDidMount(){
  //   //...
  // }
  // //Me gua morir(Navego, lo elimino o )
  // //para limpiar los setInterval 
  // componentWillUnmount(){
  //   //...
  // }
  // //Siempre esta echuchando!!
  // componentDidUpdate(prevProps){
  //   //if( "Nova" !== "Milo")
  //   //amenos que exista un cambio dee valor hay que hacer un accion!!
  //   if(this.state.perro !== prevProps.perro){
  //     this.setState({perro:prevProps.perro})
  //   }
  //   // 
  // }

  //Crear una funcion
  //a)
  // pressMe(){

  // }
  //b)
  state={
    user:{
      name:"Dylan",
      phone:"5586814383"
    }
  }


  pressMe = (e) => {
      console.log("Me esta puchando!!!",e)
      //
      this.setState({user:{ name:"Nadia", phone:"1234567890" }})
  }

  pressMeParam = (pram,pram2) => {
    //if(pram !== [])
    let {user} = this.state
    user["phone"] = 1212121212121

    this.setState({ user })
    console.log("Que rayos es?",pram,pram2)
  }

  //function para map

  pressMeMap=(perro)=>{
    console.log("estoy dentro del map",perro)
  }

  //funtionWithName = function perritos(){}
  
  render(){
    const perro  = () => {} 
    //destructur
    const { pressMe } = this;
    const { user } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button
            // valaores que sean numeros, funcionees, arreglos, objetos, boolean van encerrado en llave
            name="perritoBoton"
            //onClick={(event)=>this.pressMe(event)}
            onClick={pressMe}
           >
             Press ME
             {"Normal"}
             </button>
             <button
                onClick={(e)=>{
                  console.log("khe!!!",e)
                  this.pressMeParam(e,true)
                  
                }}
             >Pasale un prams</button>

              <button
                onClick={ ()=>this.pressMeParam("estee ees eel nuevo") }
             >Pasale un prams</button>
          
        </header>

        {/* [{...},{...},{...}] */}
        {[0,1,2,3,4].map((item,index_list)=>(
          <div
          //siempre x3 debe tener un  prop llamado "key" "id || index_list"
          key={index_list}
                //item.name
          >

            <button
              //si tengo un boton dentro de un map!!!
              //forazar a que esstee denetro de un arrow
              onClick={()=>this.pressMeMap(item)}
            >Perro {item} </button>
          </div>
        ))}

        <Card 
        //A)
         // name={this.state.user.name}
          //  phone={user.phone}
          // pic={user.pic}
          // 
        //b) le mandamos todas todas las keys si se llaman igual!! se muestran
        {...user}
        />
      </div>
    );
  }
}

export default App;
