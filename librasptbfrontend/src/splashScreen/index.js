import React from "react";
import HeaderOne from "../header/index.js";
import { Banner, BannerCards, Title } from "./styles";
import Card from "../components/Card";


function SplashScreen() {
  const cardsContent = [
    {
      image: "https://drive.google.com/uc?id=1--GhiQKm9xojTvq2yPNwPBFQVLm5b8D6",
      title: "Associar colunas",
      subtitle: "Modelo em que se associa duas respostas de colunas",
      link: "./FormAssociarColunas",
    },
    {
      image: "https://drive.google.com/uc?id=10QjU09MDS0wRM0v9yoC76TzrLBlROiA8",
      title: "Digitar palavra do vídeo em libras ",
      subtitle: "Modelo em que se digita palavra do vídeo em libras",
      link: "./FormDigitarPalavraVideoLibras",
    },
    {
      image: "https://drive.google.com/uc?id=1hw9NhdbmhwB0jcaegsAXYkGYcHnnKUoe",
      title: "Ordenar palavras de uma frase",
      subtitle: "Modelo em que se ordena palavras de uma frase",
      link: "./FormOrdenarPalavraFrase",
    },
    {
      image: "https://drive.google.com/uc?id=1t2Z9ZDvr_3QkrmdNE2E6kScG1SWuvB6u",
      title: "Digitar palavra da imagem",
      subtitle: "Modelo em que se digita o que aparece na imagem",
      link: "./FormDigitarPalavraImagem",
    },
    {
      image: "https://drive.google.com/uc?id=1oGJlVFyVLaaPDsyHFvzEqWxiDNwpowp5",
      title: "Digitar palavra do vídeo",
      subtitle: "Modelo em que se digita o que aparece no vídeo",
      link: "./FormDigitarPalavraVideo",
    },
    {
      image: "https://drive.google.com/uc?id=1Mm4--uaVqlMYaUmRZ6Yxi3ZK074m_iW4",
      title: "Preencher lacuna da frase digitando",
      subtitle: "Modelo em que se digita uma palavra para preencher uma frase",
      link: "./FormLacunaFraseDigitando",
    },
    {
      image: "https://drive.google.com/uc?id=169RNcKlK-Cbba4sb99Z1LgBL1atLjjd6",
      title: "Preencher lacuna da frase com alternativa",
      subtitle: "Modelo em que se marca uma alternativa para preencher frase",
      link: "./FormLacunaFraseAlternativa",
    },
    {
      image: "https://drive.google.com/uc?id=1tJQZFJGFNuwccRpWoSNKtx1SomeLCgRw",
      title: "Marcar alternativa da palavra do vídeo",
      subtitle: "Modelo em que se marca uma alternativa para palavra do vídeo",
      link: "./FormAlternativaVideo",
    },
    {
      image: "https://drive.google.com/uc?id=154KuBWvxTf_cz8A4UacwJNzgoc0MIOTK",
      title: "Marcar alternativa da imagem",
      subtitle: "Modelo em que se marca o que uma imagem está apresentando",
      link: "./FormAlternativaImagem",
    },
    {
      image: "https://drive.google.com/uc?id=1DrU1sE3HiSclK8mQl9jyWj1dvoKQJxKb",
      title: "Marcar alternativa da frase correta",
      subtitle:
        "Modelo em que se marca uma alternativa correta de qual é a frase",
      link: "./FormAlternativaFraseCorreta",
    },
  ];

  return (
    <>
      <HeaderOne logged={false}></HeaderOne>
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
