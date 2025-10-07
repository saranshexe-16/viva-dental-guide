import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);  // State to store API data

  // Fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/fetch-data');  // Make GET request to your backend
      setData(response.data);  // Store the response data in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();  // Call fetchData when the component mounts
  }, []);

  return (
    <div className="App">
      <h1>Real-Time Data Collection</h1>
      
      <div className="data-section">
        <h2>API Data</h2>
        <pre>{JSON.stringify(data?.apiData, null, 2)}</pre>  {/* Render API Data */}
      </div>
    </div>
  );
}

export default App;
