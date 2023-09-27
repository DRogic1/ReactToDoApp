import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonComp from "./ButtonComp";

const FormComp = () => {
  const [task, setTask] = useState({ task: "" });
  const [tasksList, setTasksList] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleOnChange = (e) => {
    setTask(e.target.value);
  };
  console.log("task.....", task);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasksList([...tasksList, task]);
  };
  console.log("lista......", typeof tasksList);

  const handleCheckboxChange = () => {
    return setChecked(!checked);
  };

  return (
    <div>
      <div>
        <ButtonComp />

        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Add task"
            onChange={handleOnChange}
          />
          <Button
            variant="secondary"
            type="submit"
          >
            Add
          </Button>
        </Form>
      </div>
      <div>
        <ul>
          {tasksList.map((item) => {
            return (
              <li
                key={item}
                className="list"
                style={{ textDecoration: "none" }}
              >
                <div style={{ display: "flex" }}>
                  <input
                    type="checkbox"
                    id="html"
                    name="fav_language"
                    value={item}
                    onChange={handleCheckboxChange}
                  />
                  <h3 className={checked ? "checked" : ""}>{item}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FormComp;
