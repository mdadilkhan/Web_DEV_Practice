import React from "react";
import CommentBox from "./CommentBox";

const data = [
  {
    username: "adil",
    comment: "lorem ipsum dollar sit day",
    replies: [
      {
        username: "saniya",
        comment: "cjhsbcjsdc cjhsbcjsdvcj cybsjdbcia",
        replies: [
          {
            username: "saniya",
            comment: "cjhsbcjsdc cjhsbcjsdvcj cybsjdbcia",
          },
          {
            username: "sadaf",
            comment: "cjhsbjchb asbckbcuehc habcjsdbjvhsdukvb",
          },
        ],
      },
      {
        username: "sadaf",
        comment: "cjhsbjchb asbckbcuehc habcjsdbjvhsdukvb",
        replies: [
          {
            username: "saniya",
            comment: "cjhsbcjsdc cjhsbcjsdvcj cybsjdbcia",
          },
          {
            username: "sadaf",
            comment: "cjhsbjchb asbckbcuehc habcjsdbjvhsdukvb",
          },
        ],
      },
    ],
  },
  {
    username: "aamir",
    comment: "lorem ipsum dollar sit day",
    replies: [
      {
        username: "saniya",
        comment: "cjhsbcjsdc cjhsbcjsdvcj cybsjdbcia",
      },
      {
        username: "sadaf",
        comment: "cjhsbjchb asbckbcuehc habcjsdbjvhsdukvb",
      },
    ],
  },
  {
    username: "asif",
    comment: "lorem ipsum dollar sit day",
    replies: [
      {
        username: "saniya",
        comment: "cjhsbcjsdc cjhsbcjsdvcj cybsjdbcia",
      },
      {
        username: "sadaf",
        comment: "cjhsbjchb asbckbcuehc habcjsdbjvhsdukvb",
      },
    ],
  },
  {
    username: "adnan",
    comment: "lorem ipsum dollar sit day",
    replies: [
      {
        username: "saniya",
        comment: "cjhsbcjsdc cjhsbcjsdvcj cybsjdbcia",
      },
      {
        username: "sadaf",
        comment: "cjhsbjchb asbckbcuehc habcjsdbjvhsdukvb",
      },
    ],
  },
];

const Comments = () => {
  return <div>
    <CommentBox data={data} />
  </div>;
};

export default Comments;
