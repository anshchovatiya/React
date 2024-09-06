import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";  
import  FilterSideBar  from "../helpers/FilterSideBar";

const ArrivalSection = () => {
  return (
    <div className="pt-[45px] pb-[70px]">
    <div className="flex justify-between">

        <FilterSideBar/>


      <Select className="w-[50px] overflow-hidden">
        <SelectTrigger className="h-[14px] w-[110px] focus:shadow-none focus:ring-white font-medium">
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
  );
};

export default ArrivalSection;
