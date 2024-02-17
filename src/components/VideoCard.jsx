import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function VideoCard({ title, channel, views, weeksAgo, id }) {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `video/${id}`;
    navigate(path, {
      state: {
        title: title,
        channel: channel,
        views: views,
        weeksAgo: weeksAgo,
      },
    });
  };

  return (
    <div className="cursor-pointer" onClick={routeChange}>
      <img
        src="https://i3.ytimg.com/vi/ZOYp6-k9HhE/hqdefault.jpg"
        alt="Video Thumbnail"
        className="rounded-xl object-fill w-full max-h-[75vh]"
      />
      <div className="grid grid-cols-12">
        <div className="col-span-1 pt-2">
          <img
            src="https://i3.ytimg.com/vi/ZOYp6-k9HhE/hqdefault.jpg"
            alt="Channel Thumbnail"
            className="rounded-full w-12 h-12"
          />
        </div>
        <div className="col-span-11 pl-5 pt-2">
          <span className="text-base font-bold">{title}</span>
          <div className="col-span-11 text-sm text-gray-600">{channel}</div>
          <div className="flex gap-2 text-sm text-gray-600">
            <div>
              <span>{views}k Views</span>
            </div>
            <div>
              <span>{weeksAgo} weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
