import React from 'react';

// Switch que nos va apermitir cambiar entre paginas 
// Route que nos va a dejar renderizar nuestras paginas
import {Switch,Route} from 'react-router-dom'

//importare todas las pages
import { Home,Auth,CreateProduct } from './app/pages'
const Routes = () =>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/newProduct" component={CreateProduct} />
        <Route exact path="/signup" component={Auth} />
        <Route exact path="/:id" component={()=><h1>Aqui iremos por un solo producto</h1>} />
    </Switch>
)

export default Routes