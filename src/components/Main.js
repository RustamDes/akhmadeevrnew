// components/Main.js
import React from "react";
import UserInfo from "./UserInfo";
import Items from "./Items/Items";

const Main = () => {
  return (
    <div className="main_container">
      <UserInfo />
      <Items />
    </div>
  );
};

export default Main;
