import React from "react";

function imageCard({ image }) {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} className="w-full" alt="" />
      <div className="px-6 py-4">
        <ul>
          <li>
            <strong> 작성자: </strong>
            {image.user}
          </li>
          <li>
            <strong>조회수: </strong>
            {image.views}
          </li>
          <li>
            <strong>다운로드: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>좋아요: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default imageCard;
