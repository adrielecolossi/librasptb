import React, {useState, useEffect} from "react";
import HeaderOne from "../header/index.js";
import axios, { post } from "axios";
import { DivInputForm, Title, DivSelect } from "./styles.js";
import ButtonJS from "../components/Input/Button/index.js";
import InputJS from "../components/Input/index.js";
function FormDigitarLacuna() {
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
        Digitar lacuna
      </Title>
      <Title fontSize={1} color={"#7A7A7A"}>
        Modelo em que se digita uma palavra para preencher uma frase
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
      </DivInputForm>
      <DivInputForm>
        <div>
          <label for="inputimg">Imagem</label>
          <InputJS name="inputimg" type="file" color={"rgba(142, 202, 230, 0.5)"}></InputJS>
        </div>
        <br />
        <div>
          <label for="frase">Frase</label>
          <InputJS name="frase" type="text" color={"rgba(142, 202, 230, 0.5)"}></InputJS>
        </div>
        <br />
        <div>
          <label for="lacuna">Palavra que será a lacuna</label>
          <InputJS name="lacuna" type="text" color={"rgba(142, 202, 230, 0.5)"}></InputJS>
        </div>
        <br />
          <ButtonJS
            onClick={""}
            backgroundColor={"#219EBC"}
            color={"#FFFF"}
            borderRadius={0}
            name={"Criar Questão"}
          />
      </DivInputForm>
    </>
  ); }else{
    return(<div>{header}<p>Faça login primeiro</p></div>)
  }

}
export default FormDigitarLacuna;
