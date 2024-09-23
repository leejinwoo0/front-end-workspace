import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const setCounter = () => {
    setCount(count + 10);
  };
  const setCounterr = () => {
    setCount(count - 10);
  };
  const setCounterrr = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Hello, React! : {count}</h1>
      <button onClick={setCounter}>+10</button>
      <button onClick={setCounterr}>-10</button>
      <button onClick={setCounterrr}>reset</button>
    </div>
  );
};

export default App;
