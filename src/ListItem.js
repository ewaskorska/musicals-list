import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const ListItem = (props) => {
  const { id, title, tags, img, desc } = props;
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    updateList();
    setIsAdded(!isAdded);
  };

  const updateList = () => {
    let chosenIds = window.localStorage.chosenIds;
    if (chosenIds === undefined) {
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

  const getTitleWithPlus = () => {
    return title.replaceAll(" ", "+");
  };
  const url = `/musical/${getTitleWithPlus()}`;

  return (
    <>
      <button onClick={handleClick}>
        <i
          className={
            isAdded
              ? `fas fa-clipboard-list on-list`
              : `fas fa-clipboard-list not-on-list`
          }
        ></i>
      </button>
      <Rating id={id}></Rating>
      <Link to={url}>
        <article key={id}>
          <div>
            <img src={img} alt={title} />
          </div>
          <div>
            <header>
              <h4>{title}</h4>
            </header>
            <p>{desc}</p>
          </div>
        </article>
      </Link>
    </>
  );
};

export default ListItem;
