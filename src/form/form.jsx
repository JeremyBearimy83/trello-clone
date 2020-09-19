import React from "react";
import useFormState from "../hooks/useFormState";

const Form = ({ addStuff, id, toggleEdit }) => {
  const [value, handleChange, handleReset] = useFormState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStuff(value, id);
    handleReset();
    if (toggleEdit) {
      toggleEdit();
    }
  };
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
