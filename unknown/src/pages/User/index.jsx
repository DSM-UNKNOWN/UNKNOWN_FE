import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import State from "../../components/State";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Signup = () => {

  return (
    <Background>
      <Center>
        <State innerText="SIGNUP" />
        <InputDiv>
          <Input innerText="아이디" state="text" />
          <Input innerText="병원 이름" state="text" />
          <Input innerText="비밀번호" state="password"/>
          <Input innerText="비밀번호 확인" state="password"/>
        </InputDiv>
        <Button innerText="회원가입" onClick={() => console.log('회원가입 클릭')}/>
      </Center>
    </Background>
  );
}

export default Signup;

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