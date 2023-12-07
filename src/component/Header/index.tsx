import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";

export default function index() {
  return (
    <div className="flex flex-row">
      <div className="p-4">
        <img src={logo} className="h-20 w-40" />
        <p>Batissez votre avenir,</p>
        <p>enrichissez votre présent.</p>
      </div>
    </div>
  );
}
