import React, { useState, useEffect } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import axios from 'axios';
const SettingsModal = ({ onClose }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://mobileserver.atomexp.ru:8090/api/auth/settings', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const parsedData = JSON.parse(response.data); 
      setData(parsedData);
    } catch (error) {
      console.error('Ошибка запроса:', error);
    }
  };

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header >
        <Modal.Title>Пользовательские настройки</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data ? (
          <ul>
            <li>Location ID: {data.locationid}</li>
            <li>News Notification: {data.newsNotify}</li>
            <li>Voting Notification: {data.voitingNotify}</li>
            <li>Notify Notification: {data.notifyNotify}</li>
            <li>Eating Notification: {data.eatingNotify}</li>
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingsModal;
