import React, { useEffect, useState } from "react";

const List = ({ theme, getItems }) => {
  const [item, setItem] = useState([]);
  useEffect(()=>{
    setItem(getItems());
    console.log("list rendered");
    
  },[getItems])

  
  return <div style={theme}>
      <ul>

        {
            item.map((item,index)=>{
                return (
                    <li key={index}>{item}</li>
                )
            })
        }
      </ul>
  </div>;
};

export default List;
