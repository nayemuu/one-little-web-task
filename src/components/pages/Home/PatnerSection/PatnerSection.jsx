import priceLabsLogo from "@/assets/pages/Home/PatnerSection/PriceLabs.png";
import WheelhouseLogo from "@/assets/pages/Home/PatnerSection/Wheelhouse.png";
import BeyondPricingLogo from "@/assets/pages/Home/PatnerSection/BeyondPricing.png";
import hostfullyLogo from "@/assets/pages/Home/PatnerSection/hostfully.png";
import GuestyLogo from "@/assets/pages/Home/PatnerSection/Guesty.png";
import LodgifyLogo from "@/assets/pages/Home/PatnerSection/Lodgify.png";
import PatnerSectionCard from "./PatnerSectionCard";

const cardList = [
  {
    title: "PriceLabs",
    image: priceLabsLogo,
  },
  {
    title: "Wheelhouse",
    image: WheelhouseLogo,
  },
  {
    title: "BeyondPricing",
    image: BeyondPricingLogo,
  },
];

const cardList2 = [
  {
    title: "hostfully",
    image: hostfullyLogo,
  },
  {
    title: "Guesty",
    image: GuestyLogo,
  },
  {
    title: "Lodgify",
    image: LodgifyLogo,
  },
];

const PatnerSection = () => {
  return (
    <div className="bg-[#F6F6F6] py-[38px] flex flex-col gap-[40px]">
      <div className="container flex justify-center cursor-pointer gap-[56px]">
        {cardList.map((card, index) => (
          <PatnerSectionCard card={card} key={index} />
        ))}
      </div>

      <div className="container flex justify-center cursor-pointer gap-[56px]">
        {cardList2.map((card, index) => (
          <PatnerSectionCard card={card} key={index} />
        ))}
      </div>

      <div className="container flex justify-center cursor-pointer gap-[56px]">
        {cardList2.map((card, index) => (
          <PatnerSectionCard card={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PatnerSection;
