import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p style={{ fontSize: "1.25rem" }}>攝影師：{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <div className="content">
        <p style={{ fontSize: "1rem" }}>
          <i className="external alternate large icon" />
          點選另開視窗：
          <button className="ui compact left attached button">
            <a target="_blank" href={data.src.large}>
              普通大圖
            </a>
          </button>
          <button className="ui compact right attached button">
            <a target="_blank" href={data.src.original}>
              清晰大圖
            </a>
          </button>
        </p>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Picture;
