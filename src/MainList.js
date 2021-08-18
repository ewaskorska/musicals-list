import React from "react";
import ListItem from "./ListItem";

const MainList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <ListItem key={item.id} {...item}></ListItem>;
      })}
    </div>
  );
};

export default MainList;
