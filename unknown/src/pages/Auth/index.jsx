import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import State from "../../components/State";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/list");
  }

  const onSignup = () => {
    navigate("/signup");
  }

  return (
    <Background>
      <Center>
        <State innerText="LOGIN" />
        <InputDiv>
          <Input innerText="아이디" state="text" />
          <Input innerText="비밀번호" state="password"/>
        </InputDiv>
        <InputDiv>
          <Button innerText="로그인" onClick={() => onLogin()}/>
          <Font>아직 계정이 없으신가요?<Color onClick={() => onSignup()}>회원가입</Color></Font>
        </InputDiv>
      </Center>
    </Background>
  );
}

export default Login;

export const Background = styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Center = styled.div`
  width: 40vw;
  height: 65vh;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  row-gap: 10vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InputDiv = styled.div`
  row-gap: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Font = styled.div`
  font-size: 15px;
  font-weight: medium;
  display: flex;
  color: ${color.Black};
  gap: 10px;
`

export const Color = styled.button`
  font-size: 15px;
  font-weight: medium;
  color: ${color.Green[3]};
  border: none;
  background-color: ${color.White};

  &:hover {
    cursor: pointer;
  }
`