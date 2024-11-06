import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar'
// import Header from './Components/Header/Header'
// import Services from './Components/Services/Services'
import Work from './Components/Works/Work'
import Footer from './Components/Footer/Footer'
import Home from './Components/Pages/Home'
import Skills from './Components/Pages/Skills'
import Certifications from './Components/Pages/Certifications'
import Projects from './Components/Pages/Projects'
import Education from './Components/Pages/Education'
import Internships from './Components/Pages/Internships'
//import Services from './Components/Services/Services'
function App() {
  return (
   
      <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/certifications' element={<Certifications/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/education' element={<Education/>}></Route>
        <Route path='/internships' element={<Internships/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      </>
        
       
        
  )
}

export default App