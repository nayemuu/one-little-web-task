import ReuseableTitle from "@/components/reuseable/ReuseableTitle/ReuseableTitle";
import managePropertyListingsLogo from "@/assets/pages/Home/OurServiceSection/managePropertyListingsLogo.png";
import manageCustomerBookingsLogo from "@/assets/pages/Home/OurServiceSection/manageCustomerBookingsLogo.png";
import scheduleHouseCleaningLogo from "@/assets/pages/Home/OurServiceSection/scheduleHouseCleaningLogo.png";
import monitorGuestReviewsLogo from "@/assets/pages/Home/OurServiceSection/monitorGuestReviewsLogo.png";
import trackReportExpensesLogo from "@/assets/pages/Home/OurServiceSection/trackReportExpensesLogo.png";
import guestInquirySupportLogo from "@/assets/pages/Home/OurServiceSection/guestInquirySupportLogo.png";

import OurServiceCard from "./OurServiceCard/OurServiceCard";

const cardList = [
  {
    image: managePropertyListingsLogo,
    imageHeight: "84px",
    weightWidth: "84px",
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    image: manageCustomerBookingsLogo,
    imageHeight: "98px",
    weightWidth: "97px",
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    image: scheduleHouseCleaningLogo,
    imageHeight: "98px",
    weightWidth: "97px",
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    image: monitorGuestReviewsLogo,
    imageHeight: "98px",
    weightWidth: "97px",
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    image: trackReportExpensesLogo,
    imageHeight: "98px",
    weightWidth: "97px",
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    image: guestInquirySupportLogo,
    imageHeight: "98px",
    weightWidth: "97px",
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

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

      <div className="mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {cardList.map((card, index) => (
          <OurServiceCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default OurServiceSection;
