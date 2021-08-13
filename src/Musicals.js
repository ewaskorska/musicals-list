import React from "react";

const Musicals = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title, tags, img, desc } = item;
        return (
          <article key={id}>
            <img src={img} alt={title} />
            <div>
              <header>
                <div>*****</div>
                <h4>{title}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Musicals;
