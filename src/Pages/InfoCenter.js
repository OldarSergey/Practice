import React, { useState, useEffect } from 'react';
import GetDataReport from "../components/GetDataReport";
import { useLocation } from 'react-router-dom';
import CardProfile from '../components/CardProfile';

function InfoCenter(){
    const location = useLocation();
    const [token, setToken] = useState(null);
    const [name, setName] = useState('');

    const [selectedDate, setSelectedDate] = useState('');

  
    useEffect(() => {
      if (location.state && location.state.token && location.state.userName) {
        setToken(location.state.token);
        setName(location.state.userName);

        setSelectedDate(location.state.selectedDate || ''); 
      }
    }, [location.state]);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
      };

      return (
        <div className='ms-5'>
          <h1 className='text-end me-5'>{name}</h1>
          <div className='d-flex'>
            <h3>Выберите дату:</h3>
            <input
              className='ms-2'
              type="month"
              value={selectedDate}
              onChange={handleDateChange}
              style={{
                background: 'transparent',
                fontSize: '18px',
                color: 'dark',
                border: '1px solid white', 
                borderRadius: '5px', 
                padding: '5px', 
              }}
            />
            
          </div>
          <GetDataReport token={token} datePeriod={selectedDate} />
        </div>
      );
      
      
}
export default InfoCenter;