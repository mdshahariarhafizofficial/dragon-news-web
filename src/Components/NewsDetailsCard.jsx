import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  const {
    title,
    category_id,
    image_url,
    details,
  } = news;


  return (
    <div className="card bg-base-100 shadow-sm border-2 border-gray-300 p-5 rounded-lg">
      <figure>
        <img src={image_url} alt={title} className="w-full h-auto rounded-t-lg" />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-xl font-bold text-gray-800 leading-snug">
          {title}
        </h2>

        <p className="text-sm text-gray-700 whitespace-pre-line">
          {details}
        </p>

        <div className="mt-6">
          <Link to={`/category/${category_id}`} className="btn btn-secondary">
            ← All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
