import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../pages/client/home';
import About from '../pages/client/about';
import Services from '../pages/client/services';
import Faqs from '../pages/client/faqs';
import Contact from '../pages/client/contact';
import Login from '../pages/client/login';
const RouteWay = () => {
  return (
    <div>
        <Routes>
            {/* Client Routes Start*/}
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/faqs" element={<Faqs/>} />
            <Route path="/contact" element={<Contact/>} />
            {/* Client Routes End */}
        </Routes>
    </div>
  )
}

export default RouteWay