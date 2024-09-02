import React from 'react'
import back from '../../assets/back.svg'
import './Header.css'

const Header = () => {
  function goBack(){
    history.back()
  }
  return (
    <header>
        <div>
            <img src={back} alt="Back" onClick={goBack}/>
        </div>
        <div>
            <img src="https://img.icons8.com/ios-filled/50/000000/add-user-male.png" alt="Add Student" />
            <span>Add Student</span>
        </div>
    </header>
  )
}

export default Header