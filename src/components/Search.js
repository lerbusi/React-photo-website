import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <div className="ui action input">
        <input
          onChange={inputHandler}
          type="text"
          placeholder="輸入圖片關鍵字"
        />
        <button className="ui purple button" onClick={search}>
          搜尋
        </button>
      </div>
    </div>
  );
};

export default Search;
