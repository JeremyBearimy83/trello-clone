import React from "react";

import Form from "./form";
import "../Styles/addList.scss";

export default function AddList({ listsLength, addListHandler }) {
  const message = listsLength ? "Add another list" : "Add a list";

  return (
    <div className="add-list">
      <input
        style={{ display: "none" }}
        className="add-list__checkbox"
        type="checkbox"
        id="add-list"
      />

      <div className="add-list__label">
        <label htmlFor="add-list">
          <div className="add-list__text">
            <span>+</span> {message}
          </div>
        </label>
        <Form addStuff={addListHandler} />
      </div>
    </div>
  );
}
