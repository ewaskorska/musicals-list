import React, { useState } from "react";
import items from "./data";
import Watched from "./Pages/Watched";

const WatchedWrapper = () => {
  const getWatchedIds = () => {
    const parsedVal = localStorage.getItem("watched");
    const watched = JSON.parse(parsedVal === undefined ? null : parsedVal);
    return watched ? Object.keys(watched).map((el) => +el) : {};
  };

  const [watchedIds, setWatchedIds] = useState(getWatchedIds());

  //update watchedIds removing itemId
  const removeItem = (itemId) => {
    setWatchedIds((watchedIds, props) =>
      watchedIds.filter((id) => {
        return id !== itemId;
      })
    );
    //remove from localStorage item with given id
    const watched = JSON.parse(localStorage.getItem("watched"));
    delete watched[itemId];
    localStorage.setItem("watched", JSON.stringify(watched));
  };

  const clearList = () => {
    setWatchedIds(() => []);
    localStorage.setItem("watched", JSON.stringify({}));
  };

  const getSelectedItems = () => {
    return items.filter((item) => watchedIds.includes(item.id));
  };

  return (
    <Watched
      listTitle="Musicals I've seen"
      removeItem={removeItem}
      list={getSelectedItems()} //array of whole items
      clearList={clearList}
    ></Watched>
  );
};

export default WatchedWrapper;
