
import Home from "./home/home.js";
import Form from "./form/form.js";
import Login from "./login/login.js";
import Form2 from "./form/formimg.js";
import Contato from "./contato/contato.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {

  return (
    <div id="pag">
      <Router>
        
        <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/form" component={Form}></Route>
        <Route path="/form2" component={Form2}></Route>
        <Route path="/contato" component={Contato}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
     
      </Router>
    </div>
  );
}

export default App;
