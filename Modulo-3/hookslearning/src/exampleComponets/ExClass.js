import React, { Component} from 'react';




class ExClass extends Component{
    state={
        title:'Esto es  una class',
        mePuchan:()=>{}
    }
    /** 
     * 
     * methods
    */

    runPacoRun = () => {
        console.log("Corre Paco Corre")
        //nos permite crear o editar una llave
        this.setState({title:"perro"})

        //funcion en el state
        //this.state.mePuchan()
    }

    /**
     * 
     * Method Cyclelife 
     */
    
    //siempre anda es escuchando
    componentDidUpdate(prevProps,prevState){
        //validar ya sea el state o el props para evitar que se cilce infinto
        if("perro" !== prevState.title){

        }
    }

    render(){
        return (
            <div>
                <span onClick={()=>{
                    //asi llamamos o ejecutamo una funcion
                    this.runPacoRun()
                }}>Esto es una class {this.state.title}</span>
            </div>
        )
    }

    componentDidMount(){
         console.log("quito  el loader")
    }

    componentWillUnmount(){
        console.log("me voy  morir borra mi hisstorial de chrome")
    }

}

export default ExClass;