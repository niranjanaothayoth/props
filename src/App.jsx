// App.jsx
import React from 'react';
import imageData from './components/DataComponent';

const App = () => {
  return (
    <div>
      {imageData.map((item) => (
        <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} />
      ))}
    </div>
  );
};

export default App;
