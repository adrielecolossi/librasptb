import FormAssociarColunas from "./formAssociarColunas/index.js";
import FormMarcarLacuna from "./formMarcarLacuna/index.js";
import FormDigitarLacuna from "./formDigitarLacuna/index.js";
import splashScreen from "./splashScreen/index.js";
import Form from "./form/form.js";
import Login from "./login/login.js";
import Form2 from "./form/formimg.js";
import FormDigitarPalavra from "./formDigitarPalavra/index.js";
import FormAlternativaVideo from "./formAlternativaCorreta/index.js";
import FormAlternativaLacuna from "./formAlternativaLacuna/index.js";
import FormOrdenarFrase from "./formOrdenarFrase/index.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./footer";
function App() {
  return (
    <div id="pag">
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route
            path="/FormAssociarColunas"
            component={FormAssociarColunas}
          ></Route>
          <Route
            path="/FormMarcarLacuna"
            exact
            strict
            component={FormMarcarLacuna}
          ></Route>
          <Route
            path="/FormDigitarLacuna"
            exact
            strict
            component={FormDigitarLacuna}
          ></Route>
          <Route path="/form" component={Form}></Route>
          <Route path="/form2" component={Form2}></Route>
          <Route
            path="/FormDigitarPalavra"
            exact
            strict
            component={FormDigitarPalavra}
          ></Route>
          <Route
            path="/FormOrdenarFrase"
            exact
            strict
            component={FormOrdenarFrase}
          ></Route>
          <Route
            path="/FormAlternativaCorreta"
            exact
            strict
            component={FormAlternativaVideo}
          ></Route>
          <Route
            path="/FormAlternativaLacuna"
            exact
            strict
            component={FormAlternativaLacuna}
          ></Route>
          <Route path="/" component={splashScreen}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
