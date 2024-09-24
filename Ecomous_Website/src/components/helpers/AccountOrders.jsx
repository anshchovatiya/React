import { Fragment } from "react";

export default function AccountOrders() {
  return (
    <div className="border rounded h-fit grid divide-y  max-lg:mt-7">
      <div className="hidden md:grid grid-cols-[15%_25%_15%_25%_20%] w-full *:p-4 text-center *:font-semibold bg-[#F2F2F2]">
        <p className="ml-8">Order</p>
        <p>Date</p>
        <p>Status</p>
        <p>Total</p>
        <p className="mr-5">Actions</p>
      </div>
      {[
        {
          order: "#123",
          date: "August 1, 2024",
          status: "on hold",
          total: "	$200.0 for 1 items",
        },
        {
          order: "#123",
          date: "August 1, 2024",
          status: "on hold",
          total: "	$200.0 for 1 items",
        },
        {
          order: "#123",
          date: "August 1, 2024",
          status: "on hold",
          total: "	$200.0 for 1 items",
        },
        {
          order: "#123",
          date: "August 1, 2024",
          status: "on hold",
          total: "	$200.0 for 1 items",
        },
      ].map((current, index) => {
        return (
          <Fragment key={current.order+index}>
            <div className="grid md:grid-cols-[15%_25%_15%_25%_20%] w-full px-4 py-4  md:px-4  md:py-[10px] md:text-center md:place-items-center max-md:pb-3 text-sm">
              <p>
                {" "}
                <span className="md:hidden font-semibold">Order : </span>
                {current.order}
              </p>
              <p>
                {" "}
                <span className="md:hidden font-semibold">Date : </span>
                {current.date}
              </p>
              <p>
                {" "}
                <span className="md:hidden font-semibold">Status : </span>
                {current.status}
              </p>
              <p>
                {" "}
                <span className="md:hidden font-semibold">Total : </span>
                {current.total}
              </p>
              <button className="bg-black text-white w-fit m-auto h-6 rounded font-semibold flex justify-center items-center p-3.5 max-md:mt-2.5 max-md:w-1/2 text-sm">
                View
              </button>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
