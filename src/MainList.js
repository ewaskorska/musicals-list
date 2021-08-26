import React from "react";
import MainListItem from "./MainListItem";

const MainList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <MainListItem key={item.id} {...item}></MainListItem>;
      })}
    </div>
  );
};

export default MainList;
