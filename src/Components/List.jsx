import React, { useRef } from "react";
import ListItem from "./ListItem";
import ListActions from "./ListActions";

import useToggle from "../hooks/useToggle";
import Form from "./form";
import useClickOut from "../hooks/useClickout";

import "../Styles/list.scss";

export function List({
  list,
  addTaskHandler,
  deleteListHandler,
  nameChangeHandler,
  editTask,
}) {
  const { listName, id, cards } = list;

  const [showDropDown, setShowDropDown] = useToggle(false);

  const dropdown = useRef();

  useClickOut(dropdown, () => {}, setShowDropDown);

  const [edit, toggleEdit] = useToggle(false);

  return (
    <div className="list">
      <div className="list__top">
        {edit ? (
          <Form addStuff={nameChangeHandler} id={id} toggleEdit={toggleEdit} />
        ) : (
          <h1 onClick={toggleEdit}>{listName}</h1>
        )}
      </div>

      <div className="list__dropdown">
        <span
          onClick={() => setShowDropDown(true)}
          className="list__dropdown-icon"
        >
          <i class="fas fa-ellipsis-h"></i>
        </span>
        <ListActions
          ref={dropdown}
          open={showDropDown}
          closeHandler={() => setShowDropDown(false)}
          deleteListHandler={deleteListHandler}
          id={id}
        />
      </div>

      {/*<button onClick={() => removeList(id)}>Delete List</button>*/}
      {cards.map((card) => (
        <ListItem task={card.task} id={card.id} key={card.id} />
      ))}
      <Form addStuff={addTaskHandler} id={id} />
    </div>
  );
}

export default List;
