import React, { useState } from "react";
import "./App.css";
import DoForm from "./DoForm/DoForm.js";
import DoItem from "./DoList/DoItem";
import DoTabs from "./DoTabs/DoTabs.js";

const TABS_MAP = {
  All: () => true,
  Active: (item) => item.active,
  Done: (item) => !item.active,
  Kill: () => true,
};

const TABS_NAMES = Object.keys(TABS_MAP);

function App(props) {
  const [toDoList, setToDoList] = useState(props.items);
  const [filterState, setFilterState] = useState("All");

  // Functions -------------------------------

  const addToDo = (enteredText) => {
    setToDoList((prevItems) => {
      const newList = [...prevItems];
      newList.unshift({
        value: enteredText,
        active: true,
        id: Math.random().toString(),
      });
      console.log(
        "New List:",
        newList,
        "Filtered List:",
        itemsList,
        TABS_MAP[filterState]
      );
      return newList;
    });
  };

  const deleteItem = (itemId) => {
    setToDoList((prevItems) => {
      const newList = prevItems.filter((item) => item.id !== itemId);
      return newList;
    });
  };

  const deleteAllDone = () => {
    setToDoList((prevItems) => {
      const newList = prevItems.filter((item) => item.active === true);
      return newList;
    });
  };

  const toggleActive = (id) => {
    const updatedList = toDoList.map((item) => {
      if (id === item.id) {
        return { ...item, active: !item.active };
      }
      return item;
    });
    setToDoList(updatedList);
  };

  // Component Lists ---------------------------------------

  const tabsList = TABS_NAMES.map((name) => (
    <DoTabs
      key={name}
      name={name}
      setFilterState={setFilterState}
      deleteAllDone={deleteAllDone}
    />
  ));

  const itemsList = toDoList
    .filter(TABS_MAP[filterState])
    .map((item) => (
      <DoItem
        item={item.value}
        active={item.active}
        id={item.id}
        key={item.id}
        toggleActive={toggleActive}
        deleteItem={deleteItem}
      ></DoItem>
    ));

  let content = <p className="placeholder">List is empty</p>;

  if (toDoList.length > 0) {
    content = <ul className="to-do-items">{itemsList}</ul>;
  }

  return (
    <div className="pad">
      <DoForm addToDo={addToDo}></DoForm>

      <div className="tabs-container">{tabsList}</div>

      <div>{content}</div>
    </div>
  );
}

export default App;
