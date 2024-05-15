// App.jsx
import "./App.css";
import First from "./components/First";
import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.count);

  return (
    <>
      <p>Counter: {count}</p>
      <First />
    </>
  );
}

