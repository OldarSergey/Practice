import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MainPageMenu.css';
import { useNavigate, Link } from 'react-router-dom';
import GetCountVoiting from '../components/GetCountVoiting';

function MainPageMenu(props) {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [role, setRole] = useState(localStorage.getItem('role') || null);
  const [updateCount, setUpdateCount] = useState(0);
  const navigate = useNavigate();
  

  useEffect(() => {
    forceUpdate();
  }, [token]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    
    if (location.state && location.state.token && location.state.role) {
      setToken(location.state.token);
      setRole(location.state.role);
      localStorage.setItem('token', location.state.token);
      localStorage.setItem('role', location.state.role);
    } else if (storedToken && storedRole) {
      setToken(storedToken);
      setRole(storedRole);
    }
  }, [location.state]);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setMenuActive(!menuActive);
  };

  const forceUpdate = () => {
    setUpdateCount((prevCount) => prevCount + 1);
  };

  const handleInfoCenter = () => {
    navigateToInfoCenter();
  }

  const handleVoting = () => {
    navigateToVoting();
  }

  const navigateToInfoCenter = () => {
        navigate('/InfoCenter', { state: { token: token } });
    };
  const navigateToVoting = () => {
    navigate('/Voting', { state: { token: token } });
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    props.onClose();
  };
      
  return (
    <>
        <div style={{ position: 'absolute', top: 1, right: 5, zIndex: 999 }}>
            <div className="section">
                <div className={`menu-block ${menuActive ? 'menu-nav_active' : ''}`}>
                    <nav className={`menu-nav ${menuActive ? 'menu-nav_active' : ''}`}>
                     <Link to={"/News"}>Новости</Link>
                     <Link to={"/Notifications"}>Уведомления</Link>
                     <a
                      href='#'
                      onClick={handleVoting}
                      style={{ display: 'inline-block', whiteSpace: 'nowrap' }} 
                    >
                      Голосование 
                      <GetCountVoiting token={token} key={updateCount} />
                      
                    </a>
                    <Link to={"/FAQ"}>Вопросы</Link>  
                    {token && role && role === "DIRECTOR_VIEW" && (
                          <a href='#' onClick={handleInfoCenter}>Инфоцентр</a>
                      )}
                    <Link to={"/"} onClick={handleLogout }>Выйти</Link>
                    </nav>
                    <a href="#" className={`menu-btn ${menuActive ? 'menu-btn_active' : ''}`} onClick={handleMenuClick}>
                    <span></span>
                    </a>
                </div>
            </div>
        </div>
    </>
    
  );
}

export default MainPageMenu;
