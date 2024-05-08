import React, { useState } from "react";
import styled from "styled-components";

const S = {
  Container: styled.div`
    border: 1px solid black;
    width: 500px;
    height: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    p {
      font-size: 50px;
      display: flex;
      justify-content: center;
      margin: 0;
    }

    button {
      width: 200px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      margin-top: 10px;
    }
  `,
};

export default function Counter({handleTotal}) {
  const [num, setNum] = useState(0);
  const handleBtnClick = () => {
    setNum((prev) => prev + 1);
    handleTotal();
  };
  return (
    <S.Container>
      <p>{num}</p>
      <button onClick={handleBtnClick}>+</button>
    </S.Container>
  );
}
