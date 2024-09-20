"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [recipes, setRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // get Initial list
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://dummyjson.com/recipes")
      .then((response) => {
        let { recipes } = response.data;
        setRecipes(recipes);
        setIsLoading(false);
        console.log(recipes);
      })
      .catch((err) => alert("Error occurred", err));
  }, []);



  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden CardContainer">
      {isLoading && (
        <div className="grid grid-cols-4 px-5 gap-5 rounded-lg">
          {[1, 2, 3, 4,5,6,7,8].map(() => {
            return (
              <div
                role="status"
                className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
              >
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                <div className="flex items-center mt-4">
                  <svg
                    className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            );
          })}
        </div>
      )}
      {!isLoading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 gap-5 rounded-lg">
          {recipes &&
            recipes.map((currentRecipe) => {
              return (
                <div className="rounded overflow-hidden shadow-lg flex flex-col">
                  <a href="#" />
                  <div className="relative">
                    <a href="#">
                      <img
                        className="w-full"
                        src={currentRecipe.image}
                        alt="Sunset in the mountains"
                      />
                      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    </a>
                    <a href="#!">
                      <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Cooking
                      </div>
                    </a>
                  </div>
                  <div className="px-6 py-4 mb-auto">
                    <a
                      href="#"
                      className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2"
                    >
                      {currentRecipe.name}
                    </a>
                    <div className="text-xs flex flex-wrap gap-3">
                      {currentRecipe.tags.map((current) => {
                        return (
                          <span className="border py-1 px-2 rounded-3xl hover:bg-white hover:text-black cursor-pointer">
                            {current}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                    <span
                      href="#"
                      className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                    >
                      <svg
                        height="13px"
                        width="13px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                          </g>
                        </g>
                      </svg>
                      <span className="ml-1"> 10 days ago</span>
                    </span>
                    <span
                      href="#"
                      className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                    >
                      <svg
                        className="h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        ></path>
                      </svg>
                      <span className="ml-1">0 Comments</span>
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default page;
