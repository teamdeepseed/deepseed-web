import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPhotos } from 'containers/Photo/actions';
import PhotoList from 'containers/Photo/PhotoList';
import SearchInput from 'containers/Photo/SearchInput';

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <div className="homepage">
        <h1 className="text-center">Deep Seed</h1>

        <div className="row" style={{ marginBottom: '2em' }}>
          <SearchInput />
        </div>

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
