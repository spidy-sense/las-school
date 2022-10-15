import './App.css';
import Home from './Pages/home/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/register/Register';
import Login from './Pages/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/contact" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
