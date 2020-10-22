import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form onSubmit={onSubmit} className="w-full max-w-sm">
          <div className="flex items-center border-b border-b-2 border-gray-800 py-2">
            <input
              onChange={(e) => setText(e.target.value)}
              className="appearance-none bg-transparent text-sm border-none w-full text-gray-700  mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="키워드를 검색하세요"
            />
            <button
              className="flex-shrink-0 bg-gray-900 hover:bg-gray-800  text-sm text-white py-1 px-4 rounded"
              type="submit"
            >
              검색
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageSearch;
