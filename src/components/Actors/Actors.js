import React from "react";
import PropTypes from "prop-types";
import { actors } from "../data";
import Actor from "../Actor/Actor";

import clsx from "clsx";

import styles from "../Actors/actors.module.scss";

const Actors = ({ cast, className, children }) => {
  const getActorsWithRoles = () => {
    const actorsIds = Object.keys(cast).map((id) => +id);
    const filtered = Array.from(
      actors.filter((actor) => actorsIds.includes(actor.id))
    );
    const withRole = filtered.map((actor) => {
      actor["role"] = cast[actor.id];
      return actor;
    });
    return withRole;
  };
  return (
    <div className={clsx(className, styles.root)}>
      <h3>Cast</h3>
      <Actor data={getActorsWithRoles()} />
      {children}
    </div>
  );
};

Actors.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Actors;
