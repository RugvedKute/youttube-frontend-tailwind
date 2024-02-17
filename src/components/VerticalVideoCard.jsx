import React from "react";

export default function VerticalVideoCard() {
  return (
    <div>
      <SingleVerticalCard></SingleVerticalCard>
      <SingleVerticalCard></SingleVerticalCard>
      <SingleVerticalCard></SingleVerticalCard>
      <SingleVerticalCard></SingleVerticalCard>
      <SingleVerticalCard></SingleVerticalCard>
      <SingleVerticalCard></SingleVerticalCard>
      <SingleVerticalCard></SingleVerticalCard>
      <SingleVerticalCard></SingleVerticalCard>
    </div>
  );
}

function SingleVerticalCard() {
  return (
    <div className="grid grid-cols-2 gap-2 mb-2">
      <div>
        <img
          src="https://i3.ytimg.com/vi/ZOYp6-k9HhE/hqdefault.jpg"
          className="rounded-md"
        ></img>
      </div>
      <div className="pt-1">
        <h4 className="font font-bold text-sm">
          Title djfkldsjlkfjdsklfj jkadhdjksahd
        </h4>
        <p className="text-xs text-gray-500 leading-[1rem] mt-3">
          Published on Jan Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quia magni
        </p>
        <div className="flex mt-1 gap-2">
          <span className="text-xs text-gray-500">1.3k Views</span>
          <span className="text-xs text-gray-500">4 hours ago</span>
        </div>
      </div>
    </div>
  );
}
