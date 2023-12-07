import React from "react";
import infomatique from "../../assets/info-1.png";
import { datas } from "./data";
import CardFormation from "./CardFormation";

export default function index() {
  return (
    <div className="grid grid-flow-row mt-[10rem]">
      <div className="flex justify-center items-center">
        <img src={infomatique} className="h-[28rem] w-full absolute" />
        <h1 className="relative text-white text-7xl mt-20">INFORMATIQUE</h1>
      </div>

      <div className="grid grid-flow-col gap-4 mt-[12rem] p-4">
        <div className="grid grid-rows-3 text-2xl font-medium mt-[1.8rem] ">
          <h2>Filières</h2>
          <h2>Domaines</h2>
          <h2>Format d'apprentissage</h2>
        </div>

        <div className="grid gap-4 grid-cols-3 col-span-2">
          {datas.map((data) => (
            <div onClick={() => window.open("/training")}>
              <CardFormation data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
