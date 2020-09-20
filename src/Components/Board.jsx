import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import List from "./List";
import AddList from "./AddList";

import "../Styles/board.scss";

export function Board() {
  const [lists, setLists] = useState([]);

  const addListHandler = (listName) => {
    setLists([...lists, { listName: listName, cards: [], id: uuid() }]);
  };

  const deleteListHandler = (listId) => {
    setLists(lists.filter((list) => list.id !== listId));
  };

  const addTaskHandler = (task, listId) => {
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

  const nameChangeHandler = (newName, listId) => {
    setLists(
      lists.map((list) =>
        list.id === listId ? { ...list, listName: newName } : list
      )
    );
  };

  const editTaskHandler = (newTask, listId, cardId) => {
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
    <div className="board">
      {lists.map((list) => (
        <List
          list={list}
          addTaskHandler={addTaskHandler}
          deleteListHandler={deleteListHandler}
          nameChangeHandler={nameChangeHandler}
          editTaskHandler={editTaskHandler}
        />
      ))}
      {/*<div>
        <h1>Add New List</h1>
         <Form addStuff={addListHandler} />
      </div> */}
      <AddList addListHandler={addListHandler} listsLength={lists.length} />
    </div>
  );
}

export default Board;
