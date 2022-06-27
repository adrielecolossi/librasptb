import React from "react";
import HeaderOne from "../header/index.js";
import { useState, useEffect } from "react";
import axios, { post } from "axios";
import { InputForm, DivInputForm, Title, DivSelect} from "./styles.js";
import ButtonJS from "../components/Button/index.js";
import InputJS from "../components/Input/index.js";
import Modal from "react-modal";


function FormAssociarColunas() {
  const [imagem1, setImagem1] = useState();
  const [imagem2, setImagem2] = useState();
  const [imagem3, setImagem3] = useState();
  const [imagem4, setImagem4] = useState();
  const [imagem5, setImagem5] = useState();
  const [alternativa1, setAlternativa1] = useState();
  const [alternativa2, setAlternativa2] = useState();
  const [alternativa3, setAlternativa3] = useState();
  const [alternativa4, setAlternativa4] = useState();
  const [alternativa5, setAlternativa5] = useState();
  const [nomeCategoria, setNomeCategoria] = useState();
  const [imagemCategoria, setImagemCategoria] = useState();
  const [categoriaQuestao, setCategoriaQuestao] = useState(1);

  const [modalIsOpen, setIsOpen] = React.useState(false);
 
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
          alert('Categoria criada com sucesso');
        })
        .catch((error) => {
          alert(error);
        });
      setIsOpen(false);
    }
  };
  const criaQuestao = async (e) => {
    e.preventDefault();
    if (categoriaQuestao === undefined || imagem1 === undefined || imagem2 === undefined || imagem3 === undefined || imagem4 === undefined || imagem5 === undefined || alternativa1=== undefined  || alternativa2=== undefined || alternativa3=== undefined || alternativa4=== undefined || alternativa5=== undefined) {
     console.log(imagem1);
      alert('Dados incompletos')
    } else {
  

      const fd1 = new FormData();
      fd1.append("file", imagem1);
      const response1 = await axios.post("http://localhost:3001/imagem", fd1);
      const midia1 = "https://drive.google.com/uc?id=" + response1.data;
      const fd2 = new FormData();
      
      fd2.append("file", imagem2);
      const response2 = await axios.post("http://localhost:3001/imagem", fd2);
      const midia2 = "https://drive.google.com/uc?id=" + response2.data;

      const fd3 = new FormData();
      fd3.append("file", imagem3);
      const response3 = await axios.post("http://localhost:3001/imagem", fd3);
      const midia3 = "https://drive.google.com/uc?id=" + response3.data;
 
      const fd4 = new FormData();
      fd4.append("file", imagem4);
      const response4 = await axios.post("http://localhost:3001/imagem", fd4);
      const midia4 = "https://drive.google.com/uc?id=" + response4.data;

      const fd5 = new FormData();
      fd5.append("file", imagem5);
      const response5 = await axios.post("http://localhost:3001/imagem", fd5);
      const midia5 = "https://drive.google.com/uc?id=" + response5.data;

      const token = localStorage.getItem("tokenLibrasPTB");
      axios
        .post("http://localhost:3001/questaoAssociarColunas", {
          token,
          categoria: categoriaQuestao,
          opcao1: midia1,
          opcao2: alternativa1,
          opcao3: midia2,
          opcao4: alternativa2,
          opcao5: midia3,
          opcao6: alternativa3,
          opcao7: midia4,
          opcao8: alternativa4,
          opcao9: midia5,
          opcao10: alternativa5,
    })
        .then((response) => {
          alert('Questao criada com sucesso');
        })
        .catch((error) => {
          alert(error);
        });
      }
 
  };
  const [categorias, setCategorias] = useState([]);


  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    const getCategorias = async () => {
      const categoriasDoBanco = await axios.get(
        "http://localhost:3001/categoria"
      );
      setCategorias(categoriasDoBanco.data);
    };
    getCategorias();
  }, []);
  
  const [isLoggedIn, setIsLoggedIn]= useState()
  useEffect(() => {
    
    let token = localStorage.getItem('tokenLibrasPTB');
    const getLogin = async () => {
      const response = await axios.get(
        "http://localhost:3001/login", { params: { token } }
      );
      setIsLoggedIn(response.data.msg);
    
    };
    getLogin();
  }, []);
  let header;
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
      <ButtonJS
            onClick={openModal}
            backgroundColor={"#8ECAE6"}
            color={"#000000"}
            borderRadius={0}
            name={"Criar Categoria"}
          />
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
        </DivSelect>

        <InputForm>
          <p> Imagens </p>
          <p> Palavras </p>
        </InputForm>
        <InputForm>
          <InputJS type="file" name="url" onChange={(v) => setImagem1(v.target.files[0])}></InputJS>
          <hr></hr>
          <InputJS type="text" value={alternativa1}  name="alternativa1"  onChange={(v) => setAlternativa1(v.target.value)}></InputJS>
        </InputForm>
        <InputForm>
          <InputJS type="file" onChange={(v) => setImagem2(v.target.files[0])}></InputJS>
          <hr></hr>
          <InputJS type="text" value={alternativa2} name="alternativa2" onChange={(v) => setAlternativa2(v.target.value)}></InputJS>
        </InputForm>
        <InputForm>
          <InputJS type="file" onChange={(v) => setImagem3(v.target.files[0])}></InputJS>
          <hr></hr>
          <InputJS type="text" value={alternativa3} name="alternativa3" onChange={(v) => setAlternativa3(v.target.value)}></InputJS>
        </InputForm>
        <InputForm>
          <InputJS type="file" onChange={(v) => setImagem4(v.target.files[0])}></InputJS>
          <hr></hr>
          <InputJS type="text" value={alternativa4} name="alternativa4" onChange={(v) => setAlternativa4(v.target.value)}></InputJS>
        </InputForm>
        <InputForm>
          <InputJS type="file"  onChange={(v) => setImagem5(v.target.files[0])}></InputJS>
          <hr></hr>
          <InputJS type="text" value={alternativa5} name="alternativa5" onChange={(v) => setAlternativa5(v.target.value)}></InputJS>
        </InputForm>

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
  );}else{
    return(<div>{header}<p>Faça login primeiro</p></div>)
  }
}
export default FormAssociarColunas;
