import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoFilter } from "react-icons/io5"

const FilterSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
      <div className="flex items-center md:py-[8px] gap-2 md:px-[12px] lg:py-[10px]">
        <span>
          <IoFilter />
        </span>
        <p className="font-semibold text-[12px]">FILTER</p>
      </div>
      <div></div>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}

export default FilterSideBar