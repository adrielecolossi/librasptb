import React from "react";
import HeaderOne from "../header/index.js";
import { useState } from "react";
import axios, { post } from "axios";
import { InputForm, DivInputForm, Title, DivSelect, SendButton } from "./styles.js";

const token = localStorage.getItem("token");

function FormAssociarColunas() {
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem1, setImagem1] = useState("");
  const [imagem2, setImagem2] = useState("");
  const [imagem3, setImagem3] = useState("");
  const [imagem4, setImagem4] = useState("");
  const [imagem5, setImagem5] = useState("");
  const [alternativa1, setAlternativa1] = useState("");
  const [alternativa2, setAlternativa2] = useState("");
  const [alternativa3, setAlternativa3] = useState("");
  const [alternativa4, setAlternativa4] = useState("");
  const [alternativa5, setAlternativa5] = useState("");
  const enviaDados = async (e) => {
    console.log("enviando");
    e.preventDefault();

    axios //faz chamada http
      .post("http://localhost:3001/questao", {
        token,
        tipo,
        categoria, // nome: nome
      })
      .then((response) => {})
      .catch((error) => {
        console.log("erro enviando formulario");
        console.log(error);
      });
  };

  const enviaImagem = async (e) => {
    //console.log(imagem);
    e.preventDefault();

    axios //faz chamada http
      .post("http://localhost:3001/imagem", {
        //   file: imagem // nome: nome
      })
      .then((response) => {})
      .catch((error) => {
        console.log("erro enviando formulario");
        console.log(error);
      });
  };

  return (
    <>
      <HeaderOne logged={true}></HeaderOne>
      <Title fontSize={2.5} color={"#000000"}>
        Associar Colunas
      </Title>
      <Title fontSize={1} color={"#7A7A7A"}>
        Modelo em que se associa duas respostas de colunas
      </Title>

      <DivInputForm>
        <DivSelect>
          <label for="categoria"> Categoria</label>
          <select name="categoria">
            <option> Matemática </option>
            <option> Biologia </option>
          </select>
          <br />
          <button> Criar Categoria </button>
        </DivSelect>

        <InputForm>
          <p> Imagens </p>
          <p> Palavras </p>
        </InputForm>
        <InputForm>
          <input type="file" value={imagem1}></input>
          <hr></hr>
          <input type="text" value={alternativa1} name="alternativa1"></input>
        </InputForm>
        <InputForm>
          <input type="file" value={imagem2}></input>
          <hr></hr>
          <input type="text" value={alternativa2} name="alternativa2"></input>
        </InputForm>
        <InputForm>
          <input type="file" value={imagem3}></input>
          <hr></hr>
          <input type="text" value={alternativa3} name="alternativa3"></input>
        </InputForm>
        <InputForm>
          <input type="file" value={imagem4}></input>
          <hr></hr>
          <input type="text" value={alternativa4} name="alternativa4"></input>
        </InputForm>
        <InputForm>
          <input type="file" value={imagem5}></input>
          <hr></hr>
          <input type="text" value={alternativa5} name="alternativa5"></input>
        </InputForm>

        <SendButton> Enviar </SendButton>
      </DivInputForm>
    </>
  );
}
export default FormAssociarColunas;
