import React from 'react';

const PhotoCard = (props) => (
    <div className="col-4" style={{ marginBottom: '2em' }}>
      <a href="#">
        <img className="img-responsive img-thumbnail" src={props.item.urls.small} alt="Unsplash Latest Photos" />
      </a>
    </div>
);

export default PhotoCard;