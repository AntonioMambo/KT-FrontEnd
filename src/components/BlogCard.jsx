import React, { useState } from "react";
import BlogData from "../data/BlogData"; // Assuming you have a data file with news items
import { Link } from "react-router-dom";

const BlogCard = () => {
  // Estado de likes para cada imagem separado
  const [likes, setLikes] = useState({});

  // Função para alternar like de uma imagem específica
  const toggleLike = (idx) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [idx]: !prevLikes[idx],
    }));
  };
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {BlogData.map((item) =>
          item.isMain ? (
            <div
              key={item.id}
              className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-black rounded-xl overflow-hidden relative"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover absolute inset-0 opacity-70"
              />
              <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <div className="flex space-x-4 mt-4 text-sm">
                  <span>❤️ {item.likes}</span>
                </div>

                <div className="mt-4 text-center">
                  <Link
                    to={`/Blog/${item.id}`}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
                  >
                    Saber mais
                  </Link>
                </div>
              </div>
            </div>
          ) : item.isSummary ? (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col justify-between"
            >
              <h3 className="font-semibold text-orange-500 mb-2">
                {item.title}
              </h3>
              <ul className="text-sm text-gray-800 space-y-1">
                {item.summary.map((s, i) => (
                  <li key={i}>• {s}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow overflow-hidden flex flex-col"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <span className="text-xs text-gray-500 mb-1">
                  {item.source}
                </span>
                <h3 className="text-base font-semibold mb-3">{item.title}</h3>
                <div className="flex space-x-4 text-sm text-gray-600">
                  <span>❤️ {item.likes}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BlogCard;
