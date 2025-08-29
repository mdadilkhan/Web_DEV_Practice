import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

const data = [
  {
    title: "title-1",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, commodi nesciunt voluptatem at hic vero deleniti architecto, voluptatum repellendus consectetur explicabo voluptas obcaecati soluta. Nisi neque molestias inventore minus cum.",
  },
  {
    title: "title-2",
    body: " Lorem, ipsum dolor sit amet consectetur a siti reprehenderit itaque odio, expedita perspiciatis siti reprehenderit itaque odio, expedita perspiciatis siti reprehenderit itaque odio, expedita perspiciatis siti reprehenderit itaque odio, expedita perspiciatis",
  },
  {
    title: "title-3",
    body: "Lorem ipsum dolor siti reprehenderit itaque odio, expedita perspiciatis quaerat facere neque. Vero saepe sit odit modi. Voluptatum, eius cumque? Illum, ducimus! Temcusandae ullam pariatur sit beatae eligendi facere aperiam sed illum numquam expedita! Itaque ducimus qui voluptatum.Tenetur maxime repellendus ut distinctio. Sit explicabo iste, cum sapiente ex dolore sequi eum, doloribus ipsam accusantium repellat quae rerum. Ipsum atque dolore facere molestias inventore voluptas architecto magnam fugit.",
  },
];
const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div style={{ margin: "10px auto", width: "50%"}}>
      {data.map((item,index) => (
        <AccordianItem
          key={index}
          title={item.title}
          body={item.body}
          isOpen={index === openIndex}
          setIsOpen={() => {

           index === openIndex ? setOpenIndex(-1) : setOpenIndex(index)
  
          }}
        />
      ))}
    </div>
  );
};


export default Accordian