import React, { useState } from "react";
import Tags from "../Tags";
import MainList from "../MainList";
import items from "../data";

const allTags = ["all", ...new Set(items.map((item) => item.tags).flat())];

function Home() {
  const [listItems, setListItems] = useState(items);
  const [tags, setTags] = useState(allTags);

  //to filtrowanie można zrobić po wielu wyrazach. Na razie niech będzie po jednym ale z listy
  const filterItems = (tag) => {
    if (tag === "all") {
      setListItems(items);
      return;
    }
    const newItems = items.filter((item) => {
      return item.tags.includes(tag);
    });
    setListItems(newItems);
  };

  return (
    <main>
      <section>
        <div>
          <h2>Fav Musicals List</h2>
          <div className="underline"></div>
        </div>
        <Tags filterItems={filterItems} tags={tags}></Tags>
        <button
          onClick={() => (window.localStorage.chosenIds = JSON.stringify([]))}
        >
          Clear My list
        </button>
        <MainList items={listItems}></MainList>
      </section>
    </main>
  );
}

export default Home;
