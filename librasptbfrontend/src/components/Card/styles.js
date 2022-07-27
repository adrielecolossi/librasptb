import styled from "styled-components";
export const Div = styled.div`
  width: 45%;
  a {
    text-decoration: none;
  }
  @media only screen and (min-width: 300px) and (max-device-width: 900px) {
    width: 100%;
  }
`;
export const DivCard = styled.div`
  color: black;
  display: flex;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  width: 100%;
  margin-bottom: 2%;
  img {
    width: 40%;
    border-radius: 20px 0px 0px 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    align-items: flex-start;
  }
  &:hover {
    background-color: #f7f7f7;
    opacity: 0.8;
    cursor: pointer;
  }
  h3,
  h6 {
    padding: 5px 5px 5px 5px;
    margin: 0px;
    font-weight: 400;
  }
  @media only screen and (max-device-width: 1500px) {
    div {
      font-size: 1.2em;
    }
  }
  @media only screen and (min-width: 900px) and (max-device-width: 1000px) {
    div {
      font-size: 0.8em;
    }
    img {
      width: 30%;
      height: 100%;
    }
  }
  @media only screen and (min-width: 800px) and (max-device-width: 900px) {
    width: 60%;
    margin: auto;
    margin-top: 5%;
    div {
      font-size: 1em;
    }
    img {
      width: 50%;
      height: 100%;
    }
  }
  @media only screen and (min-width: 715px) and (max-device-width: 800px) {
    width: 60%;
    margin: auto;
    margin-top: 5%;
    div {
      font-size: 0.9em;
    }
    img {
      width: 50%;
      height: 100%;
    }
  }
  @media only screen and (min-width: 520px) and (max-device-width: 715px) {
    width: 70%;
    margin: auto;
    margin-top: 5%;
    div {
      font-size: 0.8em;
    }
    img {
      width: 50%;
      height: 100%;
    }
  }
  @media only screen and (min-width: 450px) and (max-device-width: 519px) {
    width: 100%;
    margin: auto;
    margin-top: 2%;
    div {
      font-size: 0.8em;
    }
  }
  @media only screen and (min-width: 350px) and (max-device-width: 450px) {
    width: 90%;
    margin: auto;
    margin-top: 5%;
    div {
      font-size: 0.7em;
    }
    img {
      width: 40%;
      height: 100%;
    }
  }
  @media only screen and (max-device-width: 350px) {
    margin: auto;
    margin-top: 5%;
    div {
      font-size: 0.6em;
    }
    img {
      width: 50%;
      height: 100%;
    }
  }
`;