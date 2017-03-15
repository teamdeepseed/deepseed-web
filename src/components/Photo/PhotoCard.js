import React from 'react';

const PhotoCard = (props) => (
    <li>
      <img src={props.item.urls.regular} alt="Unsplash Latest Photos" />
    </li>
);

export default PhotoCard;
