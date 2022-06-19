import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => `${props.fontSize}em`};
  color: ${(props) => props.color};
  font-weight: 400;

  margin-top: 1%;
  margin-left: 3%;
`;

export const SendButton = styled.button`
  :hover {
    cursor: pointer;
    background-color: rgba(26, 123, 147);
  }
  margin: auto;
  padding: 15px;
  width: 15%;
  color: white;
  background-color: rgba(33, 158, 188, 1);
  font-weight: bold;
  font-size: 1em;
  border-radius: 5px;
  border: none;
  @media only screen and (min-width: 300px) and (max-device-width: 500px) {
    width: 40%;
    margin-top: 4%;
  }
`;

export const DivInputForm = styled.form`
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    width: 30%;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (min-width: 300px) and (max-device-width: 500px) {
    div {
      width: 60%;
      justify-content: center;
    }
  }
  @media only screen and (min-width: 500px) and (max-device-width: 800px) {
    div {
      width: 80%;
    }
  }
`;

export const Input = styled.input`
  background-color: ${(props) => props.color};
  border: none;
  padding: 10px;
  margin: 2px 2px 2px 2px;
  cursor: pointer;
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
`;