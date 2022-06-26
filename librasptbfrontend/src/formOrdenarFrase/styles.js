import styled from "styled-components";
export const Title = styled.h1`
  font-size: ${(props) => `${props.fontSize}em`};
  color: ${(props) => props.color};
  font-weight: 400;

  margin-top: 1%;
  margin-left: 3%;
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4px 4px 4px 4px;
  flex-wrap: wrap;
  padding: 3%;
  background-color: rgba(231, 231, 231, 0.5);
  border-radius: 6px;
  width: 30%;

  @media only screen and (min-width: 400px) and (max-device-width: 800px) {
    width: 70%;
    height: 50vh;
  }
  @media only screen and (min-width: 200px) and (max-device-width: 400px) {
    width: 90%;
    height: 40vh;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Div = styled.div`
  margin-top: 2%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DivInput = styled.div`
  display: flex;
  align-self: flex-start;
  padding: 2%;
  flex-wrap: wrap;
  margin-top: 3%;
  margin-bottom: 5%;
  input {
    padding: 10%;
    border: none;
    width: 90%;
  }
  label {
    margin-right: 10%;
  }
  @media only screen and (min-width: 400px) and (max-device-width: 600px) {
    input {
      width: 80%;
    }
  }
  @media only screen and (min-width: 200px) and (max-device-width: 400px) {
    input {
      width: 53%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const DivSelect = styled.div`
  display: flex;
  margin-bottom: 4%;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
`;
