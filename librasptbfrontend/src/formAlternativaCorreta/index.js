import React from "react";
import HeaderOne from "../header/index.js";
import { DivInputForm, Title, DivSelect, DivInput } from "./styles.js";
import ButtonJS from "../components/Button/index.js";
import InputJS from "../components/Input/index.js";
import { useState, useEffect } from "react";
import axios, { post } from "axios";
import Modal from "react-modal";

function FormAlternativaVideo() {
  const [categoriasQuestao, setCategoriasQuestao] = useState([]);
  let token = localStorage.getItem('tokenLibrasPTB');
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
          setIsOpen(false);
        })
        .catch((error) => {
          alert(error);
          setIsOpen(false);
        });

    }
  };
  const criaQuestao = async (e) => {
    e.preventDefault();
    if (categoriasQuestao === [] || imagemQuestao == undefined || alternativaCerta === undefined || alternativaErrada1 === undefined || alternativaErrada2 === undefined || alternativaErrada3 === undefined || alternativaErrada4 === undefined) {
      alert('Dados incompletos')
    } else 
    
    {
      setCategoriasQuestao([])
      for(let i = 0; i < categorias.length;i++ ){
        if (document.getElementsByClassName('categoria')[i].checked){
          setCategoriasQuestao(categoriasQuestao => [...categoriasQuestao, document.getElementsByClassName('categoria')[i].value])
        }    
      }
    }
  }

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
  const [imagemQuestao, setImagemQuestao] = useState();
  const [alternativaCerta, setAlternativaCerta] = useState();
  const [alternativaErrada1, setAlternativaErrada1] = useState();
  const [alternativaErrada2, setAlternativaErrada2] = useState();
  const [alternativaErrada3, setAlternativaErrada3] = useState();
  const [alternativaErrada4, setAlternativaErrada4] = useState();
 
useEffect(()=>{
console.log(categoriasQuestao)
if(categoriasQuestao!==[]){

  const criaQuestaoNoBanco = async (e) => {
    const fd = new FormData();
    fd.append("file", imagemQuestao);
    const response = await axios.post("http://localhost:3001/imagem", fd);
    const midia = "https://drive.google.com/uc?id=" + response.data;
    axios
      .post("http://localhost:3001/questaoMarcarMidia", {
        token,
        midia,
        categoria: categoriasQuestao,
        alternativaCerta,
        alternativaErrada1,
        alternativaErrada2,
        alternativaErrada3,
        alternativaErrada4
      })
      .then((response) => {
        alert(response.data.msg);
      })
      .catch((error) => {
        alert(error);
      });
  };
  criaQuestaoNoBanco()
}

}, [categoriasQuestao])

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

  if (isLoggedIn === 'loggedIn') {
    return (
      <>
        {header}
        <Title fontSize={2.5} color={"#000000"}>
          Marcar alternativa da palavra do vídeo
        </Title>
        <Title fontSize={1} color={"#7A7A7A"}>
          Modelo em que se marca uma alternativa para palavra do vídeo
        </Title>
        
        <DivInput>
          <label for="categoria">Categoria(s):</label>
          <DivSelect>
            {categorias.map((categoria) => {
              return (
                <div>
                  <input class="categoria" key={categoria.nome} value={categoria.id} type='checkbox' />
                  <p>{categoria.nome}</p>
                </div>
              );
            })}
          </DivSelect>
        </DivInput>
        <div style={{ display: "flex", margin: "2%", justifyContent: "center" }}>
          <ButtonJS
            onClick={openModal}
            backgroundColor={"#8ECAE6"}
            color={"#000000"}
            borderRadius={0}
            name={"Criar Categoria"}
          />
        
        </div>
        <DivInputForm>
          <div>
            <label for="frase">Vídeo</label>
            <InputJS name="frase" type="file" color={"#8ECAE6"} onChange={(v) => setImagemQuestao(v.target.files[0])}></InputJS>
          </div>

          <br />
          <div>
            <label for="correct">Alternativa Correta</label>
            <InputJS
              id="inputfrase"
              type="text"
              name="correct"
              color={"rgba(144, 230, 142, 0.5)"}
              onChange={(v) => setAlternativaCerta(v.target.value)}
              value={alternativaCerta}
            />
          </div>
          <br />
          <div>
            <label for="wrong1">Alternativa Errada</label>
            <InputJS
              id="inputfrase"
              type="text"
              name="wrong1"
              color={"rgba(252, 65, 65, 0.5)"}
              onChange={(v) => setAlternativaErrada1(v.target.value)}
              value={alternativaErrada1}
            />
          </div>
          <br />
          <div>
            <label for="wrong2">Alternativa Errada</label>
            <InputJS
              id="inputfrase"
              type="text"
              name="wrong2"
              color={"rgba(252, 65, 65, 0.5)"}
              onChange={(v) => setAlternativaErrada2(v.target.value)}
              value={alternativaErrada2}
            />
          </div>
          <br />
          <div>
            <label for="wrong3">Alternativa Errada</label>
            <InputJS
              id="inputfrase"
              type="text"
              name="wrong3"
              color={"rgba(252, 65, 65, 0.5)"}
              onChange={(v) => setAlternativaErrada3(v.target.value)}
              value={alternativaErrada3}
            />
          </div>
          <br />
          <div>
            <label for="wrong4">Alternativa Errada</label>
            <InputJS
              id="inputfrase"
              type="text"
              name="wrong4"
              color={"rgba(252, 65, 65, 0.5)"}
              onChange={(v) => setAlternativaErrada4(v.target.value)}
              value={alternativaErrada4}
            />
          </div>
          <br />
          <ButtonJS
            onClick={criaQuestao}
            backgroundColor={"#219EBC"}
            color={"#FFFF"}
            borderRadius={0}
            name={"Criar Questão"}
          />
        </DivInputForm>
        
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
  } else {
    return (<div>{header}<p>Faça login primeiro</p></div>)
  }
}
export default FormAlternativaVideo;
