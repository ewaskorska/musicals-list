import React from "react";

const Tags = ({ filterItems, tags }) => {
  return (
    <div>
      {tags.map((tag, index) => {
        return (
          <button type="button" key={index} onClick={() => filterItems(tag)}>
            {tag}
          </button>
        );
      })}
    </div>
  );
};

export default Tags;
