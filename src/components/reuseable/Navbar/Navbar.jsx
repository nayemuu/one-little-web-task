import React from "react";
import NavItem from "./NavItem";

const navigationLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "",
  },
  {
    title: "Services",
    link: "",
  },
  {
    title: "Pricing",
    link: "",
  },
  {
    title: "Blog",
    link: "",
  },
  {
    title: "Resources",
    link: "",
  },
];

import logo from "@/assets/components/Navbar/logo.png";
import Image from "next/image";

export const arrowLeftSvg = (
  <svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.59269 5.59269H7.21304L4.32071 8.48502C4.08956 8.71617 4.08956 9.09549 4.32071 9.32664C4.55186 9.55779 4.92525 9.55779 5.1564 9.32664L9.06223 5.42081C9.29338 5.18966 9.29338 4.81627 9.06223 4.58512L5.16233 0.673362C4.93118 0.442213 4.55779 0.442213 4.32664 0.673362C4.09549 0.904511 4.09549 1.27791 4.32664 1.50906L7.21304 4.40731H0.59269C0.266711 4.40731 0 4.67402 0 5C0 5.32598 0.266711 5.59269 0.59269 5.59269Z"
      fill="white"
    />
  </svg>
);

const Navbar = () => {
  return (
    <div className="bg-white navbar">
      <div className="container flex justify-between items-center gap-5 min-h-[89px]">
        <Image
          src={logo}
          alt="logo"
          className="h-[45px] w-auto"
          quality={100}
        />

        <div className="flex gap-[25px]">
          {navigationLinks.map((item, index) => (
            <NavItem key={index} item={item}>
              {item.title}
            </NavItem>
          ))}
        </div>
        <div className="bg-primary text-white text-[14px] leading-[16px] font-bold px-[22px] py-[18px] rounded-[5px] cursor-pointer flex items-center gap-[10px] text-nowrap">
          <span>Schedule A Meeting</span>
          {arrowLeftSvg}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
