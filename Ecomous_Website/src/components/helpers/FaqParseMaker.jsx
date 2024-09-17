import * as Accordion from "@radix-ui/react-accordion";
import { IoIosArrowDown } from "react-icons/io";

 export default function FaqParseMaker({ information }) {
  return (
    <div className="mb-[40px] md:mb-[60px]">
      <h4 className="text-[18px] md:text-[28px] mb-[10px] md:mb-[28px] ">
        {information.tittle}
      </h4>
      <Accordion.Root className="AccordionRoot" type="single" collapsible>
        {information?.faqPairs.map((CurrentFaq, index) => {
          return (
            <Accordion.Item
              className="AccordionItem mt-[30px] mb-[15px] border-b pb-2.5"
              value={`item-${index + 1}`}
            >
              <Accordion.AccordionHeader>
                <Accordion.AccordionTrigger className="TriggerFaq font-medium flex justify-between gap-2 w-full hover:text-[crimson]">
                  <span className="text-[14px] text-left lg:text-[16px] ">
                    {CurrentFaq?.question}
                  </span>
                  <IoIosArrowDown className="text-[19px]" />
                </Accordion.AccordionTrigger>
              </Accordion.AccordionHeader>
              <Accordion.AccordionContent className="AccordionContent">
                <div className="py-5 lg:py-6 text-[14px]">
                  {CurrentFaq?.answer}
                </div>
              </Accordion.AccordionContent>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}
