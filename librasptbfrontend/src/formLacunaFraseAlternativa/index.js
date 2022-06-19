import React from "react";
import HeaderOne from "../header/index.js";
import { DivInputForm, Title, DivSelect, SendButton, Input } from "./styles.js";

function FormLacunaFraseAlternativa() {
  return (
    <>
      <HeaderOne logged={true}></HeaderOne>
      <Title fontSize={2.5} color={"#000000"}>
        Preencher lacuna da frase com alternativa
      </Title>
      <Title fontSize={1} color={"#7A7A7A"}>
        Modelo em que se marca uma alternativa para preencher frase
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
      </DivInputForm>
      <DivInputForm>
        <div>
          <label for="frase">Frase</label>
          <Input name="frase" type="text" color={"#8ECAE6"}></Input>
        </div>
        <br />
        <div>
          <label for="correct">Alternativa Correta</label>
          <Input
            name="correct"
            type="text"
            color={"rgba(144, 230, 142, 0.5)"}
          ></Input>
        </div>
        <br />
        <div>
          <label for="wrong1">Alternativa Errada</label>
          <Input
            name="wrong1"
            type="text"
            color={"rgba(252, 65, 65, 0.5)"}
          ></Input>
        </div>
        <br />
        <div>
          <label for="wrong2">Alternativa Errada</label>
          <Input
            name="wrong2"
            type="text"
            color={"rgba(252, 65, 65, 0.5)"}
          ></Input>
        </div>
        <br />
        <div>
          <label for="wrong3">Alternativa Errada</label>
          <Input
            name="wrong3"
            type="text"
            color={"rgba(252, 65, 65, 0.5)"}
          ></Input>
        </div>
        <br />
        <div>
          <label for="wrong4">Alternativa Errada</label>
          <Input
            name="wrong4"
            type="text"
            color={"rgba(252, 65, 65, 0.5)"}
          ></Input>
        </div>
        <br />
        <SendButton> Enviar </SendButton>
      </DivInputForm>
    </>
  );
}
export default FormLacunaFraseAlternativa;
