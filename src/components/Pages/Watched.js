import React from "react";
import WatchedItem from "../WatchedItem";
import List from "../List";

const Watched = ({ listTitle, removeItem, list, clearList }) => {
  const listItem = (id, props) => (
    <WatchedItem key={id} removeItem={removeItem} {...props} />
  );

  return (
    <List items={list} listTitle={listTitle} listItem={listItem}>
      <button onClick={() => clearList()}>remove all</button>
    </List>
  );
};

export default Watched;