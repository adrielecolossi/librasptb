import React from "react";
import { Header } from "./styles";

import { Link } from "react-router-dom";


function HeaderOne(props) {

function removeStorage(){
  localStorage.removeItem('tokenLibrasPTB');
  localStorage.removeItem('user');
  window.location.href= "http://localhost:3000/login"
}
  if (props.logged == true) {
    return (
      <>
        <Header>
          <Link to="/home">Home</Link>
          <button onClick={removeStorage}>Logout</button>
        </Header>
      </>
    );
  } else {
    return (
      <>
        <Header>
          <Link to="/login">Login</Link>
        </Header>
      </>
    );
  }
}

export default HeaderOne;
