import { SectionHead, ServicesBox,ImageShowCase } from "../../data/imports";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Fragment } from "react";

const ShopGram = () => {
  return (
    <div className="mt-12 lg:mt-0 overflow-x-hidden">
      <SectionHead
        tittle="Shop Gram"
        description="Inspire and let yourself be inspired, from one unique fashion to another."
      />
      <ImageShowCase />
      <div className="grid grid-cols-1 md:grid-cols-2 min-1150:grid-cols-4 max-w-[1500px] m-auto p-[18px] lg:p-12 gap-[30px]">
        {[
          {
            icon: <FaShippingFast />,
            text: "Free Shipping",
            description: "Free Shipping over order $120",
          },
          {
            icon: <MdOutlinePayment />,
            text: "Flexible Payment",
            description: "Pay with Multiple Credit Cards",
          },
          {
            icon: <GiReturnArrow />,
            text: "14 Day Returns",
            description: "Within 30 days for an exchange",
          },
          {
            icon: <RiCustomerService2Fill />,
            text: "Premium Support",
            description: "Outstanding premium support",
          },
        ].map((currentItem,index) => {
          return (
            <Fragment key={currentItem.text + index}>
            <ServicesBox
              icon={currentItem.icon}
              text={currentItem.text}
              description={currentItem.description}
            />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ShopGram;
