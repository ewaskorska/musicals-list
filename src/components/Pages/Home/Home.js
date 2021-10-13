import React, { useState } from "react";
import PropTypes from "prop-types";
import Tags from "../../Tags/Tags";
import List from "../../List/List";
import ListItem from "../../ListItem/ListItem";

import clsx from "clsx";

import styles from "./home.module.scss";

const Home = ({ items, className, children }) => {
  const allTags = ["all", ...new Set(items.map((item) => item.tags).flat())];
  const [listItems, setListItems] = useState(items);
  const [tags] = useState(allTags);

  //to filtrowanie można zrobić po wielu wyrazach. Na razie niech będzie po jednym ale z listy
  const filterItems = (tag) => {
    setListItems(() =>
      tag === "all" ? items : items.filter((item) => item.tags.includes(tag))
    );
  };

  const listItem = (id, props) => <ListItem key={id} {...props} />;

  return (
    <main className={clsx(className, styles.root)}>
      <section>
        <List
          items={listItems}
          listTitle="Fav Musicals List"
          listItem={listItem}
        >
          <Tags filterItems={filterItems} tags={tags}></Tags>
        </List>
      </section>
      {children}
    </main>
  );
};

Home.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Home;
