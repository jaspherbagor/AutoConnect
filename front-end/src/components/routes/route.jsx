import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../pages/client/home';
import About from '../pages/client/about';
import Services from '../pages/client/services';
import Faqs from '../pages/client/faqs';
import Contact from '../pages/client/contact';
import Login from '../pages/client/login';
import Register from '../pages/client/register';
//services
import periodicServices from '../pages/client/services/periodic-services';


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
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            {/* Services Start */}
            <Route path="/periodic-services" element={<periodicServices/>} />
            {/* Services End */}

            {/* Client Routes End */}
        </Routes>
    </div>
  )
}

export default RouteWay