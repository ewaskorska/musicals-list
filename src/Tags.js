import React from "react";

const Tags = ({ filterItems }) => {
  return (
    <div>
      <button onClick={() => filterItems("tag10")}>button</button>
    </div>
  );
};

export default Tags;
