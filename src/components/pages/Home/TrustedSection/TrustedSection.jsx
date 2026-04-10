import React from "react";
import airbnbLogo from "@/assets/pages/Home/TrustedSection/airbnbLogo.svg";
import bookingLogo from "@/assets/pages/Home/TrustedSection/bookingLogo.svg";
import vrboLogo from "@/assets/pages/Home/TrustedSection/vrboLogo.svg";
import tripAdvisorLogo from "@/assets/pages/Home/TrustedSection/tripAdvisorLogo.svg";
import agodaLogo from "@/assets/pages/Home/TrustedSection/agodaLogo.svg";
import expediaLogo from "@/assets/pages/Home/TrustedSection/expediaLogo.svg";
import homeToGoLogo from "@/assets/pages/Home/TrustedSection/homeToGoLogo.svg";
import Image from "next/image";

const trustedPartners = [
  {
    title: "airbnb",
    logo: airbnbLogo,
  },
  {
    title: "booking",
    logo: bookingLogo,
  },
  {
    title: "vrbo",
    logo: vrboLogo,
  },
  {
    title: "tripAdvisor",
    logo: tripAdvisorLogo,
  },
  {
    title: "agoda",
    logo: agodaLogo,
  },
  {
    title: "expedia",
    logo: expediaLogo,
  },
  {
    title: "home to go",
    logo: homeToGoLogo,
  },
];

const TrustedSection = () => {
  return (
    <div>
      <p className="text-center text-[20px] leading-[22px] font-semibold py-[30px]">
        Trusted by leaders in 50+ industries
      </p>

      <div className="flex gap-5 justify-between bg-[#F6F6F6] py-[23px] container">
        {trustedPartners.map((patnar) => (
          <Image src={patnar.logo} alt={patnar.title} />
        ))}
      </div>
    </div>
  );
};

export default TrustedSection;
