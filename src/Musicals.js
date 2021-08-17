import React from "react";
import Musical from "./Musical";

// const handleAddItem = () => {
//   toggleClass();
// };

const Musicals = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <Musical key={item.id} {...item}></Musical>;
      })}
    </div>
  );
};

export default Musicals;
