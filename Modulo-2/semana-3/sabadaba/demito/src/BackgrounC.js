import React, { Component} from 'react'



export default class BackgroundC extends Component{
    state={
        name:"Soy el hijo",
    }

    render({children}=this.props){
        console.log("los hijos",this.props)
        return (
            <div style={{
                backgroundColor:"green"
            }}>
                <span>{this.state.name}</span>
                {children}
            </div>
        )
    }
}