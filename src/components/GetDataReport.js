import axios from "axios";
import React, { useState } from 'react';
import Table from "./Table";
import Chart from "./Chart";
import Button from 'react-bootstrap/Button';

function GetDataReport(props) {
  const [userData, setUserData] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetData = async () => {
    try {
      const datePeriod = props.datePeriod;

      const response = await axios.post(
        'http://mobileserver.atomexp.ru:8090/api/byrole/directorView',
        { datePeriod },
        {
          headers: {
            Authorization: `Bearer ${props.token}`
          }
        }
      );

      if (response.status === 200) {
        setResponseData(response.data);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Что-то пошло не так. Пожалуйста, попробуйте еще раз.");
      }
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Button className='mt-4' onClick={handleGetData} variant="primary">Получить данные</Button>{' '}

      {errorMessage && <h3 style={{color:"white"}}>{errorMessage}</h3>}

      {responseData && (
        <div>
          <Table data={responseData}></Table>
          <Chart data={responseData}></Chart>
        </div>
      )}
    </div>
  );
}
export default GetDataReport;
