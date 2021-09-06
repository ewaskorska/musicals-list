import React from "react";
import { useParams } from "react-router-dom";
import Actors from "../Actors";

const Musical = ({ items: musicals }) => {
  const { params } = useParams();
  const id = params.split("-")[0];
  const musical = musicals.filter((musical) => musical.id === +id)[0];
  const { title, img_medium, desc, cast } = musical;

  return (
    <div>
      <header>
        <img src={img_medium} alt={img_medium} />
        <span>{title}</span>
      </header>
      <p>{desc}</p>
      <section>
        <h2>Actors</h2>
        <div></div>
        <Actors cast={cast} />
      </section>
    </div>
  );
};

export default Musical;
