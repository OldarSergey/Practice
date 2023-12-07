import './App.css';
import Login from './Pages/Login';
import {Routes, Route} from 'react-router-dom'
import { Link} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCenter from './Pages/InfoCenter';
import Image from 'react-bootstrap/Image';
import MainPageMenu from './Pages/MainPageMenu';
import AboutCompany from './Pages/AboutСompany';



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
      <Navbar expand="lg"  style={{backgroundColor:'#0563B4' }}>
        <div style={{ marginLeft:'5%'}}>
          <Image style={{width:'50px'}} src="https://www.atomexp.ru/source/pic/logo-white.svg" />
        </div>
      </Navbar> 
      <MainPageMenu></MainPageMenu>
      <Routes>
        <Route index element={<Login onShowPage={handleSuccessfulLogin}></Login>} />
        <Route path='/InfoCenter' element={<InfoCenter />} />
        <Route path='/MainPageMenu' element={<MainPageMenu />} />
        <Route path='/AboutСompany' element={<AboutCompany></AboutCompany>} />
      </Routes>
    </div>
  );
}

export default App;
