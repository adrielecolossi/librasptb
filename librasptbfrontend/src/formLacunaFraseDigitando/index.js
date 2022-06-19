import Reac from "react";
import HeaderOne from "../header/index.js";
import { DivInputForm, Title, DivSelect, SendButton, Input } from "./styles.js";

function FormLacunaFraseDigitando() {
  return (
    <>
      <HeaderOne logged={true}></HeaderOne>
      <Title fontSize={2.5} color={"#000000"}>
        Preencher lacuna da frase digitando
      </Title>
      <Title fontSize={1} color={"#7A7A7A"}>
        Modelo em que se digita uma palavra para preencher uma frase
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
          <label for="inputimg">Imagem</label>
          <Input name="inputimg" type="file" color={"#8ECAE6"}></Input>
        </div>
        <br />
        <div>
          <label for="frase">Frase</label>
          <Input name="frase" type="text" color={"#8ECAE6"}></Input>
        </div>
        <br />
        <div>
          <label for="lacuna">Palavra que será a lacuna</label>
          <Input name="lacuna" type="text" color={"#8ECAE6"}></Input>
        </div>
        <br />
        <SendButton> Enviar </SendButton>
      </DivInputForm>
    </>
  );
}
export default FormLacunaFraseDigitando;
