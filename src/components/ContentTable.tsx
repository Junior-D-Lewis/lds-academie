import React from "react";

const ContentTable = () => {
  return (
    <>
      <div className="h-[40rem] gap-x-2 absolute bottom-0 w-full flex">
        <div className="h-full border flex flex-col items-center justify-center w-1/4">
          <span className="text-center">Table des matières</span>
        </div>
        <div className="flex gap-y-2 flex-col w-1/2">
          <div className="flex h-1/2 border bg-orange-300 justify-center items-center">
            <span className="text-center">COURS EN VIDEO</span>
          </div>
          <div className="flex h-1/2 border justify-center items-center">
            <span className="text-center">COURS EN FORMAT TEXTE DEFILANT</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-1/4">
          <div className="bg-blue-200 flex justify-center items-center h-1/2 border relative">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="currentColor"
              className="h-[80%] w-[80%]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width={0.5}
              stroke="currentColor"
              className="text-white rounded-[50%] bg-slate-600 opacity-[85%] w-[35%] h-[35%] z-10 absolute"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
              />
            </svg>
          </div>
          <div className="h-1/2 flex border items-center justify-center">
            Chat box
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentTable;
