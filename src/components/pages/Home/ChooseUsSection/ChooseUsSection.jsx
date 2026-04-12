import Image from "next/image";

import banner from "@/assets/pages/Home/banner.png";

const ChooseUsSection = () => {
  return (
    <div className="container">
      <Image
        src={banner}
        alt="AlwaysTakingCare"
        className="w-full h-auto"
        quality={100}
      />
    </div>
  );
};

export default ChooseUsSection;
