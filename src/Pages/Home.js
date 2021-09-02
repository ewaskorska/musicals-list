import React, { useState } from "react";
import Tags from "../Tags";
import List from "../List";
import ListItem from "../ListItem";

function Home({ items }) {
  const allTags = ["all", ...new Set(items.map((item) => item.tags).flat())];
  const [listItems, setListItems] = useState(items);
  const [tags] = useState(allTags);

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

  const listItem = (id, props) => <ListItem key={id} {...props} />;

  return (
    <main>
      <section>
        <Tags filterItems={filterItems} tags={tags}></Tags>
        <button onClick={() => localStorage.clear()}>
          Clear All Local Storage
        </button>
        <List
          items={listItems}
          listTitle="Fav Musicals List"
          listItem={listItem}
        />
      </section>
    </main>
  );
}

export default Home;
