import React from "react";
import PageHeader from "../helpers/PageHeader";
import { NavLink } from "react-router-dom";
import { HiMiniArrowUpRight } from "react-icons/hi2";

const Register = () => {
  return (
    <div>
      <PageHeader tittle="Register" />
      <div className="max-w-[600px] mx-auto py-10 md:py-12 px-4">
        <p className="text-xl md:text-3xl mb-5">Register</p>
        <form className="grid gap-5 h-fit  max-lg:mt-7">
          {[
            { type: "text", name: "first_name", placeholder: "First Name" },
            { type: "text", name: "last_name", placeholder: "Last Name" },
            {
              type: "email",
              name: "email_id",
              placeholder: "ecomous@gmail.com",
            },
            {
              type: "password",
              name: "password",
              placeholder: "Enter your password",
            },
          ].map((current) => {
            return (
              <input
                type={current.type}
                name={current.name}
                className="detailsInput"
                placeholder={current.placeholder}
              />
            );
          })}
          <input
            type="submit"
            name="submit"
            className="w-full bg-black text-white font-semibold text-sm py-3 rounded mt-4"
          />
        </form>
        <NavLink
          to="/login"
          className="flex items-center gap-2 font-medium border-b mt-6 w-fit border-black text-sm hover:text-[crimson] cursor-pointer mx-auto hover:border-[crimson]"
        >
          <p>Already have an account? Log in here</p>
          <HiMiniArrowUpRight className="text-base" />
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
