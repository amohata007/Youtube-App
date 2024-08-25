import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import {
  GOOGLE_API_KEY,
  numFormatter,
  YOUTUBE_GET_VIDEO_BY_ID,
} from "../utils/constants";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const data = await fetch(
      YOUTUBE_GET_VIDEO_BY_ID + searchParams.get("v") + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();
    console.log(json.items, "Check");
    setVideos(json.items);
  };

  useEffect(() => {
    dispatch(closeMenu());
    fetchVideos();
  }, []);

  return (
    <div className="p-2 bg-black w-full">
      <iframe
        className="p-2"
        width="1050"
        height="500"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?autoplay=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="p-2 pl-6 text-xl text-white font-bold w-[1050px] border-b-2">
        <ul>
          <li> {videos[0]?.snippet?.title}</li>
          <div className="flex pt-2 justify-between">
            <li className="py-3"> {videos[0]?.snippet?.channelTitle}</li>
            <div>
              <li className="border border-white rounded-lg bg-gray-500 p-1 mb-1">
                {numFormatter(videos[0]?.statistics?.viewCount)} 👁️
              </li>
              <li className="  border border-white rounded-lg bg-gray-500 p-1">
                {numFormatter(videos[0]?.statistics?.likeCount)} 👍🏻
              </li>
            </div>
          </div>
        </ul>
      </div>
      <CommentSection />
    </div>
  );
};

export default WatchPage;
