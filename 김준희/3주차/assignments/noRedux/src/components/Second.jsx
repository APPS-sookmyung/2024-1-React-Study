// Second.jsx
/* eslint-disable react/prop-types */
import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid blue;
  padding: 20px;
`;

export default function Second({ handleClick }) {
  return (
    <Container>
      <p>Second Component</p>
      <button onClick={handleClick}>클릭</button>
    </Container>
  );
}
