import React from "react";
import Button from "react-bootstrap/Button";

const ButtonComp = () => {
  const handleDisplayAll = () => {};
  return (
    <div className="btns">
      <Button
        variant="primary"
        onClick={handleDisplayAll}
      >
        All
      </Button>
      <Button variant="primary">Active</Button>
      <Button variant="primary">Completed</Button>
    </div>
  );
};

export default ButtonComp;
