import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  border: none;
  font-size: ${(props) => props.fontSize};
  font-weight:  ${(props) => props.fontWeight};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  cursor: pointer;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media only screen and (min-width: 300px) and (max-device-width: 700px) {
    width: 40vw;
    padding: 3%;
  }
`;