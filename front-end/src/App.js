import './App.css';
import React, {useRef} from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteWay from './components/routes/route';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteWay />
      </BrowserRouter>
    </div>
  );
}

export default App;
