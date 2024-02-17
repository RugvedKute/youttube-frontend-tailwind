import React from "react";
import { useLocation, useParams } from "react-router-dom";
import AppBar from "../components/AppBar";
import VerticalVideoCard from "../components/VerticalVideoCard";
import VideoCard from "../components/VideoCard";

export default function () {
  const params = useParams();
  const data = useLocation();

  const { id } = params;

  return (
    <div>
      <AppBar></AppBar>
      <div className="grid grid-cols-12 pl-4 pr-4 pt-1 pb-1 gap-3">
        <div className="col-span-12 sm:col-span-9">
          <VideoCard
            title={data.state?.title}
            views={data.state?.views}
            weeksAgo={data.state?.weeksAgo}
            channel={data.state?.channel}
          ></VideoCard>
        </div>
        <div className="col-span-3">
          <VerticalVideoCard></VerticalVideoCard>
        </div>
      </div>
    </div>
  );
}
