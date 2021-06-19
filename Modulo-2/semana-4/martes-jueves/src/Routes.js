
import { Switch, Route} from 'react-router-dom';
import { Detail } from './components';

const Routes = () => (
    <Switch>
        {/* Aqui va a estar el listado de todas mis rutas que se usan en esta app */}
        <Route exact path="/" component={() => <h1>Home</h1>}    />
        <Route exact path="/login" component={() => <h1>Esto sera un login</h1>}   /> 
        <Route exact path="/detail/:id" component={Detail} />

    </Switch>
)

export default Routes;