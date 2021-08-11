import './App.css';
import Routes  from './app/navigation/Routes';
import {AppCtxProv} from './app/hooks/context'
function App() {
  return (
    <AppCtxProv>
      <Routes/>
    </AppCtxProv>
  );
}

export default App;
