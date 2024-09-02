import React, { useContext } from 'react';
import './StudentForm.css'; 
import Input from '../Input/Input';
import Header from '../Header/Header';
import Textarea from '../Input/Textarea';
import Dropdown from '../Input/Dropdown';
import { StudentsContext } from '../../context/StudentsContext';

const StudentForm = () => { 

  const { details } = useContext(StudentsContext)
  const apiUrl = "http://localhost:8000"

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(details);
  
    const formData = new FormData();
  
    for (let key in details) {
      formData.append(key, details[key]);
    }
  
    try {
      const response = await fetch(`${apiUrl}/addStudent`, {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        console.log("Student Added Successfully");
      } else {
        console.log("Error while adding student");
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  



    return (
        <div>
          <Header/>
          <form className="form-container" onSubmit={onSubmitHandler}>
            <h2>Students Details Form</h2>
            <p className='title'>Personal Details</p>
            <Input type="text" placeholder="Your First Name" name="firstName" labelName="First Name" />
            <Input type="text" placeholder="Your Last Name" name="lastName" labelName="Last Name" />
            <Input type="text" placeholder="Your age" name="age" labelName="Age" />
            <Input type="date" placeholder="Your DOB" name="dob" labelName="DOB" />
            <Dropdown name="gender" />
            <Input type="text" placeholder="Your Aadhar Number" name="aadhar" labelName="Aadhar Number" />
            <Input type="text" placeholder="Your Phone Number" name="mobile" labelName="Phone Number" />
            <Input type="email" placeholder="Your Email" name="email" labelName="Email" />

            <p className='title'>Educational Details</p>
            <Input type="text" placeholder="Your College Name" name="collegeName" labelName="College Name" />
            <Input type="text" placeholder="Your Course Name" name="department" labelName="Course Name" />
            <Input type="text" placeholder="Your Course Year" name="collegeYear" labelName="Course Year" />
            <Input type="text" placeholder="Your Passingout Year" name="passoutYear" labelName="Passingout Year" />
            <Input type="text" placeholder="Your Register Number" name="registerNum" labelName="Register Number" />
            <Textarea placeholder="Your College Address" name="collegeAddress" label="College Address" />

            <p className='title'>Parents Details</p>
            <Input type="text" placeholder="Your Parents Number" name="parentsMobileNumber" labelName="Parents Phone Number" />
            <Textarea placeholder="Your Parents Address" name="parentsAddress" label="Parents Address" />

            <p className='title'>Residential Details</p>
            <Input type="text" placeholder="Your Residency Name" name="residentialName" labelName="Residency Name" />
            <Textarea placeholder="Your Residential Address" name="presentResidentialAddress" label="Residential Address" />

            <p className='title'>Other Details</p>
            <Input type="text" placeholder="Your Previous Case Count" name="caseCount" labelName="Previous Case Count" />
            <Input type="text" placeholder="Your Vehicle Number" name="vehicleNumber" labelName="Vehicle Number" />
            <Input type="file" placeholder="Your Photo" name="image" labelName="Photo " />
            <button type="submit">Submit</button>
          </form>
        </div>
    );
};

export default StudentForm;
