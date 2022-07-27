import React from "react";
import { DivCard, Div } from "./styles";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Div>
    <Link to={props.link}>
      <DivCard>
        <img src={props.image} alt=""/>
        <div>
          <h3>{props.title}</h3>
          <h6>{props.subtitle}</h6>
        </div>
      </DivCard>
    </Link>
    </Div>
  );
}

export default Card;