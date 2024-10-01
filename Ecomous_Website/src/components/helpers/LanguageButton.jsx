import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Fragment, useState } from "react";
import {
  CurrencySelectorOptions,
  LanguageSelectorOptions,
} from "../../data/constants";

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(
    "USD $ | United States"
  );

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
            {CurrencySelectorOptions.map((currentCurrency) => {
              return (
                <Fragment key={currentCurrency.language}>
                  <SelectItem value={currentCurrency.language}>
                    <div className="flex items-center  mr-2">
                      <img
                        src={currentCurrency.image}
                        alt={currentCurrency.altText}
                        className="w-[30px] h-[15px]"
                      />
                      <p className="text-[13px] leading-[15px] font-medium">
                        {currentCurrency.language}
                      </p>
                    </div>
                  </SelectItem>
                </Fragment>
              );
            })}
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
          {LanguageSelectorOptions.map((currentLanguage) => {
            return (
              <Fragment key={currentLanguage}>
                <SelectItem value={currentLanguage}>
                  <p>{currentLanguage}</p>
                </SelectItem>
              </Fragment>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { CurrencySelector, LanguageButton };
