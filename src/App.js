import './App.css';
import Login from './Pages/Login';
import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoCenter from './Pages/InfoCenter';
import Image from 'react-bootstrap/Image';
import MainPageMenu from './Pages/MainPageMenu';
import AboutCompany from './Pages/AboutСompany';
import Canteen from './Pages/Canteen';
import News from './Pages/News';
import Notifications from './Pages/Notifications';
import FAQ from './Pages/FAQ';
import Voting from './Pages/Voting';
import { ReactComponent as SettingsIcon } from './img/set.svg';
import SettingsModal from './components/SettingsModal';

function App() {
  
  const [showInfoCenterLink, setShowInfoCenterLink] = useState(false);
  const [name, setName] = useState("")
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  
  const handleSuccessfulLogin = (name) => {
    setShowInfoCenterLink(true);
    localStorage.setItem('name', name); 
    setName(name); 
  };

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);
  const handleLogout = () => {
    setName("");
    localStorage.removeItem('name');
  };

  return (
    
    <div className='App' style={{ backgroundColor:'#FFFFFF', }} >
      <Navbar expand="lg" style={{ backgroundColor: '#0563B4', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '5%'  }}>
        <Image style={{ width: '50px' }} src="https://www.atomexp.ru/source/pic/logo-white.svg" />
        <h2 style={{ marginLeft: '10px', color: 'white', display: 'flex', alignItems: 'center' }}>
        {name && name !== '' && (
        <>
          {name}
          <SettingsIcon
            onClick={handleModalOpen}
            style={{ width: '38px', marginLeft: '5px' }}
          />
          {showModal && (
            <SettingsModal onClose={handleModalClose} />
          )}
        </>
      )}
      </h2>


      </div>

      </Navbar>
      <MainPageMenu onClose={handleLogout} ></MainPageMenu>
      <Routes>
        <Route index element={<Login onShowPage={handleSuccessfulLogin}></Login>} />
        <Route path='/InfoCenter' element={<InfoCenter  />} />
        <Route path='/MainPageMenu' element={<MainPageMenu/>} />
        <Route path='/AboutСompany' element={<AboutCompany></AboutCompany>} />
        <Route path='/Canteen'      element={<Canteen></Canteen>}/>
        <Route path='/News'         element={<News></News>} />
        <Route path='/Notifications' element={<Notifications></Notifications>} />
        <Route path='/FAQ' element={<FAQ></FAQ>} />
        <Route path='/Voting' element={<Voting></Voting>} />
      </Routes>
    </div>
  );
}

export default App;
