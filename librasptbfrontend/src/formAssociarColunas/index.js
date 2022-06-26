import React from "react";
import HeaderOne from "../header/index.js";
import { useState, useEffect } from "react";
import axios, { post } from "axios";
import { InputForm, DivInputForm, Title, DivSelect} from "./styles.js";
import ButtonJS from "../components/Input/Button/index.js";
import InputJS from "../components/Input/index.js";

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
    e.preventDefault();
    axios 
      .post("http://localhost:3001/questao", {
        token,
        tipo,
        categoria, 
      })
      .then((response) => {})
      .catch((error) => {
        alert(error);
      });
  };

  const enviaImagem = async (e) => {
    e.preventDefault();
    axios 
      .post("http://localhost:3001/imagem", {})
      .then((response) => {})
      .catch((error) => {
        alert(error);
      });
  };
  const categorias = [
    {
      name: "Matemática",
    },
    {
      name: "Biologia",
    }
  ]
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

if(isLoggedIn=='loggedIn'){
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
          <label for="categoria">Categoria</label>
          <select
            id="categoria"
            style={{ marginLeft: "5%" }}
          >
            {categorias.map((categoria) => {
              return (
                <option key={categoria.nome} value={categoria.id}>
                  {categoria.nome}
                </option>
              );
            })}
          </select>
          <ButtonJS
            onClick={""}
            backgroundColor={"#8ECAE6"}
            color={"#000000"}
            borderRadius={0}
            name={"Criar Categoria"}
          />
        </DivSelect>
        <InputForm>
          <p> Imagens </p>
          <p> Palavras </p>
        </InputForm>
        <InputForm>
          <InputJS type="file" value={imagem1}></InputJS>
          <hr></hr>
          <InputJS type="text" value={alternativa1} name="alternativa1"></InputJS>
        </InputForm>
        <InputForm>
          <InputJS type="file" value={imagem2}></InputJS>
          <hr></hr>
          <InputJS type="text" value={alternativa2} name="alternativa2"></InputJS>
        </InputForm>
        <InputForm>
          <InputJS type="file" value={imagem3}></InputJS>
          <hr></hr>
          <InputJS type="text" value={alternativa3} name="alternativa3"></InputJS>
        </InputForm>
        <InputForm>
          <InputJS type="file" value={imagem4}></InputJS>
          <hr></hr>
          <InputJS type="text" value={alternativa4} name="alternativa4"></InputJS>
        </InputForm>
        <InputForm>
          <InputJS type="file" value={imagem5}></InputJS>
          <hr></hr>
          <InputJS type="text" value={alternativa5} name="alternativa5"></InputJS>
        </InputForm>

        <ButtonJS
          onClick={""}
          backgroundColor={"#219EBC"}
          color={"#FFFF"}
          borderRadius={0}
          name={"Criar Questão"}
        />
      </DivInputForm>
    </>
  );}else{
    return(<div>{header}<p>Faça login primeiro</p></div>)
  }
}
export default FormAssociarColunas;
