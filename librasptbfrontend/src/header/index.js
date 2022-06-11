import React from "react";
import { Header } from "./styles";

import { Link } from "react-router-dom";
function HeaderOne(props) {
  if (props.logged == true) {
    return (
      <>
        <Header>
          <Link to="/home">Home</Link>
          <Link to="/home">Logout</Link>
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
