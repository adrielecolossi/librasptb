import styled from "styled-components";
export const Title = styled.h1`
  font-size: ${(props) => `${props.fontSize}em`};
  color: ${(props) => props.color};
  font-weight: 400;
  margin-top: 1%;
  margin-left: 3%;
`;

export const Divs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  form {
    background-color:  rgba(142,202,230,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #categoria-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:  rgba(142,202,230,0.2);
    padding: 2%;
  }
`;

export const Div = styled.div`
  width: 70%;
  display: flex;
  padding: 2%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`; 

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2%;
`;

export const DivSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
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
`;