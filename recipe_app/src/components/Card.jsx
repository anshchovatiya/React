import Link from "next/link";
import React from "react";

const Card = ({ recipe }) => {

  return (
    <div
      className="rounded overflow-hidden shadow-lg flex flex-col bg-white h-full"
      key={recipe.url}
    >
      <a href="#" />
      <div className="relative">
        <a href="#">
          <img
            className="w-full"
            src={recipe.image}
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>
        <a href="#!">
          <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            {recipe.mealType[0]}
          </div>
        </a>
      </div>
      <div className="px-6 py-4 mb-auto text-black">
        <a
          href="#"
          className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2"
        >
          {recipe.label}
        </a>
        <div className="text-xs flex flex-wrap gap-3">
          <span className="border border-gray-800 py-1 px-2 rounded-3xl hover:bg-white hover:text-black cursor-pointer">
            {recipe.cuisineType}
          </span>
          <span className="border border-gray-800 py-1 px-2 rounded-3xl hover:bg-white hover:text-black cursor-pointer">
            {recipe.dishType}
          </span>
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
          <span className="ml-1">
            {" "}
            {Math.floor(Math.random() * 100)} days ago
          </span>
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
          <span className="ml-1">
            {Math.floor(Math.random() * 100)} Comments
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
