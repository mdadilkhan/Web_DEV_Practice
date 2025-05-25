import React, { useCallback, useState, useMemo } from "react";
import List from "./List";

const UseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // without using callback  the function is created ewverytime if any satate change
  //  so use callBack with state which makes ony my fucntion to create when that state changes
  // const getItems=()=>{
  //     return [number+1,number+2,number+3]
  // }

  const getItems = useCallback(() => {
    return [number + 1, number + 2, number + 3];
  }, [number]);


  // same for theme
  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "red" : "green",
      color: dark ? "black" : "white",
    };
  }, [dark]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          setDark((prev) => !prev);
        }}
      >
        Toggle Theme
      </button>
      <List getItems={getItems} theme={theme} />
    </div>
  );
};

export default UseCallback;
