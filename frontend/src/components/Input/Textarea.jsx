import React,{ useContext } from "react";
import "./Input.css";
import { StudentsContext } from "../../context/StudentsContext";

const Textarea = ({ label, placeholder, name }) => {
  const { details, setDetails } = useContext(StudentsContext);

  const handleChange = (e) => {
    setDetails({
      ...details,
      [name]: e.target.value,
    });
  };

  return (
    <div className="input-group">
      <textarea
        name={name}
        id={name}
        cols="30"
        rows="5"
        placeholder={placeholder}
        className="input"
        required
        value={details[name]}
        onChange={(e)=>handleChange(e)}
      ></textarea>
      <label htmlFor={name} class="user-label">
        {label}
      </label>
    </div>
  );
};

export default Textarea;
