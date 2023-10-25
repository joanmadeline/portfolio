
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <Router>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
