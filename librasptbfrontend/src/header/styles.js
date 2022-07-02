import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #00537a;
  padding: 1.5%;
  margin-bottom: 2%;
  a {
    text-decoration: none;
    color: white;
    font-size: 1em;
    margin-right: 2%;
    &:hover {
      color: #cccccc;
    }
  }
  button {
    @media only screen and (min-width: 300px) and (max-device-width: 700px) {
      width: 15vw;
    }
  }
`;
