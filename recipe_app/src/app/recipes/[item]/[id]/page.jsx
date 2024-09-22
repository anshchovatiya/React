//
"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RecipePage = ({ params }) => {
  let [recipe, setRecipe] = useState(null);
  let router = useRouter();

  useEffect(() => {
    axios
      .get(
        ` https://api.edamam.com/api/recipes/v2/${params.id}?type=public&app_id=bcb12d67&app_key=4bea01b73a65107f208e5de7a8c120a4`
      )
      .then((response) => {
        let {
          data: { recipe },
        } = response;
        console.log(recipe);
        setRecipe(recipe);
      })
      .catch((err) => alert("Error occurred", err));
  }, []);

  return (
    <>
      {!recipe && (
        <div class="flex space-x-2 justify-center items-center bg-white h-[70vh] bg-transparent">
          <span class="sr-only">Loading...</span>
          <div class="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div class="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div class="h-4 w-4 bg-white rounded-full animate-bounce"></div>
        </div>
      )}
      {recipe && (
        <div className="mt-6 m-auto max-w-[1000px] px-3">
          <div className="rounded-lg overflow-hidden  aspect-[2]  flex justify-center items-center m-auto relative group  cursor-pointer">
            <img
              src={recipe.image}
              className="hover:scale-105 w-full h-auto object-contain group-hover:scale-110 duration-1000"
            />
            <div className="absolute class text-white z-50  bg-[#0000007c] h-full w-full flex justify-center items-center text-[clamp(1rem,2vw,2rem)] text-center px-5">
              <p>{recipe.label}</p>
            </div>
          </div>
          <div className="flex justify-center mt-5 gap-[1.4vw] text-sm">
            <div className="text-center">
              <p className="border rounded-full px-4 py-1">
                {recipe.calories.toFixed(2)}
              </p>
              <p className="text-xs mt-1">Calories</p>
            </div>
            <div className="text-center">
              <p className="border rounded-full px-4 py-1">
                {recipe.totalTime} minutes
              </p>
              <p className="text-xs mt-1">Time to Prepare</p>
            </div>
            <div className="text-center">
              <p className="border rounded-full px-4 py-1">{recipe.yield}</p>
              <p className="text-xs mt-1">Servings</p>
            </div>
          </div>
          <h3 className="text-2xl mt-8 text-green-400">Ingredients</h3>
          <div className="my-5 leading-[28px]">
            {recipe.ingredientLines.map((currentLine, index) => {
              return (
                <div className="flex gap-4 items-center" key={index}>
                  <span className="w-2 mt-1 h-2 bg-white rounded-full"></span>{" "}
                  <p>{currentLine}</p>
                </div>
              );
            })}
          </div>
          <h3 className="text-2xl mt-8 text-green-400">Labels</h3>
          <div className="flex flex-wrap gap-3 mt-6">
            {recipe.healthLabels.map((currentLine, index) => {
              return (
                <div
                  className=" py-1 px-2 rounded-full w-fit border hover:bg-white hover:text-black cursor-pointer font-medium text-sm"
                  key={index}
                >
                  <p>{currentLine}</p>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => router.back()}
            className="border border-white text-white text-sm mt-7 py-2 rounded hover:bg-white duration-500 hover:text-black px-10 h-11 font-semibold mx-auto flex gap-4 pt-3"
          >
            <p>Go Back</p>
          </button>
        </div>
      )}
    </>
  );
};

export default RecipePage;
