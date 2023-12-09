import React from "react";
import avatar from "../../assets/avatar.png";

type CardProps = {
  name: string;
  formation: string;
  text: string;
};

export default function (data: CardProps) {
  const { name, formation, text } = data;
  return (
    <div>
      <div className="flex">
        <img src={avatar} alt="" className="w-20 h-20 rounded-full" />
        <div className="row-span-1">
          <h3 className="text-2xl font-semibold p-1"> {name} </h3>
          <h4> {formation} </h4>
        </div>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}
