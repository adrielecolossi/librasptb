import React, { useState } from "react";
import "./login.css";
import { unmountComponentAtNode, render } from "react-dom";
import HeaderOne from "../header/header.js";

const axios = require("axios");

let token= '';
function Login() {
 
  let [email, setEmail] = useState('');
  let [senha, setSenha] = useState('');
  const enviaDados = async (e) => {
   
    e.preventDefault(); 
    /*
    axios.post('http://localhost:3001/login', 
    {
      email,
     senha // nome: nome
    }).then((response) => {
        
        console.log('resposta da chamada http');
        console.log(response);
      })
      .catch((error) => {
        console.log('erro enviando formulario')
        console.log(error);
      });

*/

axios.post('http://localhost:3001/login', 
{
  email:email,
 senha:senha // nome: nome
}).then((response) => {
   token = response.data.token;
   let emailLogado = response.data.email;
   console.log(token)
   /*
   17:20
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkcmllbGUuY29sb3NzaTRAZ21haWwuY29tIiwiaWF0IjoxNjM5MzQwMzY5LCJleHAiOjE2MzkzNDM5Njl9.TfWCer4HCP0rcYVLCbP8jQF4FrnynhcFuZO8zpdYJlE
   18:20 tentar de novo
   */
//axios.defaults.headers.common['Authorization'] = token;
localStorage.setItem("token",token);
localStorage.setItem("user",emailLogado);
   //axios.defaults.headers.common.Authorization = token
  alert('Autenticado');
 /*let titleId = document.getElementById("titleLogin")
 let emailId = document.getElementById("email")
 let senhaId = document.getElementById("senha")
 let buttonId = document.getElementById("buttonLogin")
 titleId.style.display='none'
 emailId.style.display='none'
 senhaId.style.display='none'
 buttonId.style.display='none'
 */// ReactDOM.unmountComponentAtNode(component);

  }, (error) => {
   alert("Não autenticado, há erros na senha ou no email")
    console.log(error);
  });
    
     
}
  return (
    <div>
    <HeaderOne />
      <fieldset classname="forms">
        <legend id="titleLogin"> Faça seu login</legend>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={(v) => setEmail(v.target.value)}
          value={email}
        />
        <br />
        <br />
        <input
          type="password"
          id="senha"
          name="senha"
          placeholder="senha"
          onChange={(v) => setSenha(v.target.value)}
          value={senha}
        />
        <br />
        <br />
        <button onClick={enviaDados} value="Enviar" className="forms-button" id="buttonLogin">
          Enviar{" "}
        </button>
      </fieldset>
    </div>
  );
}

export default Login;


