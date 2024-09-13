import React, { useState, useEffect } from "react";
import { color } from "../../styles/theme";
import styled from "styled-components";

import AppImg from "../../assets/AppImg.png";
import WebImg from "../../assets/WebImg.png";
import Button from "../../components/Button";

const Before = () => {

  return (
    <Background>
      <Top>
        <FontBold>의료 기반 서비스 <FontBoldColor>UNKNOWN</FontBoldColor>을 소개합니다.</FontBold>
        <FontSmall>
          의료인이 의료 서비스에만 집중한다면 세상은 한층 더 건강해지지 않을까요?<br/>
          더 나은 세상을 위해 UNKNOWN과 시작을 함께 하세요.
        </FontSmall>
      </Top>
      <Bottom>
        <FontMedium>응급 의료 정보 현황을 한 눈에</FontMedium>
        <img src={AppImg} width={900} />
      </Bottom>
      <Bottom>
        <FontMedium>환자 정보를 쉽게</FontMedium>
        <img src={WebImg} width={900} />
      </Bottom>
      <Button innerText="UNKNOWN 시작하기" onClick={() => console.log('시작하기 클릭')} />
    </Background>
  );
}

export default Before;

export const Background = styled.body`
  width: 100%;
  height: 280vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Top = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const Bottom = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const FontBold = styled.div`
  font-size: 38px;
  font-weight: bold;
  color: ${color.Black};
  display: flex;
  gap: 20px;
`

export const FontBoldColor = styled.div`
  font-size: 38px;
  font-weight: bold;
  color: ${color.Green[3]};
`

export const FontMedium = styled.div`
  font-size: 25px;
  font-weight: medium;
  color: ${color.Black};
`

export const FontSmall = styled.div`
  font-size: 15px;
  font-weight: medium;
  color: ${color.Black};
  text-align: center;
`