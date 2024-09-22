import React, { useState } from "react";
import PageHeader from "../helpers/PageHeader";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useToast } from "../../hooks/use-toast";

const Login = () => {
  let [invalid, setInvalid] = useState(false);
  let userInfo = useSelector((state) => state.account);
  const { toast } = useToast();
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    if (formValues["account_password"].length < 5) {
      alert("password is too short");
      return;
    }

    if (
      formValues["account_password"] !== userInfo["password"] ||
      formValues["email_id"] !== userInfo["email_id"]
    ) {
      setInvalid(true);
    }

    toast({
      description: "Login Successfully",
    });
    event.target.reset();
    navigate("/account");
  }

  return (
    <div className=" overflow-x-hidden">
      <PageHeader tittle="Log in" />
      <div className=" max-w-[1500px] pt-6 md:pt-14 pb-6 m-auto lg:px-12 px-[18px] grid grid-cols-1 md:grid-cols-2 max-md:gap-4">
        <div className="md:w-4/5">
          <h5 className="text-lg md:text-3xl font-normal max-lg:pt-5 mb-6">
            Log in
          </h5>
          <form className="grid gap-3 mb-6" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="email_id"
              id="email-id"
              className="focus:outline-none border p-3 rounded placeholder:text-sm"
              placeholder="Enter you Email id *"
            />
            <input
              type="password"
              name="account_password"
              id="account_password"
              className="focus:outline-none border p-3 rounded  placeholder:text-sm"
              placeholder="Enter your password *"
            />
            {invalid && (
              <div className="text-xs text-red-500 font-semibold">
                Wrong Email or Password
              </div>
            )}
            <p className="text-sm border-b border-black w-fit pb-1 font-medium mb-5">
              Forgot your password?
            </p>
            <button className="bg-black py-3 text-sm px-28 rounded-sm text-white max-md:w-full">
              Log in{" "}
            </button>
          </form>
        </div>
        <div className="md:w-4/5">
          <h5 className="text-lg md:text-3xl font-normal max-lg:pt-5 mb-6">
            I'm new here
          </h5>
          <p className="text-sm text-gray-500">
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <NavLink
            to="/register"
            className="flex items-center gap-2 font-medium border-b mt-6 w-fit border-black text-sm hover:text-[crimson] cursor-pointer hover:border-[crimson]"
          >
            <p>Register</p>
            <HiMiniArrowUpRight className="text-base" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
