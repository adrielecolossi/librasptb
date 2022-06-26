import React, { useState, useEffect } from "react";
import { Title, DivForm, DivInput, DivSelect, Div } from "./styles";
import HeaderOne from "../header/index.js";
import axios from "axios";
import Modal from "react-modal";
import ButtonJS from "../components/Input/Button/index.js"
import InputJS from "../components/Input/index.js"
const token = localStorage.getItem("token");

function FormOrdenarFrase() {
  const criaCategoria = async (e) => {
    e.preventDefault();
    if (nomeCategoria === undefined || imagemCategoria === undefined) {
      alert("Dados incompletos");
    } else {
      const fd = new FormData();
      fd.append("file", imagemCategoria);
      const response = await axios.post("http://localhost:3001/imagem", fd);
      const midia = "https://drive.google.com/uc?id=" + response.data;
      axios
        .post("http://localhost:3001/categoria", {
          nome: nomeCategoria,
          midia,
        })
        .then((response) => {
          alert(response);
        })
        .catch((error) => {
          alert(error);
        });

      setIsOpen(false);
    }
  };
  const criaQuestao = async (e) => {
    e.preventDefault();
    if (categoriaQuestao === undefined || fraseQuestao === undefined) {
      alert("Dados incompletos");
    } else {
      const fd = new FormData();
      fd.append("file", imagemCategoria);
      const response = await axios.post("http://localhost:3001/imagem", fd);
      const midia = "https://drive.google.com/uc?id=" + response.data;
      axios
        .post("http://localhost:3001/questaoDigitarMidia", {
          token,
          resposta: fraseQuestao,
          midia,
          categoria: categoriaQuestao,
        })
        .then((response) => {
          alert(response);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [categorias, setCategorias] = useState([]);
  const [nomeCategoria, setNomeCategoria] = useState();
  const [imagemCategoria, setImagemCategoria] = useState();
  const [fraseQuestao, setFraseQuestao] = useState();
  const [categoriaQuestao, setCategoriaQuestao] = useState();

  useEffect(() => {
    const getCategorias = async () => {
      const categoriasDoBanco = await axios.get(
        "http://localhost:3001/categoria"
      );
      setCategorias(categoriasDoBanco.data);
    };
    getCategorias();
  }, []);
  return (
    <>
      <HeaderOne logged={true} />
      <Title fontSize={2.5} color={"#000000"}>
        Ordenar frase
      </Title>
      <Title fontSize={1} color={"#7A7A7A"}>
        Modelo em que se ordena palavras de uma frase
      </Title>
      <Div>
        <DivForm>
          <form enctype="multipart/form-data" method="POST">
            <DivSelect>
              <label for="categoria">Categoria</label>
              <select
                id="categoria"
                style={{ marginLeft: "5%" }}
                onChange={(v) => setCategoriaQuestao(v.target.value)}
              >
                {categorias.map((categoria) => {
                  return (
                    <option key={categoria.nome} value={categoria.id}>
                      {categoria.nome}
                    </option>
                  );
                })}
              </select>
            </DivSelect>
            <DivInput>
              <label for="inputfrase">Frase </label>
              <InputJS
                id="inputfrase"
                type="text"
                name="fraseQuestao"
                color="rgba(142, 202, 230, 0.5)"
                onChange={(v) => setFraseQuestao(v.target.value)}
                value={fraseQuestao}
              />
            </DivInput>
              <ButtonJS
                onClick={criaQuestao}
                backgroundColor={"#219EBC"}
                color={"#FFFF"}
                borderRadius={0}
                name={"Criar Questão"}
              /> 
          </form>
        </DivForm>
        <DivForm>
          <h8> Clique no botão abaixo para criar uma categoria</h8>
          <br />
            <ButtonJS
              onClick={openModal}
              backgroundColor={"#8ECAE6"}
              color={"#000000"}
              borderRadius={0}
              name={"Criar Categoria"}
            /> 
         
        </DivForm>
      </Div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          overlay: {
            backgroundColor: "#000;",
            display: "flex",
            flexDirection: "column",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            backgroundColor: "#000;",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <h1>Criar Categoria</h1>
        <form enctype="multipart/form-data" method="POST">
          <label for="nome">Nome da categoria:</label>
          <br></br>
          <InputJS
            type="text"
            name="nomeCategoria"
            onChange={(v) => setNomeCategoria(v.target.value)}
            value={nomeCategoria}
            style={{ marginTop: "5%" }}
          />
          <br></br>
          <br></br>
          <label for="url">Logo da categoria:</label>
          <br></br>
          <InputJS
            type="file"
            name="url"
            style={{ marginTop: "3%", marginBottom: "5%" }}
            onChange={(v) => setImagemCategoria(v.target.files[0])}
          ></InputJS>
          <br></br>
          <br></br>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ButtonJS
              onClick={criaCategoria}
              backgroundColor={"rgba(142, 202, 230, 0.5)"}
              borderRadius={"20px"}
              name={"Criar"}
            />
            <ButtonJS
              onClick={closeModal}
              backgroundColor={"rgba(229, 116, 116, 0.5)"}
              borderRadius={"20px"}
              name={"Cancelar"}
            />
          </div>
        </form>
      </Modal>
    </>
  );
}

export default FormOrdenarFrase;
