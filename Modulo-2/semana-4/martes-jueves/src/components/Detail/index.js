import React, {Component} from 'react';


export default class Detail extends Component{


    componentWillUnmount(){
        console.log("ADIOSSOASODASODASODASODAOSDOASODASOD")
         
      }
    
    
    render({name}=this.props){
        console.log(this.props)
        return(
            <div>
                <h1>Este es mi  id:{this.props.match.params.id} </h1>
            </div>
        )
    }
}