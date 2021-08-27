import React, { useState } from "react";
import ListItem from "./ListItem";

const PersonalListItem = (props) => {
  console.log(props);

  return (
    <ListItem {...props}>
      <button onClick={() => props.removeItem(props.id)}>not interested</button>
    </ListItem>
  );
};

export default PersonalListItem;
