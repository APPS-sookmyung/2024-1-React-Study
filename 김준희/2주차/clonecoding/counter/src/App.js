import { useState } from "react";
import Counter from "./components/Counter";
import TotalCounter from "./components/TotalCounter";

function App() {
  const [total, setTotal] = useState(0);
  const handleTotal = () => {
    setTotal((prev) => prev +1);
  }
  return (
    <>
      <TotalCounter total={total} />
      <Counter handleTotal={handleTotal}/>
      <Counter handleTotal={handleTotal} />
    </>
  );
}

export default App;
