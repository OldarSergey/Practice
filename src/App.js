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
import Canteen from './Pages/Canteen';
import News from './Pages/News';
import Surveys from './Pages/Surveys';
import KnowledgeBase from './Pages/KnowledgeBase';
import Notifications from './Pages/Notifications';



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
        <Route path='/Canteen'      element={<Canteen></Canteen>}/>
        <Route path='/News'         element={<News></News>} />
        <Route path='/Surveys'      element={<Surveys></Surveys>} />
        <Route path='/KnowledgeBase' element={<KnowledgeBase></KnowledgeBase>} />
        <Route path='/Notification' element={<Notifications></Notifications>} />
      </Routes>
    </div>
  );
}

export default App;
