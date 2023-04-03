import React from "react";

const Item = ({ name, subtitle, img, onClick }) => {
  return (
    <div className="item_container" onClick={onClick}>
      <div className="item_background"></div>
      <div className="item_name">{name}</div>
      <div className="item_case">{subtitle}</div>
    </div>
  );
};

export default Item;
