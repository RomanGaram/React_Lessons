import React from 'react';

const MyImage = () => {
  const imagePath = 'My_photo.png'; // оновлений шлях до зображення
  return (
      <img className = 'photo' src={process.env.PUBLIC_URL + imagePath} alt="My Photo" />
  );
}

export default MyImage;