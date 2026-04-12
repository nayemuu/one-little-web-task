import Image from "next/image";
import React from "react";

const GettingStartedCard = ({ card }) => {
  return (
    <div className="max-w-[285px]">
      <div className="border border-[#FDEBF0] w-full h-[192px] relative">
        <div className="text-[30px] leading-[32px] rounded-full border-[5px] border-primary aspect-square w-[76px] flex justify-center items-center translate-y-[-50%] absolute top-0 left-0 translate-x-[-30%]">
          {card.SerialNumber}
        </div>

        <div className="h-full flex justify-center items-center">
          {card.svgLogo ? (
            card.svgLogo
          ) : (
            <Image
              src={card.image}
              alt={card.title}
              style={{ height: card.height, width: card.width }}
              quality={100}
            />
          )}
        </div>
      </div>

      <div className="text-[20px] leading-[22px] text-center font-semibold mt-[30px] px-3">
        {card.title}
      </div>
    </div>
  );
};

export default GettingStartedCard;
