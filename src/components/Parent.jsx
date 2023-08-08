import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [dataFromChild, setDataFromChild] = useState('');

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
              <Child sendDataToParent={handleDataFromChild} />
<br/>
      <h1>Data from Child: {dataFromChild}</h1>
    </div>
  );
};

export default Parent;
