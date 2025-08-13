import React, { useState } from "react";
import BlogData from "../data/BlogData";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const BlogCard = () => {
  const [likes, setLikes] = useState({});
  const [mutedVideos, setMutedVideos] = useState({}); // estado para mute/unmute por vídeo

  const toggleLike = (idx) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [idx]: !prevLikes[idx],
    }));
  };

  const toggleMute = (id) => {
    setMutedVideos((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="p-4 max-w-7xl mx-auto bg-white/20 backdrop-blur-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
        {BlogData.map((item) =>
          item.isMain ? (
            <div
              key={item.id}
              className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-black rounded-xl overflow-hidden relative"
            >
              {/* Banner (imagem ou vídeo com controles + botão mute) */}
              {item.type === "video" ? (
                <div className="relative w-full h-full">
                  <ReactPlayer
                    url={item.url}
                    playing
                    muted={mutedVideos[item.id] ?? true}
                    controls
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0"
                  />
                  {/* Botão de mute/unmute */}
                  <button
                    onClick={() => toggleMute(item.id)}
                    className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded z-20 text-sm"
                  >
                    {mutedVideos[item.id] ? "🔇" : "🔊"}
                  </button>
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover absolute inset-0 opacity-70"
                />
              )}

              {/* Overlay com título, likes e botão — sempre visível */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 bg-gradient-to-t from-black/60 to-transparent">
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
                <div className="flex space-x-4 mt-4 text-sm text-white">
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
              className="rounded-xl shadow overflow-hidden flex flex-col"
            >
              {/* Banner (imagem ou vídeo com controles + botão mute) */}
              {item.type === "video" ? (
                <div className="relative w-full aspect-video">
                  <ReactPlayer
                    url={item.url}
                    playing
                    muted={mutedVideos[item.id] ?? true}
                    controls
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0"
                  />
                  {/* Botão de mute/unmute */}
                  <button
                    onClick={() => toggleMute(item.id)}
                    className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded z-20 text-xs"
                  >
                    {mutedVideos[item.id] ? "🔇" : "🔊"}
                  </button>
                </div>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
              )}

              {/* Overlay com título, likes e botão — sempre visível */}
              <div className="p-4 flex flex-col justify-between h-full">
                <h3 className="text-base font-semibold mb-3">{item.title}</h3>
                <div className="flex space-x-4 text-sm text-gray-600">
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
          )
        )}
      </div>  
    </div>
  );
};

export default BlogCard;
