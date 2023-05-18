import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generate, messageGenerator } from "../utils/helper";
import ChatMessage from "./ChatMessage";
import InputForm from "./InputForm";
const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const darkTheme = useSelector((store) => store.app.darkTheme);
  // console.log(messages);
  useEffect(() => {
    const message = setInterval(() => {
      dispatch(
        addMessages({
          name: generate(),
          message: messageGenerator(10) + " Lorem Ipsum itras  ",
        })
      );
    }, 2000);

    return () => {
      return clearInterval(message);
    };
  }, []);
  return (
    <div className="py-3">
      <div
        className={
          darkTheme
            ? "flex flex-col-reverse h-[450px]  border border-gray-600 w-[370px] ml-[95px] p-2 bg-black rounded-lg overflow-y-scroll "
            : "flex flex-col-reverse h-[450px] border border-black w-[370px] ml-[95px] p-2 bg-slate-100 rounded-lg overflow-y-scroll "
        }
      >
        {/* Live chat */}
        {messages.map((curr, i) => (
          <ChatMessage name={curr.name} text={curr.message} key={i} />
        ))}
      </div>

      <InputForm />
    </div>
  );
};

export default LiveChat;
