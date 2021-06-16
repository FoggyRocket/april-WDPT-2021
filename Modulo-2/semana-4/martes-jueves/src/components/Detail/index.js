import React, {Component} from 'react';


export default class Detail extends Component{


    componentWillUnmount(){
        console.log("ADIOSSOASODASODASODASODAOSDOASODASOD")
         
      }
    
    
    render({name}=this.props){
        return(
            <div>
                <h1>Este es mi nombre: {name} </h1>
            </div>
        )
    }
}