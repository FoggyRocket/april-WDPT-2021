//
import React, {Component} from'react';

// class Card extends Component{

//     perroMaster=(params)=> {
//     // const{name,perro,value}=this.props

//     }
//     render({name,perro,value}=this.props){
//        // const{name,perro,value}=this.props
//         return(
//             <div/>
//         )
//     }
 
// }

//func
// export const Card = (props) => {
   
//     const perroMaster = () => {
//         const  {name,value} = props
//         console.log("perro",props.name)
//     }
//     return(
//         <div></div>
//     )
// }


const Card = ({name,phone}) => (
    <div>
        <span>Nombre: {name} </span>
        <span>#: {phone} </span>
    </div>
)


export default Card;