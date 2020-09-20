import React from "react";
import "../Styles/item.scss";

export default function ListItem({ task }) {
  return (
    <div className="item">
      <div className="item__text"> {task}</div>
    </div>
  );
}
