import React from "react";
import { DivCard } from "./styles";
function Card(props) {
  return (
    <DivCard>
      <img src={props.image} />
      <div>
        <h3>{props.title}</h3>
        <h6>{props.subtitle}</h6>
      </div>
    </DivCard>
  );
}

export default Card;
