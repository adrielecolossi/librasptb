import React, { useState, useEffect } from "react";
import { Title, DivInput, DivSelect, Div, Divs, } from "./styles";
import HeaderOne from "../header/index.js";
import axios from "axios";
import Modal from "react-modal";
import ButtonJS from "../components/Button/index.js"
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
  let token = localStorage.getItem('tokenLibrasPTB');
  const criaQuestao = async (e) => {
    e.preventDefault();
    if (categoriaQuestao === undefined || fraseQuestao === undefined) {
      alert("Dados incompletos");
      console.log(categoriaQuestao, fraseQuestao)
    } else {
      axios
        .post("http://localhost:3001/questaoOrdenarFrase", {
          token,
          resposta: fraseQuestao,
          categoria: categoriaQuestao
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
  const [categoriaQuestao, setCategoriaQuestao] = useState(1);

  useEffect(() => {
    const getCategorias = async () => {
      const categoriasDoBanco = await axios.get(
        "http://localhost:3001/categoria"
      );
      setCategorias(categoriasDoBanco.data);
    };
    getCategorias();
  }, []);
  let header;
  const [isLoggedIn, setIsLoggedIn] = useState()
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

  if (isLoggedIn == 'loggedIn') {

    return (
      <>
        {header}
        <Title fontSize={2.5} color={"#000000"}>
          Ordenar frase
        </Title>
        <Title fontSize={1} color={"#7A7A7A"}>
          Modelo em que se ordena palavras de uma frase
        </Title>
        <br />
        <Divs>
          <form enctype="multipart/form-data" method="POST">
            <DivInput>
              <p>Categoria(s):</p>
              <DivSelect>
                {categorias.map((categoria) => {
                  return (
                    <div>
                      <input class="categoria" key={categoria.nome} value={categoria.id} type='checkbox' />
                      <label for="categoria">{categoria.nome}</label>
                    </div>
                  );
                })}
              </DivSelect>
            </DivInput>
            <br />
            <Div>
              <label for="inputfrase">Frase </label>
              <InputJS
                id="inputfrase"
                type="text"
                name="fraseQuestao"
                color="rgba(142, 202, 230, 0.5)"
                onChange={(v) => setFraseQuestao(v.target.value)}
                value={fraseQuestao}
              />
            </Div>
            <ButtonJS
              onClick={criaQuestao}
              padding={"2%"}
              width={"30vw"}
              backgroundColor={"#219EBC"}
              color={"#FFFF"}
              borderRadius={"5px"}
              name={"Criar Questão"}
            />
            <br />
          </form>
          <div id="categoria-div">
            <p> Clique no botão abaixo para criar uma categoria</p>
            <ButtonJS
              onClick={openModal}
              padding={"3%"}
              width={"30vw"}
              backgroundColor={"#8ECAE6"}
              color={"#000000"}
              borderRadius={"5px"}
              name={"Criar Categoria"}
            />
          </div>
        </Divs>
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
              color={"#EDEDEDED"}
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
                padding={"2%"}
                width={"25vw"}
                backgroundColor={"rgba(142, 202, 230, 0.5)"}
                borderRadius={"10px"}
                name={"Criar"}
              />
              <ButtonJS
                onClick={closeModal}
                padding={"2%"}
                width={"25vw"}
                backgroundColor={"rgba(229, 116, 116, 0.5)"}
                borderRadius={"10px"}
                name={"Cancelar"}
              />
            </div>
          </form>
        </Modal>
      </>
    );
  } else {
    return (<div>{header}<p>Faça login primeiro!</p></div>)
  }
}

export default FormOrdenarFrase;
