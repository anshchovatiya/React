import React, { useState } from "react";
import PageHeader from "../helpers/PageHeader";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { addAccount } from "../../store/login";
import { useToast } from "../../hooks/use-toast";

const Register = () => {


  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  
  function handleFormSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    if (
      formValues["first_name"].length < 3 ||
      formValues["last_name"].length < 3
    ) {
      alert("Name should contain at least three character");
      return;
    }
    if (formValues["password"].length < 5) {
      alert("your password is weak write strong password");
      return;
    }
    dispatch(addAccount(formValues));
    toast({
      description: "Registered Successfully",
    });
    event.target.reset();
    navigate("/account");
  }

  return (
    <div>
      <PageHeader tittle="Register" />
      <div className="max-w-[600px] mx-auto py-10 md:py-12 px-4">
        <p className="text-xl md:text-3xl mb-5">Register</p>
        <form
          className="grid gap-5 h-fit  max-lg:mt-7"
          onSubmit={handleFormSubmit}
        >
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
          ].map((current, index) => {
            return (
              <input
                type={current.type}
                name={current.name}
                className="detailsInput"
                placeholder={current.placeholder}
                key={index}
              />
            );
          })}
          <input
            type="submit"
            name="submit"
            className="w-full bg-black text-white font-semibold text-sm py-3 rounded mt-4 cursor-pointer"
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
