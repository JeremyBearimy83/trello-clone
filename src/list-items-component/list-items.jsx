import React from "react";
import ListItem from "../list-item-component/list-item";

const ListItems = ({ cards, removeList, editTask }) => {
  return (
    <div className="list-item">
      <ul>
        {cards.map((card) => (
          <li>
            <ListItem
              key={card.id}
              task={card.task}
              removeList={removeList}
              editTask={editTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
