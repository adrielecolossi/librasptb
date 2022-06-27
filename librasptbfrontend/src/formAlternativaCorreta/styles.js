import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => `${props.fontSize}em`};
  color: ${(props) => props.color};
  font-weight: 400;

  margin-top: 1%;
  margin-left: 3%;
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

export const DivSelect = styled.div`
  flex-wrap: wrap;
  width: 30%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  div{
    padding: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #categoria {
    cursor: pointer;
  }
   @media only screen and (min-width: 300px) and (max-device-width: 500px) {
      width: 60%;
      justify-content: center;
  }
  @media only screen and (min-width: 500px) and (max-device-width: 800px) {
      width: 50%;
  }
`;

export const DivInput = styled.div`
  padding-top: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

