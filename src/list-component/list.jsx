import React from "react";

import ListItems from "../list-items-component/list-items";
import useToggle from "../hooks/useToggle";
import Form from "../form/form";

const List = ({ list, addTask, removeList, editListName, editTask }) => {
  const { listName, id, cards } = list;

  const [edit, toggleEdit] = useToggle(false);

  return (
    <div className="list">
      <div>
        {edit ? (
          <Form addStuff={editListName} id={id} toggleEdit={toggleEdit} />
        ) : (
          <h1 onClick={toggleEdit}>{listName}</h1>
        )}
      </div>

      <button onClick={() => removeList(id)}>Delete List</button>
      <ListItems cards={cards} removeList={removeList} editTask={editTask} />
      <Form addStuff={addTask} id={id} />
    </div>
  );
};

export default List;
