import React, { useState, useEffect } from "react";
import { unmountComponentAtNode, render } from "react-dom";
import HeaderOne from "../header/index.js";
import { BackBanner } from "./styles";
import { LoginForm } from './styles';

const axios = require("axios");

let token = "";
function Login() {
  let [email, setEmail] = useState("");
  let [senha, setSenha] = useState("");
  const enviaDados = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", {
        email: email,
        senha: senha,
      })
      .then(
        (response) => {
          token = response.data.token;
          let emailLogado = response.data.email;
          console.log(token);
          localStorage.setItem("tokenLibrasPTB", token);
          localStorage.setItem("user", emailLogado);
          alert("Autenticado");
          window.location.href = 'http://localhost:3000/home';
        },
        (error) => {
          alert("Não autenticado, há erros na senha ou no email");
          console.log(error);
        }
      );
  };
let header;
  const [isLoggedIn, setIsLoggedIn]= useState()

  useEffect(() => {
    let token = localStorage.getItem('tokenLibrasPTB');
    const getLogin = async () => {
      const response = await axios.get(
        "http://localhost:3001/login", { params: { token } }
      );
      setIsLoggedIn(response.data.msg);
    console.log(isLoggedIn)
    };
    getLogin();
  }, []);
  if (isLoggedIn === 'loggedIn') {
   header = <HeaderOne logged={true}></HeaderOne>
    } else {
  header = <HeaderOne logged={false}></HeaderOne>
    }
  return (
    <>
      {header}
      <BackBanner>
        <LoginForm>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            onChange={(v) => setEmail(v.target.value)}
            value={email}
          />

          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            onChange={(v) => setSenha(v.target.value)}
            value={senha}
          />
          <button
            onClick={enviaDados}
            value="Enviar"
            className="forms-button"
            id="buttonLogin"
          >
            Logar{" "}
          </button>
        </LoginForm>

        <img src="https://drive.google.com/uc?id=1JJYSNQ5xjSx8QYRRDDd7OtoiN1W7_9yS" />
      </BackBanner>
    </>
  );
}

export default Login;
