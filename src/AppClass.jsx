// AppClass.jsx
import React, { Component } from 'react';
import imageData from './components/DataComponent';

class AppClass extends Component {
  render() {
    return (
      <div>
        {imageData.map((item) => (
          <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} />
        ))}
      </div>
    );
  }
}

export default AppClass;
