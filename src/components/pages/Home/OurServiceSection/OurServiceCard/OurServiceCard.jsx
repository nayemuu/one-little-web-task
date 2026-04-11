import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const OurServiceCard = ({ card }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-[35px] border border-[#FAC4D2] pt-[40px] pb-[30px] px-[30px] rounded-[13px] cursor-pointer our-service-section-card",
      )}
    >
      <div>
        <Image
          src={card.image}
          alt={card.title}
          className="h-[84px] w-auto"
          // style={{ height: card.imageHeight, width: card.weightWidth }}
          quality={100}
        />
      </div>
      <div className="flex flex-col gap-[14px]">
        <div className="text-[24px] leading-[26px] font-bold">{card.title}</div>
        <div className="text-[14px] leading-[16px] font-medium">
          {card.description}
        </div>
      </div>

      <div className="flex">
        <div className="border border-primary text-primary text-[14px] leading-[16px] font-medium rounded-[44px] py-2 px-3">
          Read More
        </div>
      </div>
    </div>
  );
};

export default OurServiceCard;
