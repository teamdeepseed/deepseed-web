import React from 'react';
import { connect } from 'react-redux';

import PhotoCard from 'components/Photo/PhotoCard';

const PhotoList = (props) => {
  const { isFetching, items } = props.photo;
  return (
    <div>
      {isFetching ? (
        <h1> Still Loading </h1>
      ) : (
        <ul>
          {items && items.map(item => (
            <PhotoCard key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatch
});

const mapStateToProps = (state) => {
  const { photo } = state;
  return {
    photo
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PhotoList);

