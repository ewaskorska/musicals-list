import React, { useState, useEffect } from "react";

const Musical = (props) => {
  const { id, title, tags, img, desc } = props;
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    !isAdded ? addId() : removeId();
    setIsAdded(!isAdded);
    console.log(window.localStorage);
  };

  const addId = () => {
    if (window.localStorage.chosenItems === undefined) {
      window.localStorage.chosenItems = JSON.stringify([]);
    }
    const updatedItems = [...JSON.parse(window.localStorage.chosenItems), id];
    window.localStorage.chosenItems = JSON.stringify(updatedItems);
  };

  const removeId = () => {
    const chosenItems = JSON.parse(window.localStorage.chosenItems);
    if (chosenItems === undefined || chosenItems === null) return;
    const updatedItems = chosenItems.filter((itemId) => itemId !== id);
    window.localStorage.chosenItems = JSON.stringify(updatedItems);
  };

  return (
    <article key={id}>
      <div>
        <img src={img} alt={title} />
        <button onClick={handleClick}>
          <i
            className={
              isAdded
                ? `fas fa-clipboard-list on-list`
                : `fas fa-clipboard-list not-on-list`
            }
          ></i>
        </button>
      </div>
      <div>
        <header>
          <div>*****</div>
          <h4>{title}</h4>
        </header>
        <p>{desc}</p>
      </div>
    </article>
  );
};

export default Musical;
