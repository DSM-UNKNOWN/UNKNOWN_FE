import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

const Header = (props) => {

  return (
    <Font>{props.innerText}</Font>
  );
}

export default Header;

export const Font = styled.div`
    font-size: 32px;
    font-weight: bold;
    color: ${color.Green[3]};
`