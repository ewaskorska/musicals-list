import React from "react";
import PersonalListItem from "../PersonalListItem";
import List from "../List";

const PersonalList = ({ listTitle, removeItem, list, clearList }) => {
  const listItem = (id, props) => <PersonalListItem key={id} {...props} />;

  return (
    <List items={list} listTitle={listTitle} listItem={listItem}>
      <button onClick={() => clearList()}>remove all</button>
    </List>
  );
};

export default PersonalList;
