import { useState, useRef } from "react";

const InputText = () => {
  const [text, setText] = useState("");
  const textRef = useRef();

  const write = (event) => {
    setText(event.target.value);
  };
  const complete = () => {
    alert(textRef.current.value);
    //setText("");
    textRef.current.value = "";
    textRef.current.focus();
  };
  return (
    <>
      <input ref={textRef} onChange={write} value={text} />
      <button onClick={complete}>작성완료</button>
    </>
  );
};
export default InputText;
