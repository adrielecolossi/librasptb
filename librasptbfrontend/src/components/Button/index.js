import React, { useState, useEffect } from "react";
import {Button} from "./styles";
import axios, { post } from "axios";
import Modal from "react-modal";
const token = localStorage.getItem("token");

function ButtonJS(props) {
    return (
        <Button 
        onClick={props.onClick}
        backgroundColor={props.backgroundColor}
        color={props.color}
        border-radius={props.borderRadius}>
        {props.name}
        </Button>
    );
}
export default ButtonJS;