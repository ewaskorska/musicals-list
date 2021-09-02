import React from "react";
import WatchedItem from "../WatchedItem";
import List from "../List";

const ToWatch = ({ listTitle, removeItem, list, clearList }) => {
  const listItem = (id, props) => <WatchedItem key={id} {...props} />;

  return (
    <List items={list} listTitle={listTitle} listItem={listItem}>
      <button onClick={() => clearList()}>remove all</button>
    </List>
  );
};

export default ToWatch;
