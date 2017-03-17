import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleApi } from 'containers/App/actions';
import { fetchPhotos } from 'containers/Photo/actions';
import PhotoList from 'containers/Photo/PhotoList';
import SearchInput from 'containers/Photo/SearchInput';

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchPhotos();
  }

  render() {
    const { liveApis, toggleApi } = this.props;
    return (
      <div className="homepage">
        <h1 className="text-center">Deep Seed</h1>

        <div className="row" style={{ marginBottom: '2em' }}>
          <div className="col-12">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                checked={liveApis}
                onChange={toggleApi}
              />
              Tick to use live APIs
            </label>
          </div>
        </div>

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
  toggleApi: () => dispatch(toggleApi()),
});

const mapStateToProps = (state) => {
  const { app } = state;
  return {
    liveApis: app.liveApis,
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
