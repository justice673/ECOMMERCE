import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import NavBar  from './components/NavBar';
import Api from './pages/Api';

function App() {
  return (
  <Router>
      <NavBar/>
    <Routes>
      <Route path='/h' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/' element={<Api/>}/>
    </Routes>
  </Router>
  );
}

export default App;
