import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { FaEye } from "react-icons/fa";

const ListItem = (props) => {
  const { id, title, img_small, desc } = props;
  const [showMore, setShowMore] = useState(false);
  const [isToWatch, setIsToWatch] = useState(false);

  const handleToWatch = () => {
    updateList("toWatch");
    setIsToWatch(!isToWatch);
  };

  const updateList = (listName) => {
    //get from localStorage
    let storageIds = localStorage.getItem(listName);

    //create if doesn't exist
    if (!storageIds) {
      storageIds = [];
    } else {
      storageIds = JSON.parse(storageIds);
    }
    //if id doesn't exist -> add
    if (!containsId(storageIds)) {
      localStorage.setItem(listName, JSON.stringify(addId(storageIds)));
    }
    //if exists -> remove
    else {
      localStorage.setItem(listName, JSON.stringify(removeId(storageIds)));
    }
    console.log(listName, localStorage.getItem(listName));
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
  const getTitleWithPlus = () => {
    return title.replaceAll(" ", "+");
  };
  const url = `/musical/${getTitleWithPlus()}`;

  function truncate(str, wordsNum) {
    return str.split(" ").splice(0, wordsNum).join(" ").replace(/,\s*$/, "");
  }

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <>
      <button onClick={handleToWatch}>
        <FaEye />
      </button>
      <Rating id={id}></Rating>
      <Link to={url}>
        <article key={id}>
          <div>
            <img src={img_small} alt={title} />
          </div>
          <div>
            <header>
              <h4>{title}</h4>
            </header>
            {showMore ? (
              <>
                <p>{desc}</p>
              </>
            ) : (
              <>
                <p>{truncate(desc, 40) + "..."}</p>
              </>
            )}
          </div>
        </article>
      </Link>
      <span>{props.children}</span>
      <button onClick={() => toggleShowMore()}>
        {showMore ? "show less" : "show more"}
      </button>
    </>
  );
};

export default ListItem;
