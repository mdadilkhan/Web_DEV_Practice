import React, { useEffect, useState } from "react";
import Shimer from "./Shimer";
import Card from "./card";

import "../App.css";

const Cards = () => {
  const [meme, setMeme] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  const fetchMeme = async () => {
    try {
      setShowShimmer(true);
      const data = await fetch("https://meme-api.com/gimme/20");

        if (!data.ok) throw new Error("Failed to fetch memes");
        
      const json = await data.json();
      setShowShimmer(false);
      setMeme((meme) => [...meme, ...json.memes]);
    } catch (error) {
        console.log(error);
        
    }
  };

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      console.log("fetch more data");
      fetchMeme();
    }
  };

  useEffect(() => {
    // this is just for gettingt he data from api
    fetchMeme();

    // extended the feature for infinite scroll
    // this will add the event listener when page compes in view port or page loads
    window.addEventListener("scroll", handleScroll);

    // this will trigger when page is unload means when page is not presnt in view port of the screen
    return () => {
      console.log("removing event listenter");

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="card-container">
      {meme.map((item, index) => {
        return <Card key={index} data={item} />;
      })}

      {showShimmer && <Shimer count={20} />}
    </div>
  );
};

export default Cards;
