import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import Back from "../../assets/Back";
import State from "../../components/State";
import Button from "../../components/Button";

const Info = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/list");
  }

  return (
    <Background>
      <FontDiv>
        <State innerText="DATA" />
      </FontDiv>
      <Fixed onClick={() => onBack()}>
        <Back />
      </Fixed>
      <Center>
        <Top>
          <Name>000</Name>
          <Age>(00세)</Age>
        </Top>
        <DataDiv>
          <Tag>혈액형 :</Tag>
          <Data>A형</Data>
        </DataDiv>
        <DataDiv>
          <Tag>부상 부위 :</Tag>
          <Data>어깨</Data>
        </DataDiv>
        <DataDiv>
          <Tag>질병 여부 :</Tag>
          <Data>당뇨</Data>
        </DataDiv>
        <DataDiv>
          <Tag>수술 여부 :</Tag>
          <Data>십자인대 파열 재건술</Data>
        </DataDiv>
        <DataDiv>
          <Tag>구급대 연락처 :</Tag>
          <Data>010-1234-5678</Data>
        </DataDiv>
        <ButtonDiv>
          <Button innerText="승인하기" onClick={() => console.log('승인 클릭')}/>
        </ButtonDiv>
      </Center>
    </Background>
  );
}

export default Info;

export const Background = styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 5vh;
`

export const FontDiv = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Center = styled.div`
  width: 30vw;
  padding: 0 5vw;
  height: 65vh;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  row-gap: 3vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`

export const Name = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: ${color.Black};
`

export const Age = styled.div`
  font-size: 25px;
  font-weight: medium;
  color: ${color.Gray[6]};
`

export const DataDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Tag = styled.div`
  font-size: 20px;
  font-weight: medium;
  color: ${color.Gray[6]};
`

export const Data = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${color.Black};
`

export const ButtonDiv = styled.div`
  width: 30vw;
  margin-top: 8vh;
  display: flex;
  justify-content: center;
`

export const Fixed = styled.button`
  position: absolute;
  top: 25vh;
  left: 31vw;
  border: none;
  background-color: ${color.White};

  &:hover {
    cursor: pointer;
  }
`