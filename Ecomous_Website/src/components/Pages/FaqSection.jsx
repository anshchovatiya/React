import React from "react";
import PageHeader from "../helpers/PageHeader";
import * as Accordion from "@radix-ui/react-accordion";
import { IoIosArrowDown } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

let FAQ = [
  {
    tittle: "Shopping Information",
    faqPairs: [
      {
        question: "Pellentesque habitant morbi tristique senectus et netus?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "How much is shipping and how long will it take?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
      },
      {
        question: "How long will it take to get my package?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
      },
      {
        question: "Branding is simply a more efficient way to sell things?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
      },
    ],
  },
  {
    tittle: "Payment Information",
    faqPairs: [
      {
        question: "Pellentesque habitant morbi tristique senectus et netus?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "How much is shipping and how long will it take?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "How long will it take to get my package?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "Branding is simply a more efficient way to sell things?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  },
  {
    tittle: "Order Returns",
    faqPairs: [
      {
        question: "Pellentesque habitant morbi tristique senectus et netus?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "How much is shipping and how long will it take?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "How long will it take to get my package?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        question: "Branding is simply a more efficient way to sell things?",
        answer:
          "The perfect way to enjoy brewing tea on low hanging fruit to identify. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. For me, the most important part of improving at photography has been sharing it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
  },
];

function FaqBox({ information }) {
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

const FaqSection = () => {
  return (
    <div>
      <PageHeader tittle={"FAQ 01"} />
      <div className="lg:flex justify-between items-start max-w-[1500px] px-[18px] lg:px-12 m-auto pt-[35px] pb-[22px] md:pt-[68px] lg:pt-[80px] ">
        <div className="lg:w-[58%]">
          {FAQ.map((currentSection) => {
            return <FaqBox information={currentSection} />;
          })}
        </div>
        <div className="lg:w-[33%]  bg-[rgb(242,242,242)] p-[30px_31px_55px_35px]">
          <h4 className="text-[18px] md:text-[28px] mb-[10px] md:mb-[28px] font-medium">
            Have a question
          </h4>
          <p className="text-[14px] mb-[20px]">
            If you have an issue or question that requires immediate assistance,
            you can click the button below to chat live with a Customer Service
            representative.
          </p>
          <p className="text-[14px] mb-[20px]">
            Please allow 06 - 12 business days from the time your package
            arrives back to us for a refund to be issued.
          </p>
          <div className="flex gap-5 items-center">
            <button className="py-2 px-5 rounded-sm text-[14px] md:py-3 bg-black text-white md:px-6">
              Contact Us
            </button>
            <div className="flex items-center  gap-2 border-b border-black hover:text-[crimson] hover:border-[crimson]">
              <a
                href="#"
                className="text-[14px] font-medium"
              >
                Live chat
              </a>
              <GoArrowUpRight/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
