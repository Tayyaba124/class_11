import React from "react";

const PostCard = ({ body, title }: { body: string; title: string }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-purple-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-4 border-b border-purple-300 bg-gradient-to-r from-red-400 to-pink-600">
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <div className="p-4 bg-purple-50">
        <p className="text-sm text-pink-800">{body}</p>
      </div>
    </div>
  );
};

export default PostCard;
