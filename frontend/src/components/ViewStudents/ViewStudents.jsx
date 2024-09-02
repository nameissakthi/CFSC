import React, { useEffect, useState } from 'react';
import './ViewStudents.css'; // Assuming you have the styles in this file
import Header from '../Header/Header';
import axios from 'axios'

const initialStudents = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        mobileNumber: '1234567890',
        aadhar: '111122223333',
        gender: 'Male',
        dob: '2000-01-01',
        age: 24,
        courseName: 'Computer Science',
        courseYear: '3rd year',
        passingOutYear: 2025,
        registerNumber: 'CS20251234',
        collegeName: 'XYZ University',
    }
];

const StudentDetails = () => {
    
    const [students, setStudents] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/getStudent')
        .then((res) => setStudents(res.data))
        .catch(error => console.log(error))
    }, [students])

    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleViewDetails = (student) => {
        setSelectedStudent(student);
    };

    const handleCloseDetails = () => {
        setSelectedStudent(null);
    };

    const handleDeleteStudent = (studentId) => {
        const updatedStudents = students.filter(student => student.id !== studentId);
        setStudents(updatedStudents);
    };

    return (
        <div className="student-details-container">
            <Header/>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Mobile Number</th>
                        <th>College Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.firstName}</td>
                            <td>{student.mobile}</td>
                            <td>{student.collegeName}</td>
                            <td>
                                <button onClick={() => handleViewDetails(student)}>View Details</button>
                                <button onClick={() => handleDeleteStudent(student.id)} className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedStudent && (
                <div className="modal-overlay" onClick={handleCloseDetails}>
                    <div className="student-card" onClick={(e) => e.stopPropagation()}>
                        <div className="left-side">
                            <button className="close-button" onClick={handleCloseDetails}>X</button>
                            <h3>{selectedStudent.firstName} {selectedStudent.lastName}</h3>
                            <p><strong>Email:</strong> {selectedStudent.email}</p>
                            <p><strong>Mobile Number:</strong> {selectedStudent.mobile}</p>
                            <p><strong>Aadhar Number:</strong> {selectedStudent.aadhar}</p>
                            <p><strong>Gender:</strong> {selectedStudent.gender}</p>
                            <p><strong>Date of Birth:</strong> {selectedStudent.dob}</p>
                            <p><strong>Age:</strong> {selectedStudent.age}</p>
                            <p><strong>College Name:</strong> {selectedStudent.collegeName}</p>
                            <p><strong>Course Name:</strong> {selectedStudent.department}</p>
                            <p><strong>Course Year:</strong> {selectedStudent.collegeYear}</p>
                            <p><strong>Passing Out Year:</strong> {selectedStudent.passoutYear}</p>
                            <p><strong>Register Number:</strong> {selectedStudent.registerNum}</p>
                            <p><strong>Parents Address:</strong> {selectedStudent.parentsAddress}</p>
                            <p><strong>Parents Mobile Number:</strong> {selectedStudent.parentsMobileNumber}</p>
                            <p><strong>Residential Name:</strong> {selectedStudent.residentialName}</p>
                            <p><strong>Present Residential Address:</strong> {selectedStudent.presentResidentialAddress}</p>
                            <p><strong>Vehicle Number:</strong> {selectedStudent.vehicleNumber}</p>
                            <p><strong>Case Count:</strong> {selectedStudent.caseCount}</p>
                        </div>
                        <div>
                            <img src={selectedStudent.image} alt="Student Photo" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentDetails;
