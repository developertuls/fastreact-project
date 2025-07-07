
import { useEffect, useState } from "react";
import img2 from "../assets/car2.png"; 

export const Slider = () => {
  const slide = {
    img: img2,
    text: " Drive the Dream,Live     theLuxury",
  };

  return (
    <div className="bg-[#0c0e12] mt-20 flex flex-col md:flex-row items-center justify-center gap-4 px-4 py-6 w-full ">
      {/* Box 1 */}
      <div className="bg-[#181b23] text-white overflow-hidden w-full md:w-[160px] h-[200px] shadow rounded p-4 text-center order-2 md:order-1 flex-shrink-0">
        <h4 className="font-semibold text-[#d4dee4]">Power Reserve</h4>
        <div className="animate-pulse mt-4 mx-auto w-[80px] h-[80px] bg-[#32ff7e] rounded-full flex items-center justify-center">
          <div className="w-[78px] h-[78px] bg-[#181b23] rounded-full flex flex-col items-center justify-center text-[13px] font-bold">
            180 <br />
            <span className="text-xs">km/h</span>
          </div>
        </div>
        <h2 className="text-[14px] mt-4 text-[#d4dee4]">UNINTERRUPTED</h2>
      </div>

      {/* Slider */}
 <div className="relative w-full md:w-[600px] md:h-[70vh] overflow-hidden rounded-full bg-black order-1 md:order-2 flex items-center justify-center">
  <img
    src={slide.img}
    alt="Rotating Car"
    className="w-[180px] h-[180px] object-contain rounded-full animate-rotate-car"
  />
  <div className="absolute  animate-bounce  mb-[-139px] left-20 text-[#d4dee4] text-sm md:text-[26px] font-bold  px-3 py-1 rounded shadow ">
    {slide.text}
  </div>
</div>



      {/* Box 2 */}
      <div className="w-full md:w-[160px] h-[200px] bg-[#0c0e12] shadow rounded p-2 text-center order-3 flex-shrink-0 text-[#d4dee4] overflow-hidden">
        <p className="text-left text-[12px]">Loremipsum,olor sit amet consecteturadipisicingelitl placeataperiam voluptates magnicuiklgrtw</p>
      </div>
    </div>
  );
};
