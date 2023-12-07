import React from "react";
import mricrosoft from "../assets/microsoft.png";
import aws from "../assets/aws.png";
import cisco from "../assets/cisco.png";
import redhat from "../assets/redhat.png";
import qualiopi from "../assets/qualiopi.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="justify-center items-center grid grid-rows-2 h-[9rem] p-4">
      <h2 className="text-xl font-medium mb-6 mx-72">
        NOS LABELS ET PARTENAIRES
      </h2>
      <div className="inline-flex">
        <img src={redhat} className="h-20 w-40" />
        <img src={mricrosoft} className="h-20 w-40" />
        <img src={cisco} className="h-20 w-40" />
        <img src={aws} className="h-20 w-40" />
        <img src={qualiopi} className="h-20 w-40" />
      </div>
    </div>
  );
}
