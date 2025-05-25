import React, { useDeferredValue, useEffect, useMemo } from "react";

const DeferredList = ({ input }) => {

  if(!input)return null
  const deferredValue = useDeferredValue(input);
  const LIST_SIZE = 20000;
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredValue}</div>);
    }
    return l;
  }, [deferredValue]);

useEffect(()=>{
    console.log(`input: ${input} \n deferedVAlue ${deferredValue}`);
    
})

  return (
    list
  );
};

export default DeferredList;
