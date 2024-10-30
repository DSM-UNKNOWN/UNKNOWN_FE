import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { color } from "../../styles/theme";

const Input = (props) => {
  const [value, setValue] = useState();

  const onChangeData = (e) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    props.onGetInText(value);
  }, [value]);

  return (
    <InputDiv type={props.state} placeholder={props.innerText} onChange={onChangeData}></InputDiv>
  );
}

export default Input;

export const InputDiv = styled.input`
    width: 23vw;
    height: 5vh;
    padding: 0 1vw;
    border: solid 1px ${color.Gray[3]};
    border-radius: 10px;
    font-size: 16px;
    font-weight: medium;
    color: ${color.Black};

    &:focus {
        outline: none;
    }
`