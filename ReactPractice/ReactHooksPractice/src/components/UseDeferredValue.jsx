import React, { useDeferredValue, useState } from "react";
import DeferredList from "./DeferredList";

const UseDeferredValue = () => {
  const [input, setInput] = useState("");
  const deferedVAlue = useDeferredValue(input);


  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <DeferredList input={input} />
    </div>
  );
};

export default UseDeferredValue;
