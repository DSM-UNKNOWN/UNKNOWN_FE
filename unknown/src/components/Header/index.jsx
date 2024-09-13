import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

const Header = () => {

  return (
    <HeaderBackground>
        <Logo />
        <Margin></Margin>
    </HeaderBackground>
  );
}

export default Header;

export const HeaderBackground = styled.header`
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50%;
  position: fixed;
  background-color: ${color.White};
`;

export const Margin = styled.div`
  width: 200px;
  height: 6vh;
`