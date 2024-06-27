import React from 'react';
import lake from "../image/lake.JPG";
import './Body.css';

const imageData = [
  {
    id: 1,
    img: lake
  },
  {
    id: 2,
    img: lake
  },
  {
    id: 3,
    img: lake
  },
  {
    id: 4,
    img: lake
  }
];

function Body() {
  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="image-container">
        {imageData.map(image => (
          <div key={image.id} className="column">
            <img src={image.img} alt=""></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
