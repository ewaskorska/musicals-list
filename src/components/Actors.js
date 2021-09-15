import React from "react";
import { actors } from "./data";
import Actor from "./Actor";

const Actors = ({ cast }) => {
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
    <div>
      <h3>Cast</h3>
      <Actor data={getActorsWithRoles()} />
    </div>
  );
};

export default Actors;
