import React, { useContext } from "react";
import PersonalListItem from "../PersonalListItem";
import { ListItemContext } from "../ContextList";

const PersonalList = () => {
  const { list, clearList } = useContext(ListItemContext);
  return (
    <>
      <header>
        <h2>Personal List</h2>
        <div></div>
      </header>
      {list.map((item) => {
        return <PersonalListItem key={item.id} {...item}></PersonalListItem>;
      })}
      <button onClick={() => clearList()}>remove all</button>
    </>
  );
};

export default PersonalList;
