import React from 'react';
import './MainPage.css';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="MainPage-menu">
        <div className="MainPage-menu-item">
          <Link to='/addstudent'>
            <img src="https://img.icons8.com/ios-filled/50/000000/add-user-male.png" alt="Add Student" />
            <p>Add Student</p>
          </Link>
        </div>
        <div className="MainPage-menu-item">
          <Link to="/viewstudents">
            <img src="https://img.icons8.com/ios-filled/50/000000/classroom.png" alt="View Students" />
            <p>View Students</p>
          </Link>
        </div>
        <div className="MainPage-menu-item">
          <img src="https://img.icons8.com/ios-filled/50/000000/university.png" alt="View Colleges" />
          <p>View Colleges</p>
        </div>
        <div className="MainPage-menu-item">
          <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="Maps" />
          <p>Maps</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
