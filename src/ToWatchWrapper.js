import React, { useState } from "react";
import items from "./data";
import Watched from "./Pages/Watched";

const ToWatchWrapper = () => {
  const getToWatch = () => {
    const toWatch = JSON.parse(localStorage.getItem("toWatch"));
    console.log(toWatch);
    return toWatch || [];
  };

  const [toWatch, setToWatch] = useState(getToWatch());

  //update toWatch removing itemId
  const removeItem = (itemId) => {
    setToWatch((toWatch, props) =>
      toWatch.filter((id) => {
        return id !== itemId;
      })
    );
    //update localStorage
    localStorage.setItem("toWatch", JSON.stringify(toWatch));
  };

  const clearList = () => {
    setToWatch(() => []);
    localStorage.setItem("toWatch", JSON.stringify(toWatch));
  };

  const getSelectedItems = () => {
    return items.filter((item) => toWatch.includes(item.id));
  };

  return (
    <Watched
      listTitle="Dying to see"
      removeItem={removeItem}
      list={getSelectedItems()} //array of whole items
      clearList={clearList}
    ></Watched>
  );
};

export default ToWatchWrapper;
