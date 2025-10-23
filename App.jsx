import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import HRpolicy from './pages/hrpolicy';
import Employeepolicy from './pages/Employeepolicy';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Example from './pages/Example';

function Policy() {
  return (
    <div>
      <h1>Policy</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/policy/hrpolicy">HR Policy</Link> |{" "}
        <Link to="/policy/epolicy ">Employee policy</Link>
      </nav> 
      <Outlet /> 
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}

          <div>
      <img src="./images/Cross.png"   alt="My Image"   />
    </div>
      <nav>
        <Link to="/">Home</Link>               |{" "}
        <Link to="/policy">Policy</Link>       |{" "}
        <Link to="/contact">Contact</Link>     |{" "}
        <Link to="/login">Login</Link>         |{" "}        
        <Link to="/about">About</Link>         

               
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/policy" element={<Policy />}>
          <Route path="hrpolicy" element={<HRpolicy />} />
          <Route path="epolicy" element={<Employeepolicy />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        
        <Route path="/about" element={<About />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;