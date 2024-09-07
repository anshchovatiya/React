import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import FilterSideBar from "../helpers/FilterSideBar";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";



const ArrivalSection = () => {
  return (
    <div className="pt-[45px] pb-[70px]">
      <div className="flex justify-between items-center">

        <FilterSideBar />
        <div className="flex gap-[2vw]">
          <div className="grid gap-[3px] grid-cols-2">
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
          </div>
          <div className="grid gap-[3px] grid-cols-3">
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
          </div>
          <div className="grid gap-[3px] grid-cols-4">
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
          </div>
          <div className="grid gap-[3px] grid-cols-5">
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
          </div>
          <div className="grid gap-[3px] grid-cols-6">
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
            <RiCheckboxBlankCircleLine  className="text-[6px] rounded-full bg-gray-600"/>
          </div>
        </div>
        <div>
          <Select className=" overflow-hidden">
            <SelectTrigger className=" focus:shadow-none focus:ring-white font-medium">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent className="z-[999] my-2" side="right">
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
    </div>
  );
};

export default ArrivalSection;
