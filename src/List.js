import React from "react";

const List = ({ items, listTitle, listItem, children }) => {
  return (
    <div>
      <div>
        <h2>{listTitle}</h2>
        <div className="underline"></div>
      </div>
      {items.map((item) => listItem(item.id, { ...item }))}
      {children}
    </div>
  );
};

export default List;
