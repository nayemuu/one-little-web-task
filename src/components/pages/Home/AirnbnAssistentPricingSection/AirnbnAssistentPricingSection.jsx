import ReuseableTitle from "@/components/reuseable/ReuseableTitle/ReuseableTitle";
import switchLogo from "@/assets/pages/Home/AirnbnAssistentPricingSection/switch.png";
import saveLogo from "@/assets/pages/Home/AirnbnAssistentPricingSection/save.png";
import Image from "next/image";
import PricingCard from "./PricingCard";

const cardList = [
  {
    title: "Freebie",
    description:
      "Ideal for individuals who need quick access to basic features.",
    price: 0,
    serviceDuration: "Month",
    services: [
      {
        title: "20,000+ of PNG & SVG graphics",
        availability: true,
      },
      {
        title: "Access to 100 million stock images",
        availability: true,
      },
      {
        title: "Upload custom icons and fonts",
        availability: false,
      },
      {
        title: "Unlimited Sharing",
        availability: false,
      },
      {
        title: "Upload graphics & video in up to 4k",
        availability: false,
      },
      {
        title: "Unlimited Projects",
        availability: false,
      },
      {
        title: "Instant Access to our design system",
        availability: false,
      },
      {
        title: "Create teams to collaborate on designs",
        availability: false,
      },
    ],
  },
  {
    title: "Professional",
    description:
      "Ideal for individuals who need quick access to basic features.",
    price: 25,
    serviceDuration: "Month",
    services: [
      {
        title: "20,000+ of PNG & SVG graphics",
        availability: true,
      },
      {
        title: "Access to 100 million stock images",
        availability: true,
      },
      {
        title: "Upload custom icons and fonts",
        availability: false,
      },
      {
        title: "Unlimited Sharing",
        availability: false,
      },
      {
        title: "Upload graphics & video in up to 4k",
        availability: false,
      },
      {
        title: "Unlimited Projects",
        availability: false,
      },
      {
        title: "Instant Access to our design system",
        availability: false,
      },
      {
        title: "Create teams to collaborate on designs",
        availability: false,
      },
    ],
  },
  {
    title: "Enterprise",
    description:
      "Ideal for individuals who need quick access to basic features.",
    price: 100,
    serviceDuration: "Month",
    services: [
      {
        title: "20,000+ of PNG & SVG graphics",
        availability: true,
      },
      {
        title: "Access to 100 million stock images",
        availability: true,
      },
      {
        title: "Upload custom icons and fonts",
        availability: false,
      },
      {
        title: "Unlimited Sharing",
        availability: false,
      },
      {
        title: "Upload graphics & video in up to 4k",
        availability: false,
      },
      {
        title: "Unlimited Projects",
        availability: false,
      },
      {
        title: "Instant Access to our design system",
        availability: false,
      },
      {
        title: "Create teams to collaborate on designs",
        availability: false,
      },
    ],
  },
];

const AirnbnAssistentPricingSection = () => {
  return (
    <div>
      <div className="container flex flex-col gap-[38px] py-[50px]">
        <div className="flex flex-col gap-[16px]">
          <ReuseableTitle>
            Airnbn Assistent <span className="text-primary">pricing</span>
          </ReuseableTitle>
          <div className="text-[20px] leading-[22px] text-center">
            Choose a plan that’s right for you
          </div>

          <div className="flex justify-center">
            <div className="flex gap-[24px] relative text-[16px] leading-[18px] relative">
              <span>Pay Monthly</span>
              <Image
                src={switchLogo}
                className="h-[24px] w-auto"
                alt="switchLogo"
              />
              <span>Pay Yearly</span>

              <div
                className="absolute right-0"
                style={{ translate: "110% -34%" }}
              >
                <Image
                  src={saveLogo}
                  alt="saveLogo"
                  className="h-[87px] w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-3 gap-[24px]">
        {cardList.map((card, index) => (
          <PricingCard card={card} key={index} />
        ))}
      </div>

      <div className="container flex flex-col gap-[24px] py-[84px]">
        <ReuseableTitle className="">
          Our<span className="text-primary">Tools</span>
        </ReuseableTitle>

        <div className="flex justify-center">
          <div className="text-[14px] leading-[16px] font-medium max-w-[738px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirnbnAssistentPricingSection;
