import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import html2canvas from 'html2canvas';

import LoadingErrorWrapper from 'components/General/LoadingErrorWrapper';

class PhotoGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: null
    }
  }

  handleChange = (e) => {
    this.setState({
      textValue: e.target.value
    });
  }

  generatePhoto = () => {
    const { defaultPhoto } = this.props;
    html2canvas(this.textImageWrapper, {
      proxy: defaultPhoto.urls.small 
    }).then(function(canvas) {
      let generatedImage = canvas.toDataURL("image/png");
      location.href = generatedImage;
    });
  }
  
  render() {
    const { photo, defaultPhoto } = this.props;
    const { isFetching, error } = photo;
    const { textValue } = this.state;
    return (
      <div className="col-12">
        <div className="row justify-content-md-center" style={{ marginBottom: '2em' }}>
          <div className="col-md-6 col-sm-12">
            <LoadingErrorWrapper loading={isFetching} error={error}>
              {defaultPhoto && (
                <div 
                  className="textImageWrapper" 
                  style={{ width: '400px' }}
                  ref={(textImageWrapper) => { this.textImageWrapper = textImageWrapper; }}
                >
                  <img className="textImageImg img-responsive" src={defaultPhoto.urls.small} alt="Unsplash" />
                  {textValue && (
                    <span className="textImageText">{textValue}</span>
                  )}
                </div>
              )}
            </LoadingErrorWrapper> 
          </div>
          <div className="col-md-6 col-sm-12">
            <TextareaAutosize
              minRows={1}
              className="form-control"
              placeholder="Feeling..."
              onChange={this.handleChange}
            />
            <button className="btn btn-default" onClick={this.generatePhoto} style={{ marginTop: '2em' }}>Generate</button>
          </div>
        </div>
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
