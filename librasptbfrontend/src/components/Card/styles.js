import styled from "styled-components";
export const DivCard = styled.div`
  display: flex;
  background-color: white;
  border-radius: 20px;
  width: 45%;
  margin-bottom: 2%;
  img {
    width: 40%;
    border-radius: 20px 0px 0px 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    font-size: 0.6em;
    align-items: flex-start;
  }
  &:hover {
    background-color: #F7F7F7;
    opacity: 0.8;
    cursor: pointer;
  }

  h3,
  h6 {
    padding: 5px 5px 5px 5px;
    margin: 0px;
    font-weight: 400;
  }
  


  @media only screen and  (max-device-width: 1500px) {
    div{
      font-size: 0.9em
    }
  }
  @media only screen and (min-width: 900px) and (max-device-width: 1000px) {
    div{
      font-size: 0.8em
    }
    img{
      width:55%;
      height: 100%;
    }
  }


  @media only screen and (min-width: 800px) and (max-device-width: 900px) {
    width: 60%;
    margin: auto;
    margin-top: 5%;
    div{
      font-size: 0.7em
    }
    img{
      width:60%;
      height: 100%;
    }
  }
  @media only screen and (min-width: 715px) and (max-device-width: 800px) {
    width: 60%;
    margin: auto;
    margin-top: 5%;
    div{
      font-size: 0.65em
    }
    img{
      width:60%;
      height: 100%;
    }
  }

  @media only screen and (min-width: 500px) and (max-device-width: 715px) {
    width: 70%;
    margin: auto;
    margin-top: 5%;
    div{
      font-size: 0.55em
    }
    img{
      width:60%;
      height: 100%;
    }
  }
  @media only screen and (min-width: 450px) and (max-device-width: 505px) {
    width: 80%;
    margin: auto;
    margin-top: 5%;
    div{
      font-size: 0.5em
    }
    img{
      width:60%;
      height: 100%;
    }
  }
  @media only screen and (min-width: 300px) and (max-device-width: 450px) {
    width: 90%;
    margin: auto;
    margin-top: 5%;
    
    div{
      font-size: 0.5em
    }
    img{
      width:40%;
      height: 100%;
    }
  }
  @media only screen and (max-device-width: 300px) {

    margin: auto;
    margin-top: 5%; 
    div{
      font-size: 0.4em
    }
    img{
      width:60%;
      height: 100%;
    }
  }
`;
