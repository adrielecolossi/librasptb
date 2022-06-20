import React from "react";
import { Header } from "./styles";

import { Link } from "react-router-dom";


function HeaderOne(props) {

function removeStorage(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
  if (props.logged == true) {
    return (
      <>
        <Header>
          <Link to="/home">Home</Link>
          <a onClick={removeStorage}>Logout</a>
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
