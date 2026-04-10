import ReuseableTitle from "@/components/reuseable/ReuseableTitle/ReuseableTitle";
import React from "react";

const OurServiceSection = () => {
  return (
    <div className="container">
      <div className="py-[50px] flex flex-col gap-[14px] flex flex-col items-center">
        <ReuseableTitle className="">
          Our <span className="text-primary">Service</span>
        </ReuseableTitle>
        <p className="text-center max-w-[738px] text-[14px] leading-[16px] font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default OurServiceSection;
