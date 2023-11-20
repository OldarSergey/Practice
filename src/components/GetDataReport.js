import axios from "axios";
import React, { useState} from 'react';
import Table from "./Table";
import Chart from "./Chart";

function GetDataReport(props){
    const [userData, setUserData] = useState(null);
    const [responseData, setResponseData] = useState(null);

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
          console.error('Error:', error); 
        }
      };

      return (
        <div>
          <button onClick={handleGetData}>Получить данные</button>

          {responseData && (
            <div>
              <h2>Ответ сервера:</h2>
                <Table data = {responseData} ></Table>
                <Chart data = {responseData} ></Chart>
            </div>
          )}
        </div>
      );
    }
export default GetDataReport;