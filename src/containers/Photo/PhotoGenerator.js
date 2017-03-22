import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import {Layer, Image, Stage, Text, Rect, Group } from 'react-konva';

import LoadingErrorWrapper from 'components/General/LoadingErrorWrapper';

class PhotoGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      textValue: null
    }
  }

  componentDidMount() {
    const image = new window.Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = 'https://images.unsplash.com/photo-1489564239502-7a532064e1c2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=161f6f5fde3b165653824fb4b9e21f40';
    image.onload = () => {
      this.setState({
        image: image
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      textValue: e.target.value
    });
  }

  generatePhoto = () => {
    let generatedImage = this.layer.canvas.toDataURL();
    location.href = generatedImage;
  }

  render() {
    const { photo, defaultPhoto } = this.props;
    const { isFetching, error } = photo;
    const { textValue, image } = this.state;
    const renderImage = image;
    if (defaultPhoto && renderImage) {
      renderImage.src = defaultPhoto.urls.regular;
    }
    return (
      <div className="col-12">
        <div className="row" style={{ marginBottom: '2em' }}>
          <div className="col-md-12 col-sm-12">
            <LoadingErrorWrapper loading={isFetching} error={error}>
              {defaultPhoto && (
                  <Stage width={renderImage ? renderImage.width : 400} height={renderImage ? renderImage.height : 267} ref={(stage) => { this.stage = stage; }}>
                    <Layer ref={(layer) => { this.layer = layer; }} style={{ textAlign: 'center' }}>
                      <Image
                        image={renderImage}
                      />
                      <Group
                        draggable
                        dragBoundFunc={(pos) => {
                          return {
                            x: this.group ? this.group.getAbsolutePosition().x : pos.x,
                            y: pos.y
                          }
                        }}
                        ref={(group) => { this.group = group; }}
                      >
                        <Text
                          text={textValue}
                          fontSize={30}
                          draggable={true}
                          fontFamily='Calibri'
                          fill='#fff'
                          width={renderImage ? renderImage.width : 400}
                          shadowColor='black'
                          align='center'
                          ref={(text)  => { this.text = text; }}
                        />
                        <Rect
                          width={renderImage ? renderImage.width : 400}
                          height={this.text ? this.text.getHeight() + 10 : null}
                          fill="#000"
                          opacity={0.4}
                        />
                      </Group>
                    </Layer>
                  </Stage>
              )}
            </LoadingErrorWrapper>
          </div>
          <div className="col-md-12 col-sm-12">
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