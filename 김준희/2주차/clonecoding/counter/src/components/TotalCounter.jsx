import styled from "styled-components";

const S = {
  Container: styled.div`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    margin: 30px 0;
  `,
};

export default function TotalCounter({total}) {
  return <S.Container>Total Count: {total}</S.Container>;
}
