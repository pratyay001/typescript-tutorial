import React from "react";
import './styles.css';
const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter the task" className="input__box" />
      <button className="input__submit" type="submit">Add</button>
    </form>
  );
};

export default InputField;
