import React, { useState } from "react";
import ListItem from "./ListItem";
import { FaClipboardList } from "react-icons/fa";

const MainListItem = (props) => {
  const { id } = props;
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    updateList();
    setIsAdded(!isAdded);
  };

  const updateList = () => {
    let chosenIds = window.localStorage.chosenIds;
    if (!chosenIds) {
      chosenIds = [];
    } else {
      chosenIds = JSON.parse(chosenIds);
    }
    if (!containsId(chosenIds)) {
      window.localStorage.chosenIds = JSON.stringify(addId(chosenIds));
    } else {
      window.localStorage.chosenIds = JSON.stringify(removeId(chosenIds));
    }
    console.log("chosenIds", window.localStorage.chosenIds);
  };

  const addId = (items) => {
    return [...items, id];
  };

  const removeId = (items) => {
    return items.filter((itemId) => itemId !== id);
  };

  const containsId = (array) => {
    return array.includes(id);
  };
  return (
    <ListItem {...props}>
      <button onClick={handleClick}>
        <FaClipboardList />
      </button>
    </ListItem>
  );
};

export default MainListItem;
