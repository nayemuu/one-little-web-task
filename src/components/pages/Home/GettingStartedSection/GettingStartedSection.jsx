import ReuseableTitle from "@/components/reuseable/ReuseableTitle/ReuseableTitle";
import GettingStartedCard from "./GettingStartedCard";

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

      <div>
        <GettingStartedCard />
      </div>
    </div>
  );
};

export default GettingStartedSection;
