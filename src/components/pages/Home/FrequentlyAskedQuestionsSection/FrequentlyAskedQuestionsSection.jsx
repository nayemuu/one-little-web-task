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
    <div className="container">
      <p>w</p>
      <div>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full"
        >
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
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
  );
};

export default FrequentlyAskedQuestionsSection;
