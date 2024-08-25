import { numFormatter } from "../utils/constants";

const VideoCard = ({ item }) => {
  if (!item) return null;

  const { snippet, statistics } = item;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="p-2 m-2 w-64 shadow-lg h-full">
      <img alt="video" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-red-700 font-bold">{channelTitle}</li>
        <li>{publishedAt.slice(0, 10)}</li>
        <li>{numFormatter(viewCount)} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
