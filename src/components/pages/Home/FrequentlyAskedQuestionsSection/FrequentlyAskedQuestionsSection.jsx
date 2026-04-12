import ReuseableTitle from "@/components/reuseable/ReuseableTitle/ReuseableTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "Is there a free trial available?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    value: "item-2",
    trigger: "Can I change my plan later?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    value: "item-3",
    trigger: "What is your cancellation policy?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    value: "item-4",
    trigger: "Can other info be added to an invoice?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    value: "item-5",
    trigger: "How does billing work?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    value: "item-6",
    trigger: "How do I change my account email?",
    content:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

import frequentlyAskedQuestionsSectionLogo from "@/assets/pages/Home/FrequentlyAskedQuestionsSection/frequentlyAskedQuestionsSectionLogo.png";
import Image from "next/image";

const FrequentlyAskedQuestionsSection = () => {
  return (
    <div className="flex flex-col gap-5 mb-[70px]">
      {/* Top Section */}
      <div className="container bg-[#F9FAFB]">
        <div className="flex flex-col gap-5 py-[50px]">
          <ReuseableTitle className="">
            Frequently asked <span className="text-primary">questions</span>
          </ReuseableTitle>

          <div className="text-center text-[20px] leading-[22px]">
            Everything you need to know about the product and billing.
          </div>
        </div>

        <div>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {items.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-[#BF214A47] py-3"
              >
                <AccordionTrigger className="text-[18px] leading-[20px] font-bold">
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent className="text-[16px] leading-[18px] text-[#606060]">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container bg-[#F9FAFB] py-[32px] flex flex-col gap-[32px]">
        <div className="flex justify-center">
          <Image
            src={frequentlyAskedQuestionsSectionLogo}
            alt="frequentlyAskedQuestionsSectionLogo"
            className="h-[56px] w-auto"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-center text-[20px] leading-[22px] font-bold">
            Still have Questions?
          </div>

          <div className="text-center text-[18px] leading-[20px] font-bold text-[#9C9C9C]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-primary text-white text-[16px] leading-[20px] font-medium px-[18px] py-[10px] rounded-[5px] cursor-pointer flex items-center gap-[10px] text-nowrap z-2">
            <span>Get in touch</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestionsSection;
