import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => `${props.fontSize}em`};
  color: ${(props) => props.color};
  font-weight: 400;

  margin-top: 1%;
  margin-left: 3%;
`;

export const DivInput = styled.div`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  width: 40%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(142, 202, 230, 0.2);
  @media only screen and (min-width: 300px) and (max-device-width: 800px) {
    width: 70%;
    height: 70vh;
    margin-bottom: 2%;
  }
`;

export const Divs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const DivInputForm = styled.form`
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(142, 202, 230, 0.2);
  padding: 2%;
  div {
    display: flex;
    width: 90%;
    padding: 2%;
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
      width: 100%;
    }
  }
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