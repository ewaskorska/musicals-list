import React, { useState, useEffect } from "react";
import items from "./data";
import Watched from "./Pages/Watched";

const WatchedWrapper = () => {
  const getList = (listName) => {
    const storageIds = JSON.parse(localStorage.getItem(listName));
    console.log(storageIds);
    return !storageIds
      ? []
      : items.filter((item) => storageIds.includes(item.id));
  };

  const [watchedIds, setWatchedIds] = useState(getList("watched"));

  const removeItem = (itemId) => {
    setWatchedIds((watchedIds, props) =>
      watchedIds.filter((item) => {
        return item.id !== itemId;
      })
    );
  };

  const clearList = () => {
    setWatchedIds(() => []);
  };

  useEffect(() => {
    localStorage.watchedIds = JSON.stringify(watchedIds.map((item) => item.id));
  }, [watchedIds]);

  return (
    <Watched
      listTitle="Musicals I've seen"
      removeItem={removeItem}
      list={watchedIds}
      clearList={clearList}
    ></Watched>
  );
};

export default WatchedWrapper;
