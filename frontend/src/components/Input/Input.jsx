import React, { useContext } from "react";
import "./Input.css";
import { StudentsContext } from "../../context/StudentsContext";

const Input = ({ labelName, placeholder, type, name }) => {
  const { details, setDetails } = useContext(StudentsContext);

  const handleChange = (e) => {
    const value = type === "file" ? e.target.files[0] : e.target.value;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  return (
    <div className="input-group">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        className="input"
        accept={type === "file" ? ".jpeg, .jpg, .png" : null}
        required
        value={type !== "file" ? details[name] : undefined}
        onChange={handleChange}
      />
      <label htmlFor={name} className="user-label">
        {labelName}
      </label>
    </div>
  );
};

export default Input;
