import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

import State from "../../components/State";
import getPatientData from "../../apis/getPatientData";

const List = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  const getList = async () => {
    const data = await getPatientData();
    if(data) {
      setList(data);
    }
  }

  const onData = (data) => {
    localStorage.setItem("id", JSON.stringify(data));
    navigate("/info");
  }

  return (
    <Background>
      <FontDiv>
        <State innerText="LIST" />
      </FontDiv>
      <Center>
        {list.map((item , index) => {
            return(
              <Column onClick={() => onData(item.id)}>
                <Left>
                  <Name>{item.hospitalName}</Name>
                  <Age>{item.hospitalMonth}세</Age>
                </Left>
                {item.state == 'confm' ?
                <StateHigh>승인 완료</StateHigh>
                :
                <StateLow>대기 중</StateLow>
                }
              </Column>
            );
          }
        )}
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