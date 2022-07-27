import React from "react";
import {Button} from "./styles";

function ButtonJS(props) {
    return (
        <Button 
        onClick={props.onClick}
        backgroundColor={props.backgroundColor}
        color={props.color}
        borderRadius={props.borderRadius}
        padding={props.padding}
        width={props.width}
        fontSize={props.fontSize}
        fontWeight={props.fontWeight}>
        {props.name}
        </Button>
    );
}
export default ButtonJS;