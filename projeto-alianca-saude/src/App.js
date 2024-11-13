import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import './variables/Colors.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/found/NotFound';
import TestMedicIMC from './pages/tests/imc/TestIMC';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home/" element={<Home />} />
          <Route path="/Projeto-AS" element={<Navigate to="/home/" />} />
          <Route path="/about/" element={<About />} />

          {/* Routes of tests medic */}

          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/test$medic/IMC/" element={<TestMedicIMC/>} />


          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
