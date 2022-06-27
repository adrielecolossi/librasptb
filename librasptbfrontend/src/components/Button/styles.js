import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  border: none;
  padding: 3%;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`;