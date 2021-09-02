import React from "react";
import { useParams } from "react-router-dom";

const Musical = ({ items }) => {
  const { params } = useParams();
  const id = params.split("-")[0];
  const item = items.filter((item) => item.id === +id)[0];
  const { title, img_medium, desc } = item;
  return (
    <div>
      <header>
        <img src={img_medium} alt={title} />
        <span>{title}</span>
      </header>
      <p>{desc}</p>
      <section>Tu będzie ten slider</section>
    </div>
  );
};

export default Musical;
