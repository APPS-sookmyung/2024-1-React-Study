// First.jsx
/* eslint-disable react/prop-types */
import styled from "styled-components";
import Second from "./Second";

export const Container = styled.div`
  border: 1px solid red;
  padding: 20px;
`;

export default function First({handleClick}) {
  return (
    <Container>
      <p>First Component</p>
      <Second handleClick={handleClick} />
    </Container>
  );
}