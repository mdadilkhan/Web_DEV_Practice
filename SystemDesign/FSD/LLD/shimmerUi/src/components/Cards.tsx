import React, { useEffect, useState } from "react";
import Shimer from "./Shimer";
import Card from "./card";
import "../App.css";

const Cards = () => {
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetchMeme();
  }, []);

  const fetchMeme = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    setMeme(json.memes);
  };
  return (
    <div className="card-container">
      {!meme ? (
        <Shimer count={20}/>
      ) : (
        meme.map((item, index) => {
          return <Card key={index} data={item} />;
        })
      )}
    </div>
  );
};

export default Cards;
