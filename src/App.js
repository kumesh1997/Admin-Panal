import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from "./Components/navbar/Navbar";
import {Landing} from "./Components/LandingPage/Landing";
import DeliveryModal from './BaseComponents/DeliveryModal';

function App() {
  return (
    <div>
      <Router>
        <Navbar name="Tharindu kumesh" nofify_count={25}/>
        <Routes>
          <Route path='/' element={<Landing />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
