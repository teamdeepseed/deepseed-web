import React from 'react';
import { Link } from 'react-router'

const PhotoCard = (props) => (
    <div className="col-4" style={{ marginBottom: '2em' }}>
      <Link to={`/photo/${props.item.id}`}>
        <img className="img-responsive img-thumbnail" src={props.item.urls.small} alt="Unsplash Latest Photos" />
      </Link>
    </div>
);

export default PhotoCard;