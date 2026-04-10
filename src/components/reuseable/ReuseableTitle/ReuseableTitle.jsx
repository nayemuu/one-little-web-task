import React from "react";

const ReuseableTitle = ({ children, className }) => {
  return (
    <div
      className={`text-[32px] leading-[34px] font-bold text-center ${className}`}
    >
      {children}
    </div>
  );
};

export default ReuseableTitle;
