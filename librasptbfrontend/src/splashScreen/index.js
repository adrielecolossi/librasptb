import React, {useState, useEffect} from "react";
import HeaderOne from "../header/index.js";
import { Banner, BannerCards, Title } from "./styles";
import Card from "../components/Card";
import axios from "axios";
function SplashScreen() {
  const cardsContent = [
    {
      image: "https://drive.google.com/uc?id=1--GhiQKm9xojTvq2yPNwPBFQVLm5b8D6",
      title: "Associar colunas",
      subtitle: "Modelo em que se associa duas respostas de colunas",
      link: "./FormAssociarColunas",
    },
    {
      image: "https://drive.google.com/uc?id=1hw9NhdbmhwB0jcaegsAXYkGYcHnnKUoe",
      title: "Ordenar frase",
      subtitle: "Modelo em que se ordena palavras de uma frase",
      link: "./FormOrdenarFrase",
    },
    {
      image: "https://drive.google.com/uc?id=1RhfgdrfXiRkPFZP7tpgTUHxuaXVcsDL8",
      title: "Digitar palavra (imagem/vídeo)",
      subtitle: "Modelo em que se digita o que aparece na imagem/vídeo",
      link: "./FormDigitarPalavra",
    },
    {
      image: "https://drive.google.com/uc?id=1otAFn5cnK3ZZ49nmqway2TdqEmt8KlKt",
      title: "Digitar lacuna",
      subtitle: "Modelo em que se digita uma palavra para preencher uma frase",
      link: "./FormDigitarLacuna",
    },
    {
      image: "https://drive.google.com/uc?id=169RNcKlK-Cbba4sb99Z1LgBL1atLjjd6",
      title: "Marcar Lacuna",
      subtitle: "Modelo em que se marca uma alternativa para preencher frase",
      link: "./FormMarcarLacuna",
    },
    {
      image: "https://drive.google.com/uc?id=1tJQZFJGFNuwccRpWoSNKtx1SomeLCgRw",
      title: "Marcar palavra (imagem/vídeo)",
      subtitle: "Modelo em que se marca uma alternativa para palavra da imagem/vídeo",
      link: "./FormAlternativaCorreta",
    },
    {
      image: "https://drive.google.com/uc?id=1DrU1sE3HiSclK8mQl9jyWj1dvoKQJxKb",
      title: "Alternativa correta (frase)",
      subtitle:
        "Modelo em que se marca uma alternativa correta de qual é a frase",
      link: "./FormAlternativaFraseCorreta",
    },
  ];
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
  return (
    <>
      {header}
      <Banner>
        <Title>
          <h1>Crie questões para o aplicativo LIBRAS-PTB!</h1>
          <h2>Basta fazer login para começar a desenvolver!</h2>
        </Title>
        <img src="https://drive.google.com/uc?id=1JJYSNQ5xjSx8QYRRDDd7OtoiN1W7_9yS" />
      </Banner>
      <BannerCards>
        {cardsContent.map((cardsContent) => {
          return (
            <Card
              image={cardsContent.image}
              title={cardsContent.title}
              subtitle={cardsContent.subtitle}
              link={cardsContent.link}
            />
          );
        })}
      </BannerCards>
    </>
  );
}

export default SplashScreen;
