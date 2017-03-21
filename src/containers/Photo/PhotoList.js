import React from 'react';
import { connect } from 'react-redux';

import PhotoCard from 'components/Photo/PhotoCard';
import LoadingErrorWrapper from 'components/General/LoadingErrorWrapper';

const PhotoList = (props) => {
  const { isFetching, items, error } = props.photo;
  return (
    <div>
      <LoadingErrorWrapper laoding={isFetching} error={error}>
        <div className="row">
          {items && items.map(item => (
            <PhotoCard key={item.id} item={item} />
          ))}
        </div>
      </LoadingErrorWrapper>
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
