import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home';
import {Contact} from './pages/Contact';
import {Navbar} from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1> Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
