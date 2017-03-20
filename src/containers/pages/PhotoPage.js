import React, { Component } from 'react';
import { connect } from 'react-redux'

import { searchPhotoById } from 'containers/Photo/actions';

class PhotoPage extends Component {
  componentWillMount() {
    const { photo, searchPhotoById } = this.props;
    const { items } = photo;
    const { id } = this.props.params;

    if (items && items.find((photo) => photo.id === id)) {
      console.log('here is the photo');
    } else {
      searchPhotoById(id);
    }
  }

  render() {
    return (
      <h1> This is photo page </h1>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchPhotoById: (id) => dispatch(searchPhotoById(id)),
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
)(PhotoPage);