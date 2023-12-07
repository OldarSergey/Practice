import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MainPageMenu.css';
import { useNavigate, Link } from 'react-router-dom';

function MainPageMenu() {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation();
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.token && location.state.role) {
      setToken(location.state.token);
      setRole(location.state.role)
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

    const handleLogout = () => {
        // Удаление токена из состояния
        setToken(null);
        
        // Или удаление из localStorage
        localStorage.removeItem('token');
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
                    {role == "DIRECTOR_VIEW" && (
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
