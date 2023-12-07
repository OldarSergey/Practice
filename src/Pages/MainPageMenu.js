import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MainPageMenu.css';
import { useNavigate } from 'react-router-dom';

function MainPageMenu() {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.token) {
      setToken(location.state.token);
    }
  }, [location.state]);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setMenuActive(!menuActive);
  };

  const handleInfoCenter = () => {
    navigateToInfoCenter();
  }

  const navigateToInfoCenter = () => {
        navigate('/InfoCenter', { state: { token: token } });
    };

  return (
    <>
        <div style={{ position: 'absolute', top: 70, right: 5, zIndex: 999 }}>
            <div className="section">
                <div className={`menu-block ${menuActive ? 'menu-nav_active' : ''}`}>
                    <nav className={`menu-nav ${menuActive ? 'menu-nav_active' : ''}`}>
                    <a href="#">Столовая</a>
                    <a href="#">Новости</a>
                    <a href="#">Опросы</a>
                    <a href="#">Уведомления</a>
                    <a href="#">База знаний</a>
                    <a href='#' onClick={handleInfoCenter}>Инфоцентр</a>
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
