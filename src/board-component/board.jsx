import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import List from "../list-component/list";
import Form from "../form/form";

const Board = () => {
  const [lists, setLists] = useState([]);

  const addList = (listName) => {
    setLists([...lists, { listName: listName, cards: [], id: uuid() }]);
  };

  const removeList = (listId) => {
    setLists(lists.filter((list) => list.id !== listId));
  };

  const addTask = (task, listId) => {
    setLists(
      lists.map((list) =>
        list.id === listId
          ? {
              ...list,
              cards: [
                ...list.cards,
                { task: task, completed: false, id: uuid() },
              ],
            }
          : list
      )
    );
  };

  const editListName = (newName, listId) => {
    setLists(
      lists.map((list) =>
        list.id === listId ? { ...list, listName: newName } : list
      )
    );
  };

  const editTask = (newTask, listId, cardId) => {
    setLists(
      lists.map((list) =>
        list.id === listId
          ? list.cards.map((card) =>
              card.id === cardId ? { ...card, task: newTask } : card
            )
          : list
      )
    );
  };

  return (
    <div className="Board">
      <div style={{ display: "flex" }}>
        {lists.map((list) => (
          <List
            list={list}
            addTask={addTask}
            removeList={removeList}
            editListName={editListName}
            editTask={editTask}
          />
        ))}
        <div>
          <h1>Add New List</h1>
          <Form addStuff={addList} />
        </div>
      </div>
    </div>
  );
};

export default Board;
