// App.jsx
import { useState } from "react";
import "./App.css";
import First from "./components/First";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Counter: {count}</p>
      <First handleClick={handleClick} />
    </>
  );
}