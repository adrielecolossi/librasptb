import React from "react";
import HeaderOne from "../header/index.js";
import { DivInputForm, Title, DivSelect} from "./styles.js";
import ButtonJS from "../components/Input/Button/index.js";
import InputJS from "../components/Input/index.js";
import { useState, useEffect } from "react";
import axios, { post } from "axios";
function FormAlternativaVideo() {
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
    if (categoriaQuestao === undefined || palavraQuestao === undefined || imagemQuestao === undefined) {
      alert('Dados incompletos')
    } else {
      const fd = new FormData();
      fd.append("file", imagemQuestao);
      const response = await axios.post("http://localhost:3001/imagem", fd);
      const midia = "https://drive.google.com/uc?id=" + response.data;
      axios
        .post("http://localhost:3001/questaoDigitarMidia", {
          token,
          resposta: palavraQuestao,
          midia,
          categoria: categoriaQuestao

          /*

          CREATE TABLE marcar(
       questao INTEGER NOT NULL,
      opcao1 varchar(70), --é a opção correta
      opcao2 varchar(70),
      opcao3 varchar(70),
      opcao4 varchar(70),
      opcao5 varchar(70),
      FOREIGN KEY (questao) REFERENCES questao(id)
);*/
        })
        .then((response) => {
          alert(response.data.msg);
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
  const [imagemQuestao, setImagemQuestao] = useState();
  const [palavraQuestao, setPalavraQuestao] = useState();
  const [categoriaQuestao, setCategoriaQuestao] = useState(1);
  const [showModal, setShowModal] = useState(false);

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
      {header}
      <Title fontSize={2.5} color={"#000000"}>
        Marcar alternativa da palavra do vídeo
      </Title>
      <Title fontSize={1} color={"#7A7A7A"}>
        Modelo em que se marca uma alternativa para palavra do vídeo
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
            onClick={criaCategoria}
            backgroundColor={"#8ECAE6"}
            color={"#000000"}
            borderRadius={0}
            name={"Criar Categoria"}
          />
        </DivSelect>
      </DivInputForm>
      <DivInputForm>
        <div>
          <label for="frase">Vídeo</label>
          <InputJS name="frase" type="file" color={"#8ECAE6"}></InputJS>
        </div>
        <br />
        <div>
          <label for="correct">Alternativa Correta</label>
          <InputJS
            name="correct"
            type="text"
            color={"rgba(144, 230, 142, 0.5)"}
          ></InputJS>
        </div>
        <br />
        <div>
          <label for="wrong1">Alternativa Errada</label>
          <InputJS
            name="wrong1"
            type="text"
            color={"rgba(252, 65, 65, 0.5)"}
          ></InputJS>
        </div>
        <br />
        <div>
          <label for="wrong2">Alternativa Errada</label>
          <InputJS
            name="wrong2"
            type="text"
            color={"rgba(252, 65, 65, 0.5)"}
          ></InputJS>
        </div>
        <br />
        <div>
          <label for="wrong3">Alternativa Errada</label>
          <InputJS
            name="wrong3"
            type="text"
            color={"rgba(252, 65, 65, 0.5)"}
          ></InputJS>
        </div>
        <br />
        <div>
          <label for="wrong4">Alternativa Errada</label>
          <InputJS
            name="wrong4"
            type="text"
            color={"rgba(252, 65, 65, 0.5)"}
          ></InputJS>
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
  );}else{
    return(<div>{header}<p>Faça login primeiro</p></div>)
  }
}
export default FormAlternativaVideo;
