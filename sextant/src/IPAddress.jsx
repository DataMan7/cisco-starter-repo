import React, { useState, useEffect } from 'react';

const IPAddress = ({ type }) => {
  const [ipAddress, setIpAddress] = useState(null);
  const [error, setError] = useState(null);

  const fetchIpAddress = async () => {
    try {
      const url = `https://api.ipify.org?format=json${type ? `&${type}=1` : ''}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch IP address');
      }

      const data = await response.json();
      setIpAddress(data[type ? type : 'ip']);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchIpAddress();
  }, [type]);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : ipAddress ? (
        <p>
          Your Public {type || 'IPv4'} Address: {ipAddress}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IPAddress;
ddress.jsx