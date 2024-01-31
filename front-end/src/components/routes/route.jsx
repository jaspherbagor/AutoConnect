import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../pages/client/home';
const RouteWay = () => {
  return (
    <div>
        <Routes>
            {/* Client Routes Start*/}
            <Route path="/" element={<Home/>} />
            {/* Client Routes End */}
        </Routes>
    </div>
  )
}

export default RouteWay