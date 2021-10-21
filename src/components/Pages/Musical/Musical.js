import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Actors from "../../Actors/Actors";

import clsx from "clsx";

import styles from "./musical.module.scss";

const Musical = ({ items: musicals, className, children }) => {
  const { params } = useParams();
  const id = params.split("-")[0];
  const musical = musicals.filter((musical) => musical.id === +id)[0];
  const { title, img_medium, desc, cast } = musical;

  return (
    <div className={clsx(className, styles.root)} id="musical">
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
      {children}
    </div>
  );
};

Musical.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Musical;
