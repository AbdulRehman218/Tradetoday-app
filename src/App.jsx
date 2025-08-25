import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'
import Navbar from './Components/Navbar'
import CustomCursor from './Components/CustomCursor'
import Home from './Pages/Home'
import About from './Pages/About'
import Pricing from './Pages/Pricing'
import Faq from './Pages/Faq'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Signup from './Pages/Sighnup'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  return (
    <Router>
      <div className='app-container bg-[rgb(2,21,49)] '>
        <div className='text-white'>
          <CustomCursor />
          <ToastContainer position="top-right" autoClose={2500} newestOnTop theme="dark" />
          {/* Only show Navbar when not on login or signup pages */}
          {currentPage !== 'login' && currentPage !== 'signup' && (
            <Navbar onNavigate={handleNavigation} currentPage={currentPage} />
          )}

          {currentPage === 'home' && (
            <>
              <Home onNavigate={handleNavigation} />
              <About />
              <Pricing onNavigate={handleNavigation} />
              <Faq />
              <Contact />
            </>
          )}

          {currentPage === 'login' && <Login onNavigate={handleNavigation} />}
          {currentPage === 'signup' && <Signup onNavigate={handleNavigation} />}

          {currentPage === 'home' && <Footer />}
        </div>
      </div>
    </Router>
  )
}

export default App
