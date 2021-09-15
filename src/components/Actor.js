import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Actor = ({ data }) => {
  const [index, setIndex] = useState(0);
  const { name, role, short, img } = data[index];
  const nextActor = () => {
    setIndex((index) => (index === data.length - 1 ? 0 : index + 1));
  };
  const prevActor = () => {
    setIndex((index) => (index === 0 ? data.length - 1 : index - 1));
  };

  return (
    <article>
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
  );
};

export default Actor;
