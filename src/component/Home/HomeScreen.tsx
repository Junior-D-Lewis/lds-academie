import React from "react";
// import { Carousel, initTE } from "tw-elements";

import info1 from "../../assets/info-1.png";
import info2 from "../../assets/info-2.png";
import reseau from "../../assets/reseaux.png";
import telecom from "../../assets/telecom.png";
import ia from "../../assets/ia.png";
// initTE({ Carousel });

export default function HomeScreen() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <img src={info1} className="block h-[28rem] w-full" alt="" />
        </div>
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <img src={info2} className="block h-[28rem] w-full" alt="" />
        </div>
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <img src={ia} className="block h-[28rem] w-full" alt="" />
        </div>
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <img src={reseau} className="block h-[28rem] w-full" alt="" />
        </div>
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <img src={telecom} className="block h-[28rem] w-full" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-4 p-6 gap-5">
        <div className="h-72 grid-rows-2 p-6">
          <h2 className="ml-[5rem]">ACTUALITES</h2>
          <div className="border-2 h-44"></div>
        </div>
        <div className="col-span-2 h-72"></div>
        <div className="h-72 grid-rows-2 p-6">
          <h2 className="ml-[5rem]">FORUMS: A la une</h2>
          <div className="border-2 h-44"></div>
        </div>
      </div>
    </div>
  );
}
