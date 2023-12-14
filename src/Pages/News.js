import axios from 'axios';
import { useEffect, useState } from 'react';

function News() {
  const [news, setNews] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://176.106.132.3:9090/api/news/');
      setNews(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSearch = () => {
    const result = news.find((item) => item.id === parseInt(searchId));
    setSearchResult(result);
    console.log('yf;fk');
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-5">
      <h1 style={{ textAlign: 'center' }}>Новости</h1>
      <div className="d-flex justify-content-center align-items-center mb-3">
        <input
          type="text"
          placeholder="Введите ID новости"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          style={{ padding: '6px', marginRight: '10px' }}
        />
        <div>
          <button onClick={handleSearch} style={{ borderRadius: '10px', padding: '10px 20px'}}type='button'>
            Найти
          </button>
        </div>
      </div>

      {searchResult && (
        <div className="mb-4">
          <h3>Результат поиска:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', padding: '10px', marginBottom: '10px' }}>
              <h4>{searchResult.title}</h4>
              <p>{new Date(searchResult.dateTime).toLocaleString()}</p>
            </li>
          </ul>
        </div>
      )}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {news.map((item) => (
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
            <h4>{item.title}</h4>
            <p>{new Date(item.dateTime).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;
