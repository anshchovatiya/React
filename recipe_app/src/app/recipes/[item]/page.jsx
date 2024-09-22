"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import Loader from "@/components/Skelton";
import Link from "next/link";

const SearchResults = ({ params }) => {
  let [recipes, setRecipes] = useState(null);
  let [totalRecipes, setTotalRecipes] = useState(32);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.edamam.com/search?q=${params.item}&app_id=bcb12d67&app_key=4bea01b73a65107f208e5de7a8c120a4&from=0&to=${totalRecipes}`
      )
      .then((response) => {
        const {
          data: { hits },
        } = response;
        console.log(hits);
        setRecipes(hits);
        setIsLoading(false);
      })
      .catch((err) => alert("Error occurred", err));
  }, [totalRecipes]);

  function handleLoadPage() {
    setTotalRecipes((current) => current + 12);
  }

  console.log(params);
  return (
    <>
      {!recipes && <Loader />}
      {recipes && (
       <div className="flex-1 overflow-y-auto overflow-x-hidden CardContainer">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 px-5 gap-8 rounded-lg text-white">
            {recipes &&
              recipes.map((currentRecipe) => {
                const { recipe } = currentRecipe;
                let { uri } = recipe;
                uri = uri.split("#")[1];
              
                return  <Link href={`/recipes/${params.item}/${uri}`}><Card recipe={recipe} /></Link>
              })}
          </div>
          <div className="mt-10 flex justify-center group">
            <button 
            disabled={isLoading ? true : false}
              onClick={handleLoadPage}
              className="border border-white text-white text-sm   py-2 rounded group-hover:bg-white duration-500 group-hover:text-black px-10 h-11 font-semibold mx-auto flex gap-4 pt-3"
            >
              <p>Load More</p>
            {  isLoading && <div class="inline-block h-5 w-5 border-4 border-solid border-current border-t-transparent rounded-full animate-spin hover:border-black hover:border-t-black transition-colors">
                <span class="sr-only">Loading...</span>
              </div>}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResults;
