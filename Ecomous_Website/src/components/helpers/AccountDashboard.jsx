export function AccountDashboard() {
    return (
      <div className="flex justify-center items-center flex-col text-center  max-lg:mt-7">
        <h4 className="text-xl md:text-2xl lg:text-3xl mb-4">
          Hello from Ecomous
        </h4>
        <p className="md:max-w-[70%] text-sm">
          From your account dashboard you can view your{" "}
          <span className="text-[crimson]">recent orders,</span> manage your{" "}
          <span className="text-[crimson]">shipping and billing address,</span>{" "}
          and{" "}
          <span className="text-[crimson]">
            edit your password and account details.
          </span>
        </p>
      </div>
    );
  }