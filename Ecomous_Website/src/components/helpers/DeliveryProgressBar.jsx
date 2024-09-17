import { RiTruckLine } from "react-icons/ri";

export default function DeliveryProgressBar({ progress }){
  return (
    <div className="flex flex-col items-center justify-center p-8 border-dashed border w-full">
      <div className="relative w-full h-1 rounded-full bg-[#ebebeb]">
        <span className="absolute left-0 top-4 text-white text-sm ">0 km</span>
        <div
          className="h-1 bg-[#db1215] rounded-full relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute -right-6 -top-3 flex justify-center items-center">
            <span className=" inline-block text-[#db1215] bg-white px-2.5 border-[1.5px] border-[#db1215] py-1 rounded">
              <RiTruckLine className="w-5 h-auto font-extrabold" />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-[14px] font-normal">
          Buy <span className="font-medium">$75.00</span> more to enjoy{" "}
          <span className="font-medium">Free Shipping</span>
        </p>
      </div>
    </div>
  );
};
