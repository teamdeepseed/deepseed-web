import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPhotos } from 'containers/Photo/actions';
import PhotoList from 'containers/Photo/PhotoList';

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <div className="homepage">
        <h1>this is homepage</h1>
        <PhotoList />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
});

const mapStateToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

