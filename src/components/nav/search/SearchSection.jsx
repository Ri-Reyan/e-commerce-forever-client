import React from "react";

const SearchSection = () => {
  return (
    <div className="px-4 p-2">
      <hr className="w-full  " />
      <input
        className="h-[40px] w-[75%] mx-[12.5%] rounded-3xl p-4 text-xl font-inter border mt-2 border-gray-400"
        type="search"
        name="search"
        placeholder="search"
      />
      <hr className="w-full px-4 mt-2" />
    </div>
  );
};

export default SearchSection;
