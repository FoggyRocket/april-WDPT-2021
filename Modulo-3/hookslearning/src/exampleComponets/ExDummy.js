
            //tiene parms(props) = {}
            //A)
            //({name,phone,gender, lastName })
            //B)
            //...rest = el resto de los props
            // (props) >= 10 
            //name = dylan
            //phone = 1234567890

const ExDummy = ( { name, phone, gender, lastName, ...rest } ) => (
    <div>
        <span>Nombre: {name} </span>
        <span>Apellido: {lastName}</span>
        <span>Telefono:  {phone}</span>
        <span>Sexo:{gender}</span>
        <span>Direccion:{rest.address}</span>
    </div>
)

export default ExDummy


//A)
//  export const ExDummy = ( { name, phone, gender, lastName, ...rest } ) => ( ...
//import {ExDummy} from '../../ExDummy/

//B)
//export default ExDummy
//import ExDummy from '../../ExDummy/