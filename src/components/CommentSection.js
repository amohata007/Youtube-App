import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FETCH_COMMENTS } from "../utils/constants";

const CommentSection = () => {
  const [searchParams] = useSearchParams();
  const [comment, setComment] = useState([]);
  const fetchYoutubeComment = async () => {
    const data = await fetch(
      FETCH_COMMENTS + searchParams.get("v") + "&maxResults=50"
    );
    const json = await data.json();
    setComment(json.items);
    console.log(comment);
  };

  useEffect(() => {
    fetchYoutubeComment();
  }, []);
  return (
    <div className="w-[1000px] p-2 m-2 text-white">
      <p className="text-2xl font-bold pb-4">Comments</p>
      <ul>
        {comment.map((com) => (
          <>
            <div className="flex py-3">
              <img
                className="rounded-full pr-2 h-16"
                alt="profile"
                src={
                  com?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
                }
              ></img>
              <div>
                <li className="py-2 font-bold">
                  {com?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                </li>
                <li>{com?.snippet?.topLevelComment?.snippet?.textDisplay}</li>
              </div>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
