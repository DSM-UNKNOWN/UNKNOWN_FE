import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import Back from "../../assets/Back";
import State from "../../components/State";
import Button from "../../components/Button";

import getPatientData from "../../apis/getPatientData";
import patchPatientData from "../../apis/patchPatientData";

const Info = () => {
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  useEffect(() => {
    console.log(id);
  }, [id]);

  const getList = async () => {
    const data = await getPatientData();
    if(data) {
      setList(data);
      setId(localStorage.getItem("id"));
    }
  }

  const onPress = async () => {
    const text = {
      "id": id,
      "state": "confm"
    }
    const data = await patchPatientData(text);
    if(data) {
      navigate("/list");
    }
  }

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
          <Name>{list && id ? list[id-1].hospitalName : null}</Name>
          <Age>({list && id ? list[id-1].hospitalMonth : null}세)</Age>
        </Top>
        <DataDiv>
          <Tag>혈액형 :</Tag>
          <Data>{list && id ? list[id-1].hospitalBlood : null}형</Data>
        </DataDiv>
        <DataDiv>
          <Tag>부상 부위 :</Tag>
          <Data>{list && id ? list[id-1].hospitalInjury : null}</Data>
        </DataDiv>
        <DataDiv>
          <Tag>질병 여부 :</Tag>
          <Data>{list && id ? list[id-1].hospitalDisease : null}</Data>
        </DataDiv>
        <DataDiv>
          <Tag>수술 여부 :</Tag>
          <Data>{list && id ? list[id-1].hospitalSurgery : null}</Data>
        </DataDiv>
        <DataDiv>
          <Tag>구급대 연락처 :</Tag>
          <Data>{list && id ? list[id-1].phone : null}</Data>
        </DataDiv>
        <ButtonDiv>
          <Button innerText="승인하기" onClick={() => onPress()}/>
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