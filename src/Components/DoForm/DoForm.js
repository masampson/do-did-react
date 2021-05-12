import React, { useState } from "react";
import "./DoForm.css";

function DoForm(props) {
  const [enteredValue, setEnteredValue] = useState("");

  const inputMonitor = (e) => {
    setEnteredValue(e.target.value);
  };

  const submitItem = (e) => {
    e.preventDefault();
    if (enteredValue.trim().length === 0) {
      alert("Please enter valid item.");
    }
    props.addToDo(enteredValue);
    setEnteredValue("");
  };

  return (
    <form action="#" className="input-items" onSubmit={submitItem}>
      <input
        type="text"
        id="do-input"
        value={enteredValue}
        placeholder="What do you need to do?"
        onChange={inputMonitor}
      />
      <button type="submit" htmlFor="do-input" id="do-button" value="Do">
        Do
      </button>
    </form>
  );
}

export default DoForm;
