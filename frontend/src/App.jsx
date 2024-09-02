import { useState } from 'react'
import './App.css'
import LoginSignup from './pages/LoginSignup/LoginSignup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import Footer from './components/Footer/Footer'
import StudentForm from './components/StudentsForm/StudentForm'
import About from './pages/About/About'
import ViewStudents from './components/ViewStudents/ViewStudents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup/>} />
        <Route path='/home' element={<MainPage/>}/>
        <Route path='/about' element={<About/>} />
        <Route path="/addstudent" element={<StudentForm/>} />
        <Route path='/viewstudents' element={<ViewStudents/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
