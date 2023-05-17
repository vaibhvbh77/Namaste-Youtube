import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";

const InputForm = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const darkTheme = useSelector((store) => store.app.darkTheme);
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addMessages({ name: "Vaibhav", message }));
    setMessage("");
  };
  return (
    <form
      onSubmit={submitHandler}
      className={
        darkTheme
          ? "rounded ml-[90px] py-2 bg-black "
          : "rounded ml-[90px] py-2 "
      }
    >
      <div
        className={
          darkTheme
            ? "p-2 ml-2 border border-gray-500 w-94 rounded "
            : "p-2 ml-2 border border-black w-94 rounded "
        }
      >
        <input
          type="text"
          placeholder="Type Message Here!"
          className={darkTheme ? "bg-black" : ""}
          onChange={messageHandler}
          value={message}
        ></input>
        <button
          type="form"
          className={
            darkTheme
              ? "px-1 my-1 bg-black-100 text-white ml-14 text-center my-3"
              : "px-1 my-1 bg-dark-100  ml-14 my-3 mx-5"
          }
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default InputForm;
