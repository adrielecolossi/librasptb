import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  border: none;
  padding: 5%;
  cursor: pointer;
  margin: 2%;
  &:hover {
    cursor: pointer;
  }
`;