import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/contact" element={<h1>contact</h1>} />

        </Routes>

      </div>
    </Router>
 
  );
}


export default App;