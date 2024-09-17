import FilterSideBar from "../helpers/FilterSideBar";
import { FaCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";
import ProductDisplayCard from "../helpers/ProductDisplayCard";
import img1 from "../../assets/images/black-1.jpg";
import img2 from "../../assets/images/orange-1.jpg";
import img3 from "../../assets/images/white-1.jpg";

let Product1 = {
  id: 1,
  tittle: "Ribbed Tank Top",
  price: "16.35",
  colorWithImage: [
    { color: "#ffa500", image: img2 },
    { color: "#000000", image: img1 },
    { color: "#ffffff", image: img3 },
  ],
  sizes: ["S", "M", "L", "XL"],
};

// generate grid dots
function GridDots({ dots, isActive }) {
  let Output = []; // Correctly defining Output
  for (let cur = 0; cur < dots; cur++) {
    Output.push(
      <FaCircle
        key={cur}
        className={`text-[6px] rounded-full ${
          isActive ? "text-black" : "text-gray-400"
        }`}
      />
    );
  }
  return <>{Output}</>;
}

function FilterSelect() {
  let [CurrentAlgorithm, setCurrentAlgorithm] = useState("Featured");

  return (
    <Select
      className="overflow-hidden"
      value={CurrentAlgorithm}
      onValueChange={(value) => setCurrentAlgorithm(value)}
    >
      <SelectTrigger className="w-[150px]  min-1150:w-[200px] focus:shadow-none focus:ring-white font-medium">
        <SelectValue className=" w-fit">
          <div className="flex items-center gap-4 text-[12px] min-1150:text-[14px] py-[6px] min-1150:py-[10px] px-2 min-1150:px-[18px] border  w-full justify-between rounded-[4px] text-nowrap ">
            {CurrentAlgorithm}
            <IoIosArrowDown />
          </div>
        </SelectValue>{" "}
      </SelectTrigger>
      <SelectContent
        className="z-[999] shadow-[0_0_5px_rgba(0,0,0,0.1019607843)] py-[15px] px-[3px] mt-4 "
        side="bottom"
      >
        <SelectGroup>
          <SelectItem value="Featured">
            <p className="text-[14px] font-medium px-[26px]">Featured</p>
          </SelectItem>
          <SelectItem value="Best Selling">
            <p className="text-[14px] font-medium px-[26px]">Best Selling</p>
          </SelectItem>
          <SelectItem value="Alphabetically, A-Z">
            <p className="text-[14px] font-medium px-[26px]">
              Alphabetically, A-Z
            </p>
          </SelectItem>
          <SelectItem value="Alphabetically, Z-A">
            <p className="text-[14px] font-medium px-[26px]">
              Alphabetically, Z-A
            </p>
          </SelectItem>
          <SelectItem value="Price, low to high">
            <p className="text-[14px] font-medium px-[26px]">
              Price, low to high
            </p>
          </SelectItem>
          <SelectItem value="Date, old to new">
            <p className="text-[14px] font-medium px-[26px]">
              Date, old to new
            </p>
          </SelectItem>
          <SelectItem value="Date, new to new">
            <p className="text-[14px] font-medium px-[26px]">
              Date, new to old
            </p>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

const ArrivalSection = () => {
  let [Columns, setColumns] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setColumns(2);
      } else if (window.innerWidth < 1024) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Call handleResize on mount to set initial column count
    handleResize();

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-[45px] mb-[70px] overflow-x-hidden px-[15px] md:px-[50px]">
      <div className="flex justify-between items-center">
        <FilterSideBar />
        <div className="flex gap-[2vw] pl-[8vw]">
          <div
            className="grid gap-[3px] cursor-pointer grid-cols-2"
            onClick={() => setColumns(2)}
          >
            <GridDots dots={4} isActive={Columns === 2} />
          </div>
          <div
            className="gap-[3px] cursor-pointer hidden md:grid grid-cols-3"
            onClick={() => setColumns(3)}
          >
            <GridDots dots={6} isActive={Columns === 3} />
          </div>
          <div
            className="gap-[3px] cursor-pointer hidden lg:grid grid-cols-4"
            onClick={() => setColumns(4)}
          >
            <GridDots dots={8} isActive={Columns === 4} />
          </div>
          <div
            className="gap-[3px] cursor-pointer hidden lg:grid grid-cols-5"
            onClick={() => setColumns(5)}
          >
            <GridDots dots={10} isActive={Columns === 5} />
          </div>
          <div
            className="gap-[3px] cursor-pointer hidden lg:grid grid-cols-6"
            onClick={() => setColumns(6)}
          >
            <GridDots dots={12} isActive={Columns === 6} />
          </div>
        </div>
        <div>
          <FilterSelect />
        </div>
      </div>
      <div
        className={`grid grid-cols-${Columns} gap-[30px] my-[30px] min-1150:px-[30px]`}
      >
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
        <ProductDisplayCard product={Product1} />
      </div>
      <div className="flex gap-[1vw] justify-center mt-[50px]">
        <button className="NewArrivalPagination active">1</button>
        <button className="NewArrivalPagination">2</button>
        <button className="NewArrivalPagination">3</button>
        <button className="NewArrivalPagination">4</button>
        <button className="NewArrivalPagination">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ArrivalSection;
