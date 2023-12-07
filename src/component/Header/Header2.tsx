import React from "react";
import { Link } from "react-router-dom";

export default function Header2() {
  const listHeader = [
    "",
    "Formation",
    "Certification",
    "FORUMS",
    "FINANCEMENTS",
    "Elearning",
  ];

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex flex-row">
          {listHeader.map((item) => {
            if (item === "Elearning")
              return (
                <Link
                  to=""
                  key={item}
                  onClick={() => window.open("/e-learning")}
                >
                  <div className="px-4">
                    <p className="text-black font-medium text-2xl capitalize">
                      {item}
                    </p>
                  </div>
                </Link>
              );
            return item === "" || item === "Formation" ? (
              <Link to={`/${item}`} key={item}>
                <div className="px-4">
                  <p className="text-black font-medium text-2xl capitalize">
                    {item === "" ? "Home" : item}
                  </p>
                </div>
              </Link>
            ) : (
              <div key={item}>
                <div className="px-4">
                  <p className="text-black font-medium text-2xl capitalize">
                    {item === "" ? "Home" : item}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
