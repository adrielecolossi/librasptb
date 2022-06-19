import React, { useState, useEffect } from "react";
import { Title, Button, DivForm, DivInput, DivSelect, Div } from "./styles";
import HeaderOne from "../header/index.js";
import axios, { post } from "axios";
import Modal from "react-modal";

const token = localStorage.getItem("token");

//FORMS
function FormDigitarPalavraVideoLibras() {
  const criaCategoria = async (e) => {
    e.preventDefault();
    console.log(nomeCategoria);
    console.log(imagemCategoria);
    if (nomeCategoria == undefined || imagemCategoria == undefined) {
      alert("Dados incompletos");
    } else {
      const fd = new FormData();
      fd.append("file", imagemCategoria);

      const response = await axios.post("http://localhost:3001/imagem", fd);
      console.log(response.data);
      const midia = "https://drive.google.com/uc?id=" + response.data;
      axios
        .post("http://localhost:3001/categoria", {
          nome: nomeCategoria,
          midia,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log("erro enviando formulario");
          console.log(error);
        });

      setIsOpen(false);
    }
  };

  const criaQuestao = async (e) => {
    e.preventDefault();
    if (
      categoriaQuestao == undefined ||
      palavraQuestao == undefined ||
      videoQuestao == undefined
    ) {
      alert("Dados incompletos");
    } else {
      const fd = new FormData();
      fd.append("file", imagemCategoria);

      const response = await axios.post("http://localhost:3001/imagem", fd);
      console.log(response.data);
      const midia = "https://drive.google.com/uc?id=" + response.data;
      axios
        .post("http://localhost:3001/questaoDigitarMidia", {
          resposta: palavraQuestao,
          midia,
          categoria: categoriaQuestao,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log("erro enviando formulario");
          console.log(error);
        });
    }
    console.log(categoriaQuestao);
    console.log(palavraQuestao);
    console.log(videoQuestao);
  };

  //MODAL
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
  const [videoQuestao, setVideoQuestao] = useState();
  const [palavraQuestao, setPalavraQuestao] = useState();
  const [categoriaQuestao, setCategoriaQuestao] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getCategorias = async () => {
      const categoriasDoBanco = await axios.get(
        "http://localhost:3001/categoria"
      );

      setCategorias(categoriasDoBanco.data);

      console.log(categorias);
    };

    getCategorias();
    console.log(categorias);
  }, []);

  return (
    <>
      <HeaderOne logged={true} />
      <Title fontSize={2.5} color={"#000000"}>
        Digitar palavra do vídeo em libras
      </Title>
      <Title fontSize={1} color={"#7A7A7A"}>
        Modelo em que se digita palavra do vídeo em libras
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
              <label for="inputvid">Vídeo </label>
              <input
                id="inputvid"
                type="file"
                name="url"
                onChange={(v) => setVideoQuestao(v.target.files[0])}
              ></input>
            </DivInput>
            <DivInput>
              <label for="inputpalavra">Palavra </label>
              <input
                id="inputpalavra"
                type="text"
                name="palavraQuestao"
                onChange={(v) => setPalavraQuestao(v.target.value)}
                value={palavraQuestao}
              />
            </DivInput>
            <Button
              backgroundColor={"#219EBC"}
              color={"#FFFF"}
              borderRadius={0}
              onClick={criaQuestao}
            >
              Criar questão
            </Button>
          </form>
        </DivForm>
        <DivForm>
          <h8> Clique no botão abaixo para criar uma categoria</h8>
          <br />
          <Button
            backgroundColor={"#8ECAE6"}
            color={"#000000"}
            borderRadius={0}
            onClick={openModal}
          >
            Criar Categoria
          </Button>
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
          <input
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
          <input
            type="file"
            name="url"
            style={{ marginTop: "3%", marginBottom: "5%" }}
            onChange={(v) => setImagemCategoria(v.target.files[0])}
          ></input>
          <br></br>
          <br></br>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button
              onClick={criaCategoria}
              style={{
                backgroundColor: "rgba(142, 202, 230, 0.5)",
                border: "none",
                borderRadius: "20px",
                padding: "2%",
              }}
            >
              Criar
            </button>
            <br></br>
            <button
              onClick={closeModal}
              style={{
                backgroundColor: "rgba(229, 116, 116, 0.5)",
                border: "none",
                borderRadius: "20px",
                padding: "2%",
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default FormDigitarPalavraVideoLibras;
