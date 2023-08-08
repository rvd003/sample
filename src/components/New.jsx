import React from 'react';

const New = () => {
  const A = [
    { name: "rohit", id: 1 },
    { name: "ro", id: 2 },
    { name: "hit", id: 3 }
  ];

  return (
    <div>
      <h1>New</h1>
      <ul>
        {A.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default New;
