import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Новости</h1>
      <div>
        <input
          type="text"
          placeholder="Введите ID новости"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          style={ {padding: '6px'}}
        />
       <Button  onClick={handleSearch} variant="primary">Поиск</Button>{' '}
      </div>
      {searchResult && (
        <div>
          <h3>Результат поиска:</h3>
          <Card style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', padding: '10px', width: '50%', margin: 'auto' }}>
            <Card.Body>
              <Card.Title>{searchResult.title}</Card.Title>
              <Card.Text>{new Date(searchResult.dateTime).toLocaleString()}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
      <div className="row justify-content-center mt-3">
        {news.map((item) => (
          <div
          key={item.id}
          className="col-8 col-md-6 col-lg-4 mb-3"
          style={{ paddingLeft: '30px', paddingRight: '30px' }}
        >
          <Card style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', padding: '10px' }}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{new Date(item.dateTime).toLocaleString()}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        ))}
      </div>
    </div>
  );
}

export default News;
