import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Upload from './pages/Upload';
import Guidelines from './pages/Guidelines';
import './styles/App.css';
import { Route, Routes, NavLink, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [type, setType] = useState(0) // 0-farmer 1-buyer
  const [login, setLogin] = useState(false) 
  const nav = useNavigate()

  return (
    <div className="App">
      <Navbar setLogin={setLogin}/>
      {/* <Products/> */}
      {/* <Dashboard/> */}
      {/* <Upload/> */}
      <Routes>
        <Route path='/dashboard' element={<Dashboard type={type}/>}/>
        <Route path='/upload' element={<Upload type={type}/>}/>
        <Route path='/register' element={<Register  login={login}/>}/>
        <Route path='/login' element={<Login login={login}/>}/>
        <Route path='/guidlines' element={<Guidelines/>}/>
        <Route path='/products' element={<Products/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
