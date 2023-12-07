import { type } from "os";
import React from "react";

type CardFormationProps = {
  formationName: string;
  lastUpdate: string;
  time: string;
};
export default function CardFormation(data: { data: CardFormationProps }) {
  const { formationName, lastUpdate, time } = data.data;
  return (
    <div className="flex border-2 border-black rounded-[1.4rem] bg-blue-500 w-60 p-2 m-4 h-24 justify-center items-center flex-col">
      <h3 className="text-white text-xl font-medium">{formationName}</h3>
    </div>
  );
}
