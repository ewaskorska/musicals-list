import React, { useContext } from "react";
import PersonalListItem from "../PersonalListItem";
import List from "../List";
import { ListItemContext } from "../ContextList";

const PersonalList = ({ items, listTitle }) => {
  const { list, clearList } = useContext(ListItemContext);
  const listItem = (id, props) => <PersonalListItem key={id} {...props} />;

  return (
    <List items={list} listTitle={listTitle} listItem={listItem}>
      <button onClick={() => clearList()}>remove all</button>
    </List>
  );
};

export default PersonalList;
