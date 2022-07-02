import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => `${props.fontSize}em`};
  color: ${(props) => props.color};
  font-weight: 400;

  margin-top: 1%;
  margin-left: 3%;
`;

export const DivInput = styled.div`
  width: 40%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color:  rgba(142,202,230,0.2);
   @media only screen and (min-width: 300px) and (max-device-width: 800px) {
      width: 65%;
      margin-bottom: 2%;
   }
`;


export const Divs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const DivInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:  rgba(142,202,230,0.2);
  padding: 2%;
`;

export const DivSelect = styled.div`
  flex-wrap: wrap;
  width: 70%;
  display: flex;
  justify-content: space-between;
  div {
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    cursor: pointer;
  }
  @media only screen and (min-width: 300px) and (max-device-width: 800px) {
    width: 80%;
  }
`;

export const InputForm = styled.div`
  padding: 2px;
  display: flex;
  input {
    background-color: rgba(142, 202, 230, 0.5);
    border: none;
    padding: 10px;
    width: 50%;
  }
  p {
    padding: 2%;
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
  @media only screen and (min-width: 300px) and (max-device-width: 600px) {
    width: 70%;
  }
  @media only screen and (min-width: 600px) and (max-device-width: 900px) {
    width: 50%;
  }
`;
