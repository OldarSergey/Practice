import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetCountVoiting(props) {

    const [count, setCount] = useState(null);

    useEffect(() => {
        fetchGetCount();
      }, []);


    const fetchGetCount = async () => {
        try {
          const response = await axios.get('http://176.106.132.3:9090/api/voiting/count', {
            headers: {
              Authorization: `Bearer ${props.token}`
            }
          });
          console.log('Ответ с сервера:', response.data.unreaded);
          setCount(response.data);
        } catch (error) {
          console.error('Ошибка при загрузке уведомлений:', error);
        }
      };

      return (
        <>
          {count ? 
          (
            <span>({count && count.unreaded}) </span>
          ) 
          :
          (
            <span></span>
          )
          }
        </>
      );
}
export default GetCountVoiting;