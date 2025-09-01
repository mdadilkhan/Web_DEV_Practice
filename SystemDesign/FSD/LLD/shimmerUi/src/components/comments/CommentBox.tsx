import React from "react";

const CommentBox = ({ data }) => {
  console.log(data);

  return (
    <div style={{display:'flex',}}>
      <div>
        <img
          src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
          alt="user"
          style={{width:'50px',padding:'10px', borderRadius:'100%'}}
        />
      </div>
      <div>
        <p style={{fontWeight:800,padding:'12px'}}>Adil</p>
        <p>Lorem ipsum</p>
      </div>
    </div>
  );
};

export default CommentBox;
