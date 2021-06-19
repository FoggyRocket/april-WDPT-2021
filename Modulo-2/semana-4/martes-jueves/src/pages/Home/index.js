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

import { Nav, Detail,Card } from '../../components'
//estamos exportando unicamente una const de un archivo (No es todo el archivo)
import { getAllCharacters } from '../../services/characterServices';
class Home extends Component{
  state={
    username:'',
    isVisible:true,
    charaters:[]
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


  componentDidMount(){
    // axios.get("https://rickandmortyapi.com/api/character")
    // .then(res => console.log("responde:",res))
    // .catch(err => console.log("error",err))
    getAllCharacters()
    .then(res => {
      let charaters = res.data.results.slice(0,6)
      this.setState({ charaters }) 
    })
    .catch(err => console.log("error",err))
  }



  render(){
    //esto es destructurando para tener el codigo un poco mas limpio
    const { username,charaters } = this.state
    const { handleChange } = this
    console.log("charactter",charaters)
    return (
      <div >
        <header>
          <Nav handleChange={handleChange} />
        </header>

        {this.state.isVisible && <Detail name={username} />}
        {/* AQUI VOY  A MOSTRAr mis personajes que mande pedir  */}
        <section>
          {charaters.map((character,index_c)=>(
            <Card
              // key={character.id}
              key={index_c}
              //a)
              //name={character.name}
              //location={}
              //image={}
              //image={}
              //image={}
              //b)
              {...character}
            />
          ))}
        </section>
      </div>
    );
  }



}

export default Home;
