import React, { Component } from 'react';
import { connect } from 'react-redux'

import PhotoGenerator from 'containers/Photo/PhotoGenerator';
import { getPhoto } from 'containers/Photo/actions';

class PhotoPage extends Component {
  constructor(props) {
    super(props);
    const { photo, params } = props;
    const { items } = photo;
    const { id } = params;
    this.state = {
      item: items.find((photo) => photo.id === id) || null
    }
  }

  componentWillMount() {
    const { item } = this.state;
    const { getPhoto, params } = this.props;
    const { id } = params;
    
    // only call getPhoto api if the photo object is not yet in state
    if (!item) {
      getPhoto(id);
    } 
  }

  render() {
    const { item } = this.state;
    const propItem = this.props.photo.item;
    return (
      <div className="photopage">
        <h1 className="text-center" style={{ marginBottom: '2em' }}>Photo Generator</h1>
        <div className="row">
          <PhotoGenerator 
            defaultPhoto={item || propItem} 
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPhoto: (id) => dispatch(getPhoto(id)),
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