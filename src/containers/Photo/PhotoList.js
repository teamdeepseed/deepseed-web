import React from 'react';

import PhotoCard from 'components/Photo/PhotoCard';

const PhotoList = (props) => {
  return (
    <ul>
      <PhotoCard name="hello" />
      <PhotoCard name="Hi" />
      <PhotoCard name="how" />
      <PhotoCard name="what" />
    </ul>
  )
}

export default PhotoList;