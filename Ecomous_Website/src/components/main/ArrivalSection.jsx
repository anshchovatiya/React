import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import React from "react";
import { IoFilter } from "react-icons/io5";

const ArrivalSection = () => {
  return (
    <div className="pt-[45px] pb-[70px]">
    <div className="flex justify-between">
      {/* Edit Section */}
      <div className="flex items-center md:py-[8px] gap-2 md:px-[12px] lg:py-[10px]">
        <span>
          <IoFilter />
        </span>
        <p className="font-semibold text-[12px]">FILTER</p>
      </div>
      <div></div>

      <Select className="w-[50px] overflow-hidden">
        <SelectTrigger className="h-[14px] w-[110px] focus:shadow-none focus:ring-white font-medium">
          <SelectValue placeholder="Sort" />
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
    </div>
    </div>
  );
};

export default ArrivalSection;
