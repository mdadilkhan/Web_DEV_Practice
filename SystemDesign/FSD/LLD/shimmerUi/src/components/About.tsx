import React from "react";
import  {LANG} from '../utils/langConstant'






const About = ({lang}) => {

  console.log(lang);
const data=LANG[lang]
  
  return (
    <div>
      <h1>{data.about}</h1>
      <p>
        {data.paragraph}
      </p>
    </div>
  );
};

export default About;
