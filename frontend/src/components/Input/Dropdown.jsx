import React, { useContext } from "react";
import "./Input.css";
import { StudentsContext } from "../../context/StudentsContext";

const Dropdown = ({ name }) => {
  const { details, setDetails, gender } = useContext(StudentsContext);

  const handleChange = (e) => {
    setDetails({
      ...details,
      [name]: e.target.value,
    });
  };

  return (
    <div className="dropdown">
      <select
        name={name}
        id={name}
        required
        value={details[name]}
        onClick={(e) => handleChange(e)}
      >
        {/* {gender.map((value, index) => {
          return (
            <option value={value} key={index}>
              {value}
            </option>
          );
        })} */}
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default Dropdown;
