
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <Router>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/about' element={<About />} />\
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
