"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const AllRecipe = ({ children }) => {
  
  
  const router = useRouter();
  let inputElement = useRef(null);


  // redirect to item page on form submit
  function handleFormSubmit(event) {
    event.preventDefault();
    let data = inputElement.current.value.trim();
    if (data.length < 4) {
      alert("enter valid input");
      return;
    }
    inputElement.current.value = "";
    router.push(`/recipes/${data}`);
  }

  return (
    <>
      <div className=" bg-[#111]  py-7 text-white px-3">
        <div className=" mb-7">
          <h1 className="m-auto w-fit text-3xl md:text-6xl mb-8 text-center">Food Recipes</h1>
          <form
            className=" md:w-1/2 flex flex-row gap-2 md:gap-4 m-auto"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              name="searchItem"
              className="flex-1 rounded focus:outline-none px-3 py-2 text-black h-11"
              ref={inputElement}
            />
            <button
              className="border border-white text-white text-xs md:text-sm  py-2 rounded hover:bg-white duration-500 hover:text-black px-4 md:px-10 h-11 font-bold"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="border border-white  rounded-lg m-auto w-fit p-1 bg-white text-black">
          <ul className=" w-fit grid  *:text-center text-sm grid-cols-4 gap-[2vw] md:text-lg hover:*:bg-black px-2 *:md:px-5 *:rounded *:duration-300 *:py-2  hover:*:text-white *:cursor-pointer ">
            <Link href="/recipes/vegetarian">All Recipes</Link>
            <Link href="/recipes/indian">Indian</Link>
            <Link href="/recipes/asian">Asian</Link>
            <Link href="/recipes/Western">Western</Link>
          </ul>
        </div>
        <div className="w-full mb-3  md:p-4 rounded-lg gap-5 md:px-20">
          {children}
        </div>
      </div>
    </>
  );
};

export default AllRecipe;
