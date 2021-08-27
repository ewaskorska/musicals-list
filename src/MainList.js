import React from "react";
import MainListItem from "./MainListItem";
import List from "./List";
import ListItem from "./ListItem";

const MainList = ({ items, listTitle }) => {
  const listItem = (id, props) => <MainListItem key={id} {...props} />;

  return <List items={items} listTitle={listTitle} listItem={listItem} />;
};

export default MainList;
