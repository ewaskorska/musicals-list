import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import clsx from "clsx";

import styles from "./actor.module.scss";

const Actor = ({ data, className, children }) => {
  const [index, setIndex] = useState(0);
  const { name, role, short, img } = data[index];
  const nextActor = () => {
    setIndex((index) => (index === data.length - 1 ? 0 : index + 1));
  };
  const prevActor = () => {
    setIndex((index) => (index === 0 ? data.length - 1 : index - 1));
  };

  return (
    <>
      <article className={clsx(className, styles.root)}>
        <div>
          <img src={img} alt={name} />
        </div>
        <h4>{name}</h4>
        <p>{role}</p>
        <p>{short}</p>
        <div>
          <button onClick={prevActor}>
            <FaChevronLeft />
          </button>
          <button>
            <FaChevronRight onClick={nextActor} />
          </button>
        </div>
      </article>
      {children}
    </>
  );
};

Actor.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Actor;
