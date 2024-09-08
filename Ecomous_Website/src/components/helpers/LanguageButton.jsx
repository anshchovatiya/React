import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import currncy1 from "../../assets/svg/currency1.svg";
import currncy2 from "../../assets/svg/currency2.svg";
import currncy3 from "../../assets/svg/currency3.svg";
import currncy4 from "../../assets/svg/currency4.svg";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  return (
    <div className="">
    <Select
      value={selectedCurrency}
      onValueChange={(value) => setSelectedCurrency(value)}
    >
      <SelectTrigger className="h-[14px] w-[200px] focus:shadow-none focus:ring-white text-nowrap max-w-52 border-none">
        <SelectValue placeholder="Select Currency" />
      </SelectTrigger>
      <SelectContent className="z-[999] my-2">
        <SelectGroup>
          <SelectItem value="apple">
            <div className="flex items-center  mr-2">
              <img src={currncy2} alt="" className="w-[30px] h-[15px]" />
              <p className="text-[13px] leading-[15px] font-medium">
                {" "}
                EUR € | France
              </p>
            </div>
          </SelectItem>
          <SelectItem value="banana">
            <div className="flex items-center  mr-2">
              <img src={currncy3} alt="" className="w-[30px] h-[15px]" />
              <p className="text-[13px] leading-[15px] font-medium">
                {" "}
                EUR € | Germany
              </p>
            </div>
          </SelectItem>
          <SelectItem value="USD">
            <div className="flex items-center gap-1 mr-2">
              <img src={currncy1} alt="" className="w-[30px] h-[15px]" />
              <p className="text-[13px] leading-[15px] font-medium">
                {" "}
                USD $ | United States
              </p>
            </div>
          </SelectItem>
          <SelectItem value="grapes">
            <div className="flex items-center  mr-2">
              <img src={currncy4} alt="" className="w-[30px] h-[15px]" />
              <p className="text-[13px] leading-[15px] font-medium">
                {" "}
                VND ₫ | Vietnam
              </p>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  );
};

const LanguageButton = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <Select
      value={selectedLanguage}
      onValueChange={(value) => setSelectedLanguage(value)}
      className="w-[50px] overflow-hidden"
    >
      <SelectTrigger className="h-[14px] w-[110px] focus:shadow-none focus:ring-white font-medium border-none">
        <SelectValue placeholder="Select Currency" />
      </SelectTrigger>
      <SelectContent className="z-[999] my-2">
        <SelectGroup>
          <SelectItem value="English">
            <p>English</p>
          </SelectItem>
          <SelectItem value="العربية">
            <p>العربية</p>
          </SelectItem>
          <SelectItem value="简体中文">
            <p>简体中文</p>
          </SelectItem>
          <SelectItem value="اردو">
            <p>اردو</p>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { CurrencySelector, LanguageButton };
