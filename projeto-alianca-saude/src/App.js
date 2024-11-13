import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    <Router basename="/Projeto-AS">
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Routes of tests medic */}
          <Route path="/test$medic/IMC/" element={<TestMedicIMC/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
