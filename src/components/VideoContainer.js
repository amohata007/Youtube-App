import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    videos && (
      <div className="flex flex-wrap">
        {videos.map((video, index) => (
          <Link key={index} to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} item={video} />
          </Link>
        ))}
      </div>
    )
  );
};

export default VideoContainer;
