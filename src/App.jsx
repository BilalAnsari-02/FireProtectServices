import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Home from './pages/Home'
import Services from './pages/Services'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
    <div className='min-h-screen flex flex-col'>
      <Navbar/> 
      <div className='grow'>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/privacy' element={<PrivacyPolicy/>}/>
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
          </div>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
