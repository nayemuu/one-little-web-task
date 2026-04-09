import React from "react";
import FooterTopSection from "./FooterTopSection/FooterTopSection";
import FooterBottomSection from "./FooterBottomSection/FooterBottomSection";

const Footer = () => {
  return (
    <div className="border-t border-[#D6D6D6]">
      <FooterTopSection />
      <FooterBottomSection />
    </div>
  );
};

export default Footer;
