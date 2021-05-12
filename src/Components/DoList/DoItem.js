import React from "react";
import "./DoItem.css";

function DoItem(props) {
  return (
    <li className="item-row">
      <input
        className="check-off"
        type="checkbox"
        checked={!props.active}
        name="mark-done"
        key={props.index}
        onChange={() => props.toggleActive(props.id)}
      />
      <label
        htmlFor="mark-done"
        className={props.active === true ? "item" : "item-done"}
      >
        {props.item}
      </label>
      <button className="delete" onClick={() => props.deleteItem(props.id)}>
        X
      </button>
    </li>
  );
}

export default DoItem;
