import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import HeaderOne from "../header/index.js";
import { DivInputForm, Title, DivSelect, DivInput, Divs } from "./styles.js";
import ButtonJS from "../components/Button/index.js";
import InputJS from "../components/Input/index.js"
import { Redirect } from "react-router-dom";
function FormAlternativaLacuna() {
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
    if (categoriaQuestao === undefined || alternativaCerta === undefined || alternativaErrada1 === undefined || alternativaErrada2 === undefined || alternativaErrada3 === undefined || alternativaErrada4 === undefined) {
      alert("Dados incompletos");
      console.log(categoriaQuestao, alternativaCerta)
    } else {
      axios
        .post("http://localhost:3001/questaoFraseCorreta", {
          token,
          categoria: categoriaQuestao,
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

    }
  };
  const [categorias, setCategorias] = useState([]);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [nomeCategoria, setNomeCategoria] = useState();
  const [imagemCategoria, setImagemCategoria] = useState();
  const [alternativaCerta, setAlternativaCerta] = useState();
  const [alternativaErrada1, setAlternativaErrada1] = useState();
  const [alternativaErrada2, setAlternativaErrada2] = useState();
  const [alternativaErrada3, setAlternativaErrada3] = useState();
  const [alternativaErrada4, setAlternativaErrada4] = useState();
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

    };
    try{
      getLogin();
    } catch(error){
      setIsLoggedIn('notLoggedIn');
    }
  }, []);
  if (isLoggedIn === 'loggedIn') {
    header = <HeaderOne logged={true}></HeaderOne>
  } else {
    header = <HeaderOne logged={false}></HeaderOne>
  }
  if (isLoggedIn === 'loggedIn'  || isLoggedIn === undefined) {

    return (
      <>
        <HeaderOne logged={true}></HeaderOne>
        <Title fontSize={2.5} color={"#000000"}>
          Marcar Lacuna com Alternativa
        </Title>
        <Title fontSize={1} color={"#7A7A7A"}>
          Modelo em que se marca uma alternativa para preencher frase
        </Title>
        <br />
        <Divs>
          <DivInput>
            <p>Categoria(s):</p>
            <DivSelect>
              {categorias.map((categoria) => {
                return (
                  <div>
                    <input
                      class="categoria"
                      key={categoria.nome}
                      value={categoria.id}
                      type="checkbox"
                    />
                    <label for="categoria">{categoria.nome}</label>
                  </div>
                );
              })}
            </DivSelect>
            <ButtonJS
              onClick={openModal}
              padding={"2%"}
              width={"30vw"}
              backgroundColor={"#8ECAE6"}
              color={"#000000"}
              borderRadius={"5px"}
              name={"Criar Categoria"}
            />
          </DivInput>
          <DivInputForm>
            <div>
              <label for="correct">Frase Correta</label>
              <InputJS
                id="inputfrase"
                type="text"
                name="correct"
                color={"rgba(144, 230, 142, 0.5)"}
                onChange={(v) => setAlternativaCerta(v.target.value)}
                value={alternativaCerta}
              />
            </div>
            <div>
              <label for="wrong1">Frase Errada</label>
              <InputJS
                id="inputfrase"
                type="text"
                name="wrong1"
                color={"rgba(252, 65, 65, 0.5)"}
                onChange={(v) => setAlternativaErrada1(v.target.value)}
                value={alternativaErrada1}
              />
            </div>
            <div>
              <label for="wrong2">Frase Errada</label>
              <InputJS
                id="inputfrase"
                type="text"
                name="wrong2"
                color={"rgba(252, 65, 65, 0.5)"}
                onChange={(v) => setAlternativaErrada2(v.target.value)}
                value={alternativaErrada2}
              />
            </div>
            <div>
              <label for="wrong3">Frase Errada</label>
              <InputJS
                id="inputfrase"
                type="text"
                name="wrong3"
                color={"rgba(252, 65, 65, 0.5)"}
                onChange={(v) => setAlternativaErrada3(v.target.value)}
                value={alternativaErrada3}
              />
            </div>
            <div>
              <label for="wrong4">Frase Errada</label>
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
              padding={"3%"}
              width={"30vw"}
              backgroundColor={"#219EBC"}
              color={"#FFFF"}
              borderRadius={"5px"}
              name={"Criar Quest??o"}
            />
          </DivInputForm>
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
    return (<div>{header}<Redirect to="/login" />
  </div>)
  }
}
export default FormAlternativaLacuna;
