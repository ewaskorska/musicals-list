import React, { useContext, useState } from "react";
import { ListItemContext } from "./ContextList";

const PersonalListItem = (props) => {
  const { id, title, tags, img, desc } = props;
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);
  const { removeItem } = useContext(ListItemContext);

  function truncate(str, wordsNum) {
    return str.split(" ").splice(0, wordsNum).join(" ").replace(/,\s*$/, "");
  }

  return (
    <article>
      <img src={img} alt={title} />
      <footer>
        <div>
          <h4>{title}</h4>
        </div>
        {showMore ? (
          <>
            <p>{desc}</p>
          </>
        ) : (
          <>
            <p>{truncate(desc, 40) + "..."}</p>
          </>
        )}
        <button onClick={() => toggleShowMore()}>
          {showMore ? "show less" : "show more"}
        </button>
        <button onClick={() => removeItem(id)}>not interested</button>
      </footer>
    </article>
  );
};

export default PersonalListItem;
