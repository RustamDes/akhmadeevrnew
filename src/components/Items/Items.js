import React from "react";

import Item from "../Item";
import { useNavigate } from "react-router-dom";
const array = [
  {
    name: "Open Investment",
    subtitle: "Program Loyalty",
    img: "EbaloDreaka",
    url: "ProgramLoyalty",
  },
  {
    name: "Open Investment",
    subtitle: "Pidoracc",
    img: "EbaloDreaka",
  },
  {
    name: "Open Investment",
    subtitle: "Pidoracc",
    img: "EbaloDreaka",
  },
  {
    name: "Open Investment",
    subtitle: "Pidoracc",
    img: "EbaloDreaka",
  },
  {
    name: "OpenBroker",
    subtitle: "Pidoracc",
    img: "EbaloDreaka",
  },
  {
    name: "OpenBroker",
    subtitle: "Pidoracc",
    img: "EbaloDreaka",
  },
  {
    name: "OpenBroker",
    subtitle: "Pidoracc",
    img: "EbaloDreaka",
  },
  {
    name: "OpenBroker",
    subtitle: "Pidoracc",
    img: "EbaloDreaka",
  },
];

const Items = () => {
  const navigate = useNavigate();

  const handleClick = (url) => {
    navigate(`/${url}`);
  };

  return (
    <div className="items_container">
      {array.map((item) => (
        <Item
          onClick={() => handleClick(item.url)}
          name={item.name}
          subtitle={item.subtitle}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default Items;
