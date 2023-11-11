import { useEffect, useState } from 'react';

const Packages = () => {
  const [tourData, setTourData] = useState(null);
  const dataUrl = './data.json';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        setTourData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      
      {tourData && (
        <div>
          
        </div>
      )}
    </div>
  );
}

export default Packages;
