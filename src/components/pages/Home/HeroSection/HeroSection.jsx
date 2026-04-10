import { arrowLeftSvg } from "@/components/reuseable/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import airbnbLogo from "@/assets/pages/Home/HeroSection/airbnbLogo.png";
import VLogo from "@/assets/pages/Home/HeroSection/VLogo.png";
import BLogo from "@/assets/pages/Home/HeroSection/BLogo.png";
import owlLogo from "@/assets/pages/Home/HeroSection/owlLogo.png";
import blueBall from "@/assets/pages/Home/HeroSection/blueBall.png";
import greenBall from "@/assets/pages/Home/HeroSection/greenBall.png";
import yallowBall from "@/assets/pages/Home/HeroSection/yallowBall.png";
import redBall from "@/assets/pages/Home/HeroSection/redBall.png";
import aquaBall from "@/assets/pages/Home/HeroSection/aquaBall.png";
import neavyBlueBall from "@/assets/pages/Home/HeroSection/neavyBlueBall.png";

const HeroSection = () => {
  return (
    <div className="hero-section min-h-[484px] xl:min-h-[584px] flex justify-center items-center relative border-b border-[#00000014]">
      <Image
        src={airbnbLogo}
        alt="airbnbLogo"
        className="absolute w-[106px] h-[106px] left-[25%] top-[25%] translate-x-[-50%] translate-y-[-50%]"
      />
      <Image
        src={VLogo}
        alt="VLogo"
        className="absolute w-[75px] h-[75px] left-[25%] bottom-[25%] translate-x-[-50%] translate-y-[50%]"
      />
      <Image
        src={BLogo}
        alt="BLogo"
        className="absolute w-[65px] h-[65px] right-[25%] top-[25%] translate-x-[50%] translate-y-[-50%]"
      />
      <Image
        src={owlLogo}
        alt="VLogo"
        className="absolute w-[89px] h-[89px] right-[25%] bottom-[25%] translate-x-[50%] translate-y-[50%]"
      />

      {/* ball */}

      <Image
        src={blueBall}
        alt="blueBall"
        className="absolute w-[13px] h-[13px] left-[10%] top-[25%] translate-x-[-50%] translate-y-[-50%]"
      />

      <Image
        src={greenBall}
        alt="greenBall"
        className="absolute w-[15px] h-[15px] left-[50%] top-[10%] translate-x-[-50%] translate-y-[50%]"
      />
      <Image
        src={yallowBall}
        alt="yallowBall"
        className="absolute w-[15px] h-[15px] right-[20%] top-[35%] translate-x-[-50%] translate-y-[50%]"
      />

      <Image
        src={redBall}
        alt="redBall"
        className="absolute w-[13px] h-[13px] left-[15%] top-[55%] translate-x-[-50%] translate-y-[-50%]"
      />

      <Image
        src={yallowBall}
        alt="yallowBall"
        className="absolute w-[7px] h-[7px] left-[10%] bottom-[10%] translate-x-[-50%] translate-y-[-50%]"
      />

      <Image
        src={aquaBall}
        alt="aquaBall"
        className="absolute w-[13px] h-[13px] left-[50%] bottom-[10%] translate-x-[-50%] translate-y-[-50%]"
      />

      <Image
        src={neavyBlueBall}
        alt="neavyBlueBall"
        className="absolute w-[7px] h-[7px] right-[10%] bottom-[15%] translate-x-[-50%] translate-y-[-50%]"
      />

      <div className="hero-section-content container p-8 flex flex-col items-center gap-[28px]">
        <div className="z-2">
          <div className="text-center text-[48px] leading-[50px] font-bold">
            Airbnb Assistants For
          </div>
          <div className="text-center text-[38px] leading-[40px] font-medium">
            Property Management
          </div>
        </div>

        <div className="text-center text-[14px] leading-[16px] font-medium max-w-[665px] z-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>

        <div className="bg-primary text-white text-[14px] leading-[16px] font-bold px-[22px] py-[18px] rounded-[5px] cursor-pointer flex items-center gap-[10px] text-nowrap z-2">
          <span>Schedule A Meeting</span>
          {arrowLeftSvg}
        </div>

        <div className="text-[14px] leading-[16px] font-medium underline cursor-pointer z-2">
          See Pricing
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
