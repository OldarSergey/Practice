
import './App.css';
import Login from './Pages/Login';
import {Routes, Route} from 'react-router-dom'
import { Link, Outlet } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCenter from './Pages/InfoCenter';

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
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Ваш логотип</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav>
            {isLoggedIn && (
                <Nav.Link as={Link} to="/InfoCenter">Информационный центр</Nav.Link>
            )}
          </Nav>

          <Nav style={{position:'relative'}}>
            {isLoggedIn ? (
              <Nav.Link  onClick={handleLogout} style={{right:"0"}}  as={Link} to="/">Выйти</Nav.Link>
            ) : (
              <Nav.Link as={Link} style={{right:"0"}} to="/" >Войти</Nav.Link>
            )}
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
