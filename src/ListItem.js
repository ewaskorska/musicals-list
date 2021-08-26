import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const ListItem = (props) => {
  const { id, title, img, desc } = props;
  const [showMore, setShowMore] = useState(false);

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
      <span>{props.children}</span>
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
      <button onClick={() => toggleShowMore()}>
        {showMore ? "show less" : "show more"}
      </button>
    </>
  );
};

export default ListItem;
