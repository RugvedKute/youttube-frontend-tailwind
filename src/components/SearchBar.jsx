import React from "react";

export default function SearchBar() {
  return (
    <div>
      <div className="w-32 flex justify-between border border-gray-500 rounded-3xl p-1 pl-3 text-sm pr-2 sm:w-96">
        <input
          type={"text"}
          className="w-full text-black border-none outline-none"
          placeholder="Search for a movie, TV show or person..."
          required
        ></input>
        <button className="text-gray-950 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
