import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import postUserSignup from "../../apis/postUserSignup";

import State from "../../components/State";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Signup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    userid: "",
    userpw: "",
    state: "병원",
    connect: "",
    userpwCheck: "",
  });

  useEffect(() => {
    console.log(signupData);
  }, [signupData]);

  const handleInputChange = (text, field) => {
    setSignupData(prevData => ({
      ...prevData,
      [field]: text
    }));
  }

  const onSignup = async () => {
    if(signupData !== null) {
      try {
        const signupState = await postUserSignup(signupData);

        if (signupState) {
          navigate("/login");
        }
      } catch (error) {
        console.log("회원가입 오류");
      }
    }
  }

  return (
    <Background>
      <Center>
        <State innerText="SIGNUP" />
        <InputDiv>
          <Input innerText="아이디" state="text" onGetInText={(text) => handleInputChange(text, "userid")} />
          <Input innerText="병원 이름" state="text" onGetInText={(text) => handleInputChange(text, "connect")} />
          <Input innerText="비밀번호" state="password" onGetInText={(text) => handleInputChange(text, "userpw")}/>
          <Input innerText="비밀번호 확인" state="password" onGetInText={(text) => handleInputChange(text, "userpwCheck")}/>
        </InputDiv>
        <Button innerText="회원가입" onClick={() => onSignup()}/>
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