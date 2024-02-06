import React from 'react'
import ReactDOM from 'react-dom/client'
 
import Homepage from './components/Homepage.jsx'
import ListGroup from './components/ListGroup.jsx'
 
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import NoPage from './pages/NoPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Homepage color="red" />
    <ListGroup />

    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route  path="/Home" element={<Home />}></Route>
        <Route  path="/About" element={<About />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
