import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComp from './components/HomeComp/HomeComp';
import NavComp from './components/Nav/NavComp';

function App() {
  return (
    <div className="App">
      <Router>
        <NavComp />
        <Routes>
          <Route exact path='/' element={<HomeComp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
