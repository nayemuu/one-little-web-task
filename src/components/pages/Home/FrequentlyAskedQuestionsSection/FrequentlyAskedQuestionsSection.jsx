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
      <div className="container bg-[#F9FAFB] py-[32px]">
        <div className="flex flex-col gap-2">
          <div className="text-center text-[20px] leading-[22px] font-bold">
            Still have Questions?
          </div>

          <div className="text-center text-[18px] leading-[20px] font-bold text-[#9C9C9C]">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestionsSection;
