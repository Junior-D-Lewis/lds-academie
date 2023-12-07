import React from "react";
import avatar from "../../assets/avatar.png";
import ChatBox from "./ChatBox";

export default function index() {
  return (
    <div className="grid grid-cols-4 p-6 gap-5">
      <div className="border-2 h-screen grid-rows-2 p-6"></div>
      <div className="col-span-2 h-72">
        <video width="100%" height="100%" autoPlay controls>
          <source src="https://www.youtube.com/watch?v=NT0s0aOHu0Q" />
        </video>
      </div>
      <div className="h-screen grid-rows-2 p-6">
        <img className="w-[30rem] h-[25rem]" src={avatar} alt="" />
        <div className="border-2 mt-12 h-44">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}
