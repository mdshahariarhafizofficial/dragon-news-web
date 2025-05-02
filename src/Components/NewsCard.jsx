import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, thumbnail_url, author, rating, total_view, details } =
    news;

  const formattedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md rounded-xl">
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={author.img}
              alt={author.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-bold text-lg text-gray-900 leading-snug">
          {title}
        </h2>
        <div className="my-4 rounded-lg overflow-hidden">
          <img
            src={thumbnail_url}
            alt="News Thumbnail"
            className="w-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-700">
          {details.slice(0, 200)}...
          <span className="text-orange-500 font-semibold cursor-pointer">
            {" "}
            Read More
          </span>
        </p>
      </div>

      <div className="flex justify-between items-center p-4 border-t-2 border-gray-200">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-sm text-gray-700 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
