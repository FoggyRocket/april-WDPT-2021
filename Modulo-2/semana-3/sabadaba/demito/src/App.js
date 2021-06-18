import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Contador';
import BackgroundC from './BackgrounC';
//npx create-app nombre-app

class App extends Component {
  //state es igual "a una mini base de datos donde se pueden alojar muchos elementos"
  state={
    user:{
      name:"Dylan",
      email:"dylan@ironhack.com"
    },
    count:0,
  }
  //A)

  countMinusPlus = (param) =>{
    let {count} = this.state
    count =  param === "sum" ? count + 1 : count -1;
    this.setState({count})

    // if(param === "sum"){
    //   let sum = this.state.count + 1;

    //   this.setState( { count : sum } )
    // }else{
    //     let count = this.state.count - 1;
    //     this.setState({ count })
    // }
  }

  render(){
    //sacar valores del state


    console.log("el nombre es",this.state)
    const { user } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={()=>{
            this.setState({superPro:"dylan"})
          }}>Add state</button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            El nombre es: "{user.name}"
          </p>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.email}
          </a>
          <p>{this.state.count}</p>
          <Contador
            name="contador"
            onPress={this.countMinusPlus}
          >
             loremajidioasjdiosajdiajsiodjasijd
          loremajidioasjdiosajdiajsiodjasijd
          
          </Contador>
        </header>
        <BackgroundC>
          <p>{this.state.count}</p>
          <Contador
            name="contador"
            onPress={this.countMinusPlus}
          />
        </BackgroundC>
      </div>
    );
  }
}

export default App;
