import React from "react";

const Card = (props) => {
  // console.log(props.name);
  // const name = props.name;
  return (
    <div>
      <h2 className="bg-black text-white">Cards props value: </h2>
      <h3>{props.name.id}</h3>
      <h3>{props.name.class}</h3>
    </div>
  );
};

export default Card;
