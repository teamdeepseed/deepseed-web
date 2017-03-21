import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingErrorWrapper from 'components/General/LoadingErrorWrapper';

class PhotoGenerator extends Component {
  render() {
    const { item, isFetching, error } = this.props.photo;
    const { defaultImage } = this.props;
    return (
      <div className="col-12">
        {defaultImage ? (
          <img className="img-responsive img-thumbnail" src={defaultImage.urls.small} alt="Unsplash" />
        ) : (
          <LoadingErrorWrapper loading={isFetching} error={error}>
            {item && (
              <img className="img-responsive img-thumbnail" src={item.urls.small} alt="Unsplash" />
            )}
          </LoadingErrorWrapper> 
        )}
      </div>
    )
  }
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
)(PhotoGenerator);
