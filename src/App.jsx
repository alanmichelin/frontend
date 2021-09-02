import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Store from "./store.jsx";
import Inicio from './home.jsx'

function App() {
 

  return (

    <Router>
      
    <Switch>
      <Route exact path='/' component={Inicio}/>

      <Route path='/store' component={Store}>
      <Store/>
      </Route>
    </Switch>
    </Router>

  )
}

export default App;
