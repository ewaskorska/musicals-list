import React, { useContext, useState } from "react";
import { ListItemContext } from "./ContextList";
import ListItem from "./ListItem";

const PersonalListItem = (props) => {
  const { id } = props;
  const { removeItem } = useContext(ListItemContext);

  return (
    <ListItem {...props}>
      <button onClick={() => removeItem(id)}>not interested</button>
    </ListItem>
  );
};

export default PersonalListItem;
