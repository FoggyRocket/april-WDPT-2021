import './App.css';
import React,{Component} from 'react'
import { Nav} from './components'
import Routes from './Routes';
class App extends Component{
  state={
    username:''
  }
  handleChange=(e)=>{
    this.setState({ username: e.target.value })
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
        <Routes/>
      </div>
    );
  }
}

export default App;
