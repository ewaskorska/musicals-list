import React from "react";
import ListItem from "./ListItem";
import { FaTrashAlt } from "react-icons/fa";

const WatchedItem = (props) => {
  console.log(props);

  return (
    <ListItem {...props}>
      <button onClick={() => props.removeItem(props.id)}>
        <FaTrashAlt />
      </button>
    </ListItem>
  );
};

export default WatchedItem;
