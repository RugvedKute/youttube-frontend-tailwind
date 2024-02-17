import React from "react";

export default function LeftBar() {
  return (
    <div className="pl-4 hidden md:block">
      <BarWithIcon></BarWithIcon>
      <BarWithIcon></BarWithIcon>
      <BarWithIcon></BarWithIcon>
      <BarWithIcon></BarWithIcon>
      <Line></Line>
      <BarWithIcon></BarWithIcon>
      <BarWithIcon></BarWithIcon>
      <BarWithIcon></BarWithIcon>
      <BarWithIcon></BarWithIcon>
      <Line></Line>
      <BarWithIcon></BarWithIcon>
      <BarWithIcon></BarWithIcon>
      <BarWithIcon></BarWithIcon>
      <BarWithIcon></BarWithIcon>
    </div>
  );
}

function BarWithIcon() {
  return (
    <div className="flex items-center gap-3 mt-4 ">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </div>
      <div>
        <span>Home</span>
      </div>
    </div>
  );
}

export const Line = () => {
  return (
    <div className="w-full bg-gray-200 h-px dark:bg-gray-700 pl-3 pr-3 opacity-20 mt-4	">
      <div
        className="bg-red-600 h-0.5 dark:bg-gray-500"
        style={{ width: "100%" }}
      ></div>
    </div>
  );
};
