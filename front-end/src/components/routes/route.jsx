import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../pages/client/home';
import About from '../pages/client/about';
import Services from '../pages/client/services';
const RouteWay = () => {
  return (
    <div>
        <Routes>
            {/* Client Routes Start*/}
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            {/* Client Routes End */}
        </Routes>
    </div>
  )
}

export default RouteWay