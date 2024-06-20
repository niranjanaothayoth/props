import React from 'react';
import './Body.css';
import lake from "../image/lake.JPG"; // Assuming the image is in the correct path

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

const Body = () => {
  return (
    <div>
      {imageData.map(image => (
        <div key={image.id} className="column">
          <img src={image.img} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Body;
