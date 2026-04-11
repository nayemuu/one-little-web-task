import ReuseableTitle from "@/components/reuseable/ReuseableTitle/ReuseableTitle";
import switchLogo from "@/assets/pages/Home/AirnbnAssistentPricingSection/switch.png";
import saveLogo from "@/assets/pages/Home/AirnbnAssistentPricingSection/save.png";
import Image from "next/image";

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
    </div>
  );
};

export default AirnbnAssistentPricingSection;
