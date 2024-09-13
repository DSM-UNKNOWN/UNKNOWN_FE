import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

const Button = (props) => {

  return (
    <ButtonDiv onClick={props.onClick}>{props.innerText}</ButtonDiv>
  );
}

export default Button;

export const ButtonDiv = styled.button`
    width: 25vw;
    height: 5vh;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    background-color: ${color.Green[3]};
    color: ${color.White};

    &:hover {
        cursor: pointer;
    }
`