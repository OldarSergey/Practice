import './App.css';
import Login from './Pages/Login';
import {Routes, Route} from 'react-router-dom'
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCenter from './Pages/InfoCenter';
import Image from 'react-bootstrap/Image';



function App() {
  
  const [showInfoCenterLink, setShowInfoCenterLink] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSuccessfulLogin = () => {
    setShowInfoCenterLink(true);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='App' style={{ backgroundColor:'#FFFFFF', }} >
      <Navbar expand="lg"  style={{backgroundColor:'#e6e6e6' }}>
        <div style={{ marginLeft:'5%'}}>
          <Image style={{width:'50px'}} src="https://www.atomexp.ru/source/pic/logo-white.svg" />
        </div>
       
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav id='infocenter'>
            {isLoggedIn && (
                <Nav.Link as={Link} to="/InfoCenter"><h5>Информационный центр</h5></Nav.Link>
            )}
          </Nav>

          <Nav className='ms-auto me-5'>
            {isLoggedIn ? (
              <Nav.Link  onClick={handleLogout}   as={Link} to="/"><h5>Выйти</h5></Nav.Link>
            ) : (
              <Nav.Link as={Link}  to="/" ><h5>Войти</h5></Nav.Link>
            )}
          </Nav>
          <Nav className='text-end'>
              <h1>{}</h1>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar> 

      <Routes>
        <Route index element={<Login onShowPage={handleSuccessfulLogin}></Login>} />
        <Route path='/InfoCenter' element={<InfoCenter />} />
      </Routes>
    </div>
  );
}

export default App;
