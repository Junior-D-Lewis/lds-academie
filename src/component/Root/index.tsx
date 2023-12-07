import React from "react";
import Partenaires from "../Partenaires";
import Header from "../Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../../Routes";
import Header2 from "../Header/Header2";

export default function index() {
  return (
    <div>
      <BrowserRouter>
        <Header2 />
        <Routes>
          {routes.map((route) => {
            return <Route path={route.path} Component={route.component} />;
          })}
        </Routes>
      </BrowserRouter>
      <Partenaires />
    </div>
  );
}
