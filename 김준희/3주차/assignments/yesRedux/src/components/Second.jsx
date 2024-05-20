// Second.jsx
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { increment } from "../redux/actions";

export default function Second() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <Container>
      <p>Second Component</p>
      <button onClick={handleClick}>클릭</button>
    </Container>
  );
}

export const Container = styled.div`
  border: 1px solid blue;
  padding: 20px;
`;
