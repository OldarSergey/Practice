import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalOutputFAQ from '../components/ModalOutputFAQ';

function FAQ() {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [votings, setVotings] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null); 
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      fetchVotings(storedToken);
    }
  }, []);

  const fetchVotings = async () => {
    try {
      const response = await axios.get('http://176.106.132.3:9090/api/faq/', {
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

  const openModal = (file) => {
    setSelectedFile(file); // Устанавливаем выбранный файл при клике
    setModalShow(true); // Показываем модальное окно
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-4">Часто задаваемые вопросы</h1>

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
            onClick={() => openModal(item)}
          >
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>

      {selectedFile && (
        <ModalOutputFAQ 
            file={selectedFile} 
            show={modalShow} 
            onHide={() => setModalShow(false)}
        />
        )}
    </div>
  );
}

export default FAQ;
