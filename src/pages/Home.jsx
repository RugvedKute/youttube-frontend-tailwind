import React from "react";
import AppBar from "../components/AppBar";
import LeftBar from "../components/LeftBar";
import VideoGrid from "../components/VideoGrid";

export default function Home() {
  return (
    <div>
      <AppBar></AppBar>
      <div className="flex gap-10">
        <LeftBar></LeftBar>
        <VideoGrid></VideoGrid>
      </div>
    </div>
  );
}
