import React, { createContext, useEffect, useState } from "react";
export const StudentsContext =  createContext(null);

const StudentsContextProvider = (props) => {
    const gender = ["Male", "Female","Others"]

    const [details, setDetails] = useState(
        {
          image: "",
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          aadhar: "",
          gender: "",
          age: "",
          department: "",
          collegeYear: "",
          passoutYear: "",
          registerNum: "",
          collegeName: "",
          parentsAddress: "",
          parentsMobileNumber: "",
          presentResidentialAddress: "",
          residentialName: "",
          vehicleNumber: "",
          caseCount: ""
        }
      )

    const contextValue = {
        gender,
        details, setDetails,
    };
    return (
        <StudentsContext.Provider value={contextValue}>
            {props.children}
        </StudentsContext.Provider>
    )
}

export default StudentsContextProvider;