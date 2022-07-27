import React, { useState, useEffect } from "react";
import { Title, DivInput, DivSelect, Div, Divs, } from "./styles";
import HeaderOne from "../header/index.js";
import axios from "axios";
import Modal from "react-modal";
import ButtonJS from "../components/Button/index.js"
import InputJS from "../components/Input/index.js"
import ThreeDotsWave from "../components/ThreeDotsWave/index.js";
import { Redirect } from "react-router-dom";

function FormOrdenarFrase() {
  const [categoriasQuestao, setCategoriasQuestao] = useState([]);
  const criaCategoria = async (e) => {
    e.preventDefault();
    if (nomeCategoria === undefined || imagemCategoria === undefined) {
      alert("Dados incompletos");
    } else {
      e.preventDefault();
      setLoadingCriarCategoria(true)
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
          alert('Categoria criada com sucesso');
          setLoadingCriarCategoria(false);
        })
        .catch((error) => {
          alert(error);
          setLoadingCriarCategoria(false)
        });

      setIsOpen(false);
    }
  };

  let token = localStorage.getItem('tokenLibrasPTB');
  const criaQuestao = async (e) => {
    let haCategoria= false;
    for(let i=0; i<categorias.length; i++){

      if (document.getElementsByClassName('categoria')[i].checked) {
haCategoria=true;
  }
}

    e.preventDefault();
    if (categoriasQuestao === undefined || haCategoria==false || fraseQuestao === undefined) {
      alert("Dados incompletos");

      console.log(categoriaQuestao, fraseQuestao)
    } else {

      setLoading(true)
      setCategoriasQuestao([])
      for (let i = 0; i < categorias.length; i++) {
        if (document.getElementsByClassName('categoria')[i].checked) {
          setCategoriasQuestao(categoriasQuestao => [...categoriasQuestao, document.getElementsByClassName('categoria')[i].value])
        }
      }
    }
  };
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    console.log(categoriasQuestao)
    if(categoriasQuestao!==[] && categoriasQuestao!==undefined && categoriasQuestao.length!==0){
    const criaQuestaoNoBanco = async (e) => {
      axios
      .post("http://localhost:3001/questaoOrdenarFrase", {
        token,
        resposta: fraseQuestao,
        categoria: categoriasQuestao
      })
      .then((response) => {
        setLoading(false);
        alert('Questao criada com sucesso');
      })
      .catch((error) => {
        alert(error);
      });
   
          }
          criaQuestaoNoBanco()
        }
        }, [categoriasQuestao])
  const [categorias, setCategorias] = useState([]);
  const [nomeCategoria, setNomeCategoria] = useState();
  const [imagemCategoria, setImagemCategoria] = useState();
  const [fraseQuestao, setFraseQuestao] = useState();
  const [categoriaQuestao, setCategoriaQuestao] = useState(1);
  const [loading, setLoading] = useState(false)
  const [loadingCriarCategoria, setLoadingCriarCategoria] = useState(false)
  useEffect(() => {
    const getCategorias = async () => {
      const categoriasDoBanco = await axios.get(
        "http://localhost:3001/categoria"
      );
      setCategorias(categoriasDoBanco.data);
    };
    getCategorias();
  }, []);
  let header = <HeaderOne logged={true}></HeaderOne>
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
    try{
      getLogin();
    } catch(error){
      setIsLoggedIn('notLoggedIn');
    }
  }, []);
  let buttonContent;
  if (loading === false) {
    buttonContent = <ButtonJS
      onClick={criaQuestao}
      padding={"3%"}
      width={"30vw"}
      backgroundColor={"#219EBC"}
      color={"#FFFF"}
      borderRadius={"5px"}
      name={"Criar Questão"}
    />
  } else {
    buttonContent = <ThreeDotsWave style={{alignSelf: 'center'}}/>
  }

  let buttonCategoriesContent;
  if (loadingCriarCategoria === false) {
    buttonCategoriesContent = <ButtonJS
      onClick={criaCategoria}
      padding={"2%"}
      width={"25vw"}
      backgroundColor={"rgba(142, 202, 230, 0.5)"}
      borderRadius={"10px"}
      name={"Criar"}
    />
  } else {
    buttonCategoriesContent = <div style={{ display: 'flex', justifyContent: 'center' }}><ThreeDotsWave /></div>
  }

  if (isLoggedIn === 'loggedIn'  || isLoggedIn === undefined) {
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
          {buttonContent}
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
            {buttonCategoriesContent}
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
    return (<div>{header}<Redirect to="/login" />
    </div>)
  }
}

export default FormOrdenarFrase;
