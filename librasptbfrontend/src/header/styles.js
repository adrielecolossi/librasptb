import styled from "styled-components";

export const Header = styled.header`
  background-color: #00537a;
  color: #ffff;
  padding: 1.5%;
  margin-bottom: 2%;
  a {
    text-decoration: none;
    color: white;
    display: flex;
    justify-content: flex-end;
    margin-right: 2%;
    font-size: 1.2em;
    font-weight: 400;
    &:hover {
      color: #cccccc;
    }
  }
`;
