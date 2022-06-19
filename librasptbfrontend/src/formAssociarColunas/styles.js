import styled from "styled-components";

export const InputForm = styled.div`
  padding: 2px;
  input {
    background-color: rgba(142, 202, 230, 0.5);
    border: none;
    padding: 10px;
    width: 50%;
  }
  p {
    margin: auto;
  }
  input:hover {
    cursor: pointer;
  }
  input select {
    border: none;
    cursor: pointer;
    background-color: rgb(142, 202, 230);
    color: black;
  }
  hr {
    -webkit-transform: rotate(180deg);
    width: 10%;
    height: 2%;
    color: black;
    align-self: center;
  }
  display: flex;
  justify-content: center;
  width: 40%;
  margin-top: 2%;
  @media only screen and (min-width: 300px) and (max-device-width: 600px) {
    width: 70%;
  }
  @media only screen and (min-width: 600px) and (max-device-width: 900px) {
    width: 50%;
  }
`;

export const DivSelect = styled.div`
  select {
    padding: 10px;
    font-size: 0.8em;
    width: 30%;
  }
  select:hover {
    cursor: pointer;
  }
  button {
    border: none;
    font-size: 0.8em;
    padding: 12px;
    width: 40%;
    background-color: rgba(142, 202, 230, 1);
  }
  button:hover {
    cursor: pointer;
    background-color: rgb(123, 178, 204);
  }
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2%;

  @media only screen and (min-width: 300px) and (max-device-width: 600px) {
    width: 70%;
  }
  @media only screen and (min-width: 600px) and (max-device-width: 900px) {
    width: 50%;
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => `${props.fontSize}em`};
  color: ${(props) => props.color};
  font-weight: 400;

  margin-top: 1%;
  margin-left: 3%;
`;

export const SendButton = styled.button`
  padding: 15px;
  width: 15%;
  color: white;
  background-color: rgba(33, 158, 188, 1);
  font-weight: bold;
  font-size: 1em;
  border-radius: 5px;
  border: none;
  margin-top: 2%;
  margin-bottom: 2%;
  @media only screen and (min-width: 300px) and (max-device-width: 500px) {
    width: 30%;
    margin-top: 4%;
  }
`;

export const DivInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
