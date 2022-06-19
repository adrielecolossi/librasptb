import FormAssociarColunas from "./formAssociarColunas/index.js";
import FormLacunaFraseAlternativa from "./formLacunaFraseAlternativa/index.js";
import FormLacunaFraseDigitando from "./formLacunaFraseDigitando/index.js";
import splashScreen from "./splashScreen/index.js";
import Form from "./form/form.js";
import Login from "./login/login.js";
import Form2 from "./form/formimg.js";
import Contato from "./contato/contato.js";
import FormDigitarPalavraVideo from "./formDigitarPalavraVideo/index.js";
import FormDigitarPalavraImagem from "./formDigitarPalavraImagem/index.js";
import FormDigitarPalavraVideoLibras from "./formDigitarPalavraVideoLibras/index.js";
import FormAlternativaVideo from "./formAlternativaVideo/index.js";
import FormAlternativaImagem from "./formAlternativaImagem/index.js";
import FormAlternativaFraseCorreta from "./formAlternativaFraseCorreta/index.js";
import FormOrdenarPalavraFrase from "./formOrdenarPalavrasFrase/index.js";
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
            path="/FormLacunaFraseAlternativa"
            exact
            strict
            component={FormLacunaFraseAlternativa}
          ></Route>
          <Route
            path="/FormLacunaFraseDigitando"
            exact
            strict
            component={FormLacunaFraseDigitando}
          ></Route>
          <Route path="/form" component={Form}></Route>
          <Route path="/form2" component={Form2}></Route>
          <Route path="/contato" component={Contato}></Route>
          <Route
            path="/FormDigitarPalavraVideo"
            exact
            strict
            component={FormDigitarPalavraVideo}
          ></Route>
          <Route
            path="/FormDigitarPalavraImagem"
            exact
            strict
            component={FormDigitarPalavraImagem}
          ></Route>
          <Route
            path="/FormDigitarPalavraVideoLibras"
            exact
            strict
            component={FormDigitarPalavraVideoLibras}
          ></Route>
          <Route
            path="/FormOrdenarPalavraFrase"
            exact
            strict
            component={FormOrdenarPalavraFrase}
          ></Route>
          <Route
            path="/FormAlternativaVideo"
            exact
            strict
            component={FormAlternativaVideo}
          ></Route>
          <Route
            path="/FormAlternativaImagem"
            exact
            strict
            component={FormAlternativaImagem}
          ></Route>
          <Route
            path="/FormAlternativaFraseCorreta"
            exact
            strict
            component={FormAlternativaFraseCorreta}
          ></Route>
          <Route path="/" component={splashScreen}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
