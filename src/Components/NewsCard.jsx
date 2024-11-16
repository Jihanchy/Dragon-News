import React from "react";
import { AiFillEye, AiFillStar } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
    
    return (
        <div className=" mx-auto bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
            {/* Card Header */}
            <div className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        className="w-10 h-10 rounded-full"
                        src={news.author.img}
                        alt="Author"
                    />
                    <div className="ml-3">
                        <p className="font-semibold text-gray-800">{news.author.name}</p>
                        <p className="text-sm text-gray-500">{news.author.published_date}</p>
                    </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700">
                    <FaShareAlt />
                </button>
            </div>

            {/* Title */}
            <div className="px-4 pb-4">
                <h2 className="text-lg font-bold text-gray-800">
                    {news.title}
                </h2>
            </div>

            {/* Thumbnail Image */}
            <div className="w-full  object-contain object-center px-4">
            <img
                className="w-full h-72 object-cover object-center"
                src={news.image_url}
                alt="News Thumbnail"
            />
            </div>

            {/* Description */}
            <div className="px-4 py-4 text-gray-700 text-sm">
                <p>
                    {news.details}
                    <Link to={`/news/${news._id}`} className="text-blue-500 font-semibold"> Read More</Link>
                </p>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 flex justify-between items-center bg-gray-100 border-t border-gray-200">
                {/* Rating */}
                <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, index) => (
                        <AiFillStar key={index} />
                    ))}
                    <span className="ml-2 text-gray-800 font-semibold">
                        {
                           news.rating.number
                        }
                        </span>
                </div>

                {/* Views */}
                <div className="flex items-center text-gray-500">
                    <AiFillEye className="mr-1" />
                    <span>{news.total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
