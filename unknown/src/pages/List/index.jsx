import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import State from "../../components/State";

const List = () => {
  const navigate = useNavigate();

  const onData = () => {
    navigate("/info");
  }

  return (
    <Background>
      <FontDiv>
        <State innerText="LIST" />
      </FontDiv>
      <Center>
        <Column onClick={() => onData()}>
          <Left>
            <Name>000</Name>
            <Age>00세</Age>
          </Left>
          <StateLow>승인 중</StateLow>
        </Column>
        <Column>
          <Left>
            <Name>000</Name>
            <Age>00세</Age>
          </Left>
          <StateLow>승인 중</StateLow>
        </Column>
        <Column>
          <Left>
            <Name>000</Name>
            <Age>00세</Age>
          </Left>
          <StateLow>승인 중</StateLow>
        </Column>
        <Column>
          <Left>
            <Name>000</Name>
            <Age>00세</Age>
          </Left>
          <StateHigh>승인 중</StateHigh>
        </Column>
        <Column>
          <Left>
            <Name>000</Name>
            <Age>00세</Age>
          </Left>
          <StateHigh>승인 중</StateHigh>
        </Column>
        <Column>
          <Left>
            <Name>000</Name>
            <Age>00세</Age>
          </Left>
          <StateHigh>승인 중</StateHigh>
        </Column>
        <Column>
          <Left>
            <Name>000</Name>
            <Age>00세</Age>
          </Left>
          <StateHigh>승인 중</StateHigh>
        </Column>
        <Column>
          <Left>
            <Name>000</Name>
            <Age>00세</Age>
          </Left>
          <StateHigh>승인 중</StateHigh>
        </Column>
      </Center>
    </Background>
  );
}

export default List;

export const Background = styled.body`
  padding: 100px;
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
  width: 40vw;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  row-gap: 2vh;
  padding: 3vh 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Column = styled.button`
  width: 38vw;
  height: 12vh;
  border: none;
  border-bottom: solid 1px ${color.Gray[2]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.White};
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
`

export const Name = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${color.Black};
`

export const Age = styled.div`
  font-size: 25px;
  font-weight: medium;
  color: ${color.Gray[4]};
`

export const StateLow = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 30px;
  border: solid 1px ${color.Gray[4]};
  color: ${color.Gray[4]};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StateHigh = styled.div`
  width: 120px;
  height: 50px;
  border-radius: 30px;
  border: solid 1px ${color.Green[3]};
  color: ${color.Green[3]};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`