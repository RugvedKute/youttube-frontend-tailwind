import React from "react";
import VideoCard from "./VideoCard";

export default function VideoGrid() {
  const videosList = [
    {
      id: 1,
      title: "How to Make the Perfect Pancakes",
      channel: "Cooking with Chef John",
      views: 150000,
      weeksAgo: 3,
    },
    {
      id: 2,
      title: "10 Tips for Better Sleep",
      channel: "Health & Wellness Hub",
      views: 230000,
      weeksAgo: 2,
    },
    {
      id: 3,
      title: "Introduction to React Hooks",
      channel: "Code Masters",
      views: 45000,
      weeksAgo: 6,
    },
    {
      id: 4,
      title: "Exploring the Grand Canyon",
      channel: "Adventure Travel",
      views: 88000,
      weeksAgo: 8,
    },
    {
      id: 5,
      title: "Artificial Intelligence in Healthcare",
      channel: "Tech Trends",
      views: 320000,
      weeksAgo: 1,
    },
    {
      id: 6,
      title: "Yoga for Beginners",
      channel: "Yoga Life",
      views: 105000,
      weeksAgo: 4,
    },
    {
      id: 7,
      title: "History of Ancient Egypt",
      channel: "History Buffs",
      views: 75000,
      weeksAgo: 5,
    },
    {
      id: 8,
      title: "Cooking BBQ Ribs",
      channel: "BBQ Pitmasters",
      views: 180000,
      weeksAgo: 2,
    },
    {
      id: 9,
      title: "Photography Tips for Beginners",
      channel: "Shutterbug Academy",
      views: 63000,
      weeksAgo: 7,
    },
    {
      id: 10,
      title: "DIY Home Decor Ideas",
      channel: "Home Design Tips",
      views: 270000,
      weeksAgo: 3,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 pl-4 pr-4 pb-4">
      {videosList.map((video) => {
        return (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            views={video.views}
            weeksAgo={video.weeksAgo}
          ></VideoCard>
        );
      })}
    </div>
  );
}
