import{ useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./Report.css"



function Report(props) {
  const [userData, setUserData] = useState(null);;
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://mobileserver.atomexp.ru:8090/api/auth/login',
        {
          login: props.login,
          password: props.password
        }
      );
      setUserData(response.data);
      setLoginError(null);
      const name = response.data.user.NameActual
      props.onSuccessfulLogin(name);
      navigateToMainPageMenu(response.data);
      navigateToAboutCompany(response.data);

    } catch (error) {
      console.error('Error:', error);
      setUserData(null);
      setLoginError('Ошибка авторизации. Проверьте логин и пароль.');
    }
  };

  const navigateToMainPageMenu = (userData) => {
    const currentPath = window.location.pathname; 
    navigate(currentPath, {
      state: {
        token: userData.token,
        role: userData.user.roles,
      },
    });
  };

  const navigateToAboutCompany = (userData) => {
    navigate('/AboutСompany', { state: { 
      token: userData.token, 
      role: userData.user.roles,
      } });
  };

  return (
    <>
      <div>
        <Button className='mt-4' onClick={handleLogin} variant="primary">
          Авторизоваться
        </Button>
      </div>
      <div>
        <p>{loginError}</p>
      </div>
    </>

  
  );
}
export default Report;
