import React, { useState, useEffect } from 'react';
import GetDataReport from "../components/GetDataReport";
import { useLocation } from 'react-router-dom';

function InfoCenter(){
    const location = useLocation();
    const [token, setToken] = useState(null);
    const [name, setName] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        if (location.state && location.state.token && location.state.userName) {
          setToken(location.state.token);
          setName(location.state.userName);
        }
      }, [location.state]);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
      };

    return(
        <div>
            <h1>{name}</h1>
            <label>
                Выберите дату:
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </label>
            <GetDataReport token={token} datePeriod={selectedDate} />
        </div>
    )
}
export default InfoCenter;
