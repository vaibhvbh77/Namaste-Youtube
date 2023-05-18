import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Akshay Saini",
    text: "Lorem ipsum jasd jlkus sas  kjkjkjs fhoasur fns ",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum jasd jlkus sas  kjkjkjs fhoasur fns ",
    replies: [
      {
        name: "Akshay Saini",
        text: "Lorem ipsum jasd jlkus sas  kjkjkjs fhoasur fns ",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum jasd jlkus sas  kjkjkjs fhoasur fns ",
        replies: [],
      },
      {
        name: "Akshay Saini",
        text: "Lorem ipsum jasd jlkus sas  kjkjkjs fhoasur fns ",
        replies: [
          {
            name: "Akshay Saini",
            text: "Lorem ipsum jasd jlkus sas  kjkjkjs fhoasur fns ",
            replies: [],
          },
          {
            name: "Akshay Saini",
            text: "Lorem ipsum jasd jlkus sas  kjkjkjs fhoasur fns ",
            replies: [
              {
                name: "Akshay Saini",
                text: "Lorem ipsum jasd jlkus sas  kjkjkjs fhoasur fns ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum jasd jlkus sas  kjkjkjs fhoasur fns ",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum jasd jlkus sas  kjkjkjs fhoasur fns ",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum jasd jlkus sas  kjkjkjs fhoasur fns ",
    replies: [],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum jasd jlkus sas  kjkjkjs fhoasur fns ",
    replies: [],
  },
];
const CommentList = ({ data }) => {
  const darkTheme = useSelector((store) => store.app.darkTheme);
  return data.map((curr, index) => (
    <div>
      <Comment data={curr} key={index} />
      <div
        className={
          darkTheme
            ? "pl-5 border border-l-white ml-5"
            : "pl-5 border border-l-black ml-5"
        }
      >
        <CommentList data={curr.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <div className="text-2xl font-bold">Comments:</div>
      <CommentList data={commentsData} />
    </div>
  );
};

export default CommentsContainer;
