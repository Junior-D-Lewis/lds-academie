import React from "react";

import qualiopi from "../assets/qualiopi.png";
import aws from "../assets/aws.png";
import cisco from "../assets/cisco.png";
import redhat from "../assets/redhat.png";
import microsoft from "../assets/microsoft.png";

interface TrainingProps {
  id: string;
  duration: string;
  version: string;
  title: string;
  cost: number;
}

const Training: React.FC<TrainingProps> = ({
  id,
  duration,
  version,
  title,
  cost,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="w-full flex">
          <div className="w-2/3">
            <span className="font-bold text-lg">{title}</span>
          </div>
          <div className="w-1/3">
            <div className="flex flex-col text-right">
              <span className="font-bold">
                COÛT DE LA FORMATION <br />
                (hors TVA) {cost}$
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="">ID de référence : {id}</span>
          <span className="">Durée : {duration}</span>
          <span className="">Version : {version}</span>
        </div>
        
        <div className="flex justify-around">
          <div className="flex flex-col gap-2">
            <span className="text-center">Modalité pédagogique</span>
            <input
              className="rounded border font-semibold focus:outline-blue-500"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-center">Plan de financement</span>
            <textarea className="h-[1.5rem] rounded border font-semibold focus:outline-blue-500" />
          </div>
        </div>
        
        <div className="">
          <table className="w-full table-auto">
            <thead className="bg-gray-300">
              <tr>
                <th>Resume</th>
                <th>Prochaines dates </th>
                <th>Public</th>
                <th>Objectifs</th>
                <th>Programme détaillé</th>
                <th>Pré-requis</th>
                <th>Bon à savoir</th>
              </tr>
            </thead>
          </table>
        </div>
        
        <footer className="absolute bottom-0 flex w-full">
          <div className="flex flex-col gap-2 w-[12rem] m-auto mr-0">
            <span className="text-center">NOS LABELS ET PARTENAIRES</span>
            <div className="flex">
              <img className="w-1/2" src={qualiopi} alt="Qualiopi" />
              <img className="w-1/2" src={aws} alt="AWS" />
            </div>
            <div className="flex flex-col"></div>
            <img className="w-1/2" src={cisco} alt="CISCO" />
            <img className="w-1/2" src={microsoft} alt="MICROSOFT" />
            <img className="w-1/2" src={redhat} alt="REDHAT" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Training;
