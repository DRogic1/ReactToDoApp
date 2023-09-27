import React, { useState } from "react";

const TasksList = () => {
  const [Task, setTask] = useState("");

  const handleOnChange = (e) => {
    setTask(e.target.value);
    console.log("task.....", Task);
  };
  return <div>Bzvz</div>;
};

export default TasksList;
