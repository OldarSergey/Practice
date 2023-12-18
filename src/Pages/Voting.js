import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Voting() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [votings, setVotings] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchVotings(storedToken);
    }
  }, []);

  const fetchVotings = async (token) => {
    try {
      const response = await axios.get('http://176.106.132.3:9090/api/voiting/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Ответ с сервера:', response.data);
      setVotings(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке уведомлений:', error);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-4">Голосование</h1>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {votings.map((item) => (
         <li
          key={item.id}
          style={{
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            padding: '10px',
            marginBottom: '10px',
            marginLeft: '20px',
            marginRight: '20px',
          }}
        >
            <h3>{item.title}</h3>
            <p>Дата публикации: {new Date(item.publishedAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Voting;
