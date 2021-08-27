import React, { useState, useEffect } from "react";
import items from "./data";
import PersonalList from "./Pages/PersonalList";

const ContextList = () => {
  const getPersonalList = () => {
    const chosenIds = JSON.parse(localStorage.chosenIds);
    return items.filter((item) => chosenIds.includes(item.id));
  };

  const [list, setList] = useState(getPersonalList());

  const removeItem = (itemId) => {
    setList((list, props) =>
      list.filter((item) => {
        return item.id !== itemId;
      })
    );
  };

  const clearList = () => {
    setList((list) => []);
  };

  useEffect(() => {
    localStorage.chosenIds = JSON.stringify(list.map((item) => item.id));
  }, [list]);

  return (
    <PersonalList
      listTitle="My Personal List"
      removeItem={removeItem}
      list={list}
      clearList={clearList}
    ></PersonalList>
  );
};

export default ContextList;
