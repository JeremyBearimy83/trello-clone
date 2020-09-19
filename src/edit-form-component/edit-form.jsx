import React from "react";
import useFormState from "../hooks/useFormState";

const Form = ({ addStuff, id }) => {
  const [value, handleChange, handleReset] = useFormState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStuff(value, id);
    handleReset();
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
