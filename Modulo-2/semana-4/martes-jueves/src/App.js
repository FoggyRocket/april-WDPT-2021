import './App.css';
import React,{Component} from 'react'
/*
a)
import { NavBar,Perro,Gato,OtroPerro}  from 'exjemplo'

b)
import NavBar  from 'exjemplo/Component/Nav'
import NavBar  from 'exjemplo'
import NavBar  from 'exjemplo'
import NavBar  from 'exjemplo'
import NavBar  from 'exjemplo'
*/

import { Nav, Detail } from './components'

class App extends Component{
  state={
    username:'',
    isVisible:true,
  }

  handleChange=(e)=>{

    console.log("que esto",e.target.name,e.target.value)

    this.setState({ username: e.target.value })
  }

  componentDidUpdate(prevProps,prevState){
    console.log("previu",prevState)
    if(prevState.username === "Dy"){
      this.setState({isVisible:false})
    }
  }



  render(){
    //esto es destructurando para tener el codigo un poco mas limpio
    const { username } = this.state
    const { handleChange } = this
    return (
      <div >
        <header>
          <Nav handleChange={handleChange} />
        </header>

        {this.state.isVisible && <Detail name={username} />}
      </div>
    );
  }



}

export default App;
