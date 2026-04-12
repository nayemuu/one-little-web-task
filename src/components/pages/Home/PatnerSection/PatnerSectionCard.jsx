import Image from "next/image";
import React from "react";

const PatnerSectionCard = ({ card }) => {
  return (
    <div className="flex justify-center items-center bg-white max-w-[290px] max-h-[139px] patner-section-card">
      <Image
        src={card.image}
        alt={card.title}
        className="px-[40px] py-[56px]"
        quality={100}
      />
    </div>
  );
};

export default PatnerSectionCard;
