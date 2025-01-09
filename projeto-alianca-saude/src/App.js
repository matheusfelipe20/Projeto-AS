import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './variables/Colors.css';
import Home from './pages/home/Home';
import About from './pages/aboutBusiness/About';
import Header from './components/header/HeaderDesktop';
import Footer from './components/footer/Footer';
import TestMedicIMC from './pages/testsConsults/imc/TestIMC';

function App() {
  return (
    <Router basename="/Projeto-AS">
      <MainContent />
    </Router>
  );
}

function MainContent() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Routes of tests medic */}
        <Route path="/test$medic/IMC/" element={<TestMedicIMC />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
