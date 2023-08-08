import React, { useState } from 'react';

const Child = ({ sendDataToParent }) => {
  const [data, setData] = useState('');

  const handleClick = () => {
    sendDataToParent(data);
  };

  return (
    <div>
     
     
      <br/>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={handleClick}>Edit</button>
    </div>
  );
};

export default Child;
