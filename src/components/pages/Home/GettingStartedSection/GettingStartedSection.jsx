import ReuseableTitle from "@/components/reuseable/ReuseableTitle/ReuseableTitle";
import GettingStartedCard from "./GettingStartedCard";
import userLogo from "@/assets/pages/Home/GettingStartedSection/user.png";
import usersLogo from "@/assets/pages/Home/GettingStartedSection/users.png";
import headPhoneLogo from "@/assets/pages/Home/GettingStartedSection/headPhone.png";

const cardList = [
  {
    SerialNumber: 1,
    image: userLogo,
    title: "Add requirements & sign up today",
    width: "72.17px",
    height: "58px",
  },
  {
    SerialNumber: 2,
    image: usersLogo,
    title: "Connect with your CSM & onboarding team",
    width: "108.57px",
    height: "123.74px",
  },
  {
    SerialNumber: 3,
    image: headPhoneLogo,
    title: "Meet your STR Assistant next week",
    width: "69.85px",
    height: "58px",
    svgLogo: (
      <svg
        width={73}
        height={61}
        viewBox="0 0 73 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5836 58.6237V33.9117C17.5836 33.9117 1.42572 31.5355 1.42572 45.7925C1.42572 60.0494 17.5836 58.6237 17.5836 58.6237Z"
          stroke="#ED3C6A"
          strokeWidth={2.85139}
        />
        <path
          d="M55.1266 33.6151L55.1266 58.3271C55.1266 58.3271 71.2845 60.7032 71.2845 46.4463C71.2845 32.1894 55.1266 33.6151 55.1266 33.6151Z"
          stroke="#ED3C6A"
          strokeWidth={2.85139}
        />
        <path
          d="M10.455 29.9615C10.455 29.9615 8.07882 2.39806 35.167 1.4476C62.2552 0.49714 61.3047 30.9119 61.3047 30.9119M42.2954 59.4258H51.8"
          stroke="#300C15"
          strokeWidth={2.85139}
        />
        <g clipPath="url(#clip0_0_1)">
          <path
            d="M46.2436 30.4358V33.9158H37.4236V43.4258H34.0636V33.9158H25.2436V30.4358H34.0636V22.4258H37.4236V30.4358H46.2436Z"
            fill="#ED3C6A"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_1">
            <rect
              width={21}
              height={21}
              fill="white"
              transform="translate(25.2436 22.4258)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

const GettingStartedSection = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-[22px] pt-[60px] pb-[40px]">
        <ReuseableTitle className="">
          Getting Started is <span className="text-primary">Easy</span>
        </ReuseableTitle>

        <div className="flex justify-center">
          <div className="text-[14px] leading-[16px] font-medium text-center max-w-[738px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex justify-center gap-[38px] pt-[40px] pb-[80px]">
          {cardList.map((card, index) => (
            <GettingStartedCard card={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GettingStartedSection;
