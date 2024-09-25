import { useState, useEffect, useRef } from "react";
import Btn from "./Btn";

const Counter = () => {
  const [count, setCount] = useState(0);
  const updateCheckRef = useRef(false);

  const setCounter = () => {
    setCount(count + 10);
  };
  const setCounterr = () => {
    setCount(count - 10);
  };
  const setCounterrr = () => {
    setCount(0);
  };

  // 마운트
  useEffect(() => {
    console.log("mount!");
  }, []); // 무조건이렇게옴 기억하기 앞에콜백함수 뒤에 배열

  // 업데이트
  useEffect(() => {
    if (!updateCheckRef.current) {
      updateCheckRef.current = true;
      return;
    } else {
      console.log("count update!");
    }
  }, [count]);

  // 언마운트
  useEffect(() => {
    return () => {
      console.log("unmount!");
    };
  }, []);

  return (
    <>
      <h1>Hello, React! : {count}</h1>
      <Btn click={setCounter} text="+10" />
      <Btn click={setCounterr} text="-10" />
      <Btn click={setCounterrr} text="reset" />
    </>
  );
};

export default Counter;
