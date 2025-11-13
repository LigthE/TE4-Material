import React, { useState } from "react";

const MyInput = () => {
  const [text, setText] = useState<string>("initalstate");

  console.log(text);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div>
      <h2>Example - string with useState / single input</h2>
      <input type="text" value={text} onChange={handleChange} />

      <p>You type: {text}</p>
      <button onClick={() => setText("initialstate")}>RESET</button>
    </div>
  );
};

export default MyInput;
