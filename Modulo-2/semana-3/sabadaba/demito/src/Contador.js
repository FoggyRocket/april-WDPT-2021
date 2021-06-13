import React from 'react';



const Contador = (props) => {
    console.log("que es esto",props)
    return(
        <div>
            <button onClick={()=>props.onPress("rest")}>-</button>
            <button onClick={()=>props.onPress("sum")}>+</button>
        </div>
    )
}

export default Contador ;