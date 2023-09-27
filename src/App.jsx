import React, { useState } from "react";
import "./App.css";
import { FormComp } from "./components";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleOnChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskList(task);
  };

  return (
    <div className="main-container">
      <h1>My tasks</h1>

      <FormComp />
    </div>
  );
}

export default App;
