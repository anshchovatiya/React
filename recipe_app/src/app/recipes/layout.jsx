"use client";
import SearchResults from "@/components/SearchResults";
import axios from "axios";
import React, { useRef, useState } from "react";

const AllRecipe = ({ children, allrecipes }) => {
  let [currentSection, setCurrentSection] = useState("All");
  let inputElement = useRef(null);
  let [SearchItems, setSearchItems] = useState(null);

  function handleFormSubmit(event) {
    event.preventDefault();
    let data = inputElement.current.value.trim();
    if (data.length < 2) {
      alert("enter valid input");
      return;
    }
    inputElement.current.value = "";

    axios
      .get(`https://dummyjson.com/recipes/search?q=${data}`)
      .then((response) => {
        let { recipes } = response.data;
        setSearchItems(recipes);
        setCurrentSection("SearchResults");
      })
      .catch((err) => alert("Error occurred", err));
  }

  return (
    <>
      {children}
      <div className="min-h-svh bg-[#111] md:px-32 py-7 font-sans text-white px-3">
        <div className="flex   flex-col md:flex-row  justify-between items-center mb-7 gap-5">
          <img
            src="/logo.jpg"
            className="rounded-full h-20 w-20 object-cover"
          />
          <form
            className=" w-1/2 flex  flex-col md:flex-row md:ml-auto gap-4"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              name="searchItem"
              className="flex-1 rounded focus:outline-none px-3 py-2 text-black h-11"
              ref={inputElement}
            />
            <button
              className="border border-white text-white text-sm  py-2 rounded hover:bg-white duration-500 hover:text-black px-10 h-11 font-bold"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="w-full mb-3 border-white md:border h-[80vh] flex md:p-4 rounded-lg gap-5">
          <div className="border border-white  rounded-lg py-8 hidden md:block">
            <ul className="grid gap-5 text-lg hover:*:bg-white *:px-16 hover:*:text-black *:cursor-pointer ">
              <li onClick={() => setCurrentSection("All")}>All recipes</li>
              <li>option1</li>
              <li>option1</li>
              <li>option1</li>
              <li>option1</li>
              <li>option1</li>
            </ul>
          </div>
          {currentSection === "All" && allrecipes}
          {currentSection === "SearchResults" && SearchItems.length > 0 && (
            <SearchResults recipes={SearchItems} />
          )}
          {currentSection === "SearchResults" && !(SearchItems.length > 0) && (
            <div className="h-full w-full flex justify-center items-center">
              Search Results Not Found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllRecipe;
