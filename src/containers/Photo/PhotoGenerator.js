import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import {Layer, Image, Stage, Text, Rect, Group } from 'react-konva';
import { SketchPicker } from 'react-color';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';

import LoadingErrorWrapper from 'components/General/LoadingErrorWrapper';

class PhotoGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      textValue: null,
      textSize: 30,
      rectBackground: {
        r: 0,
        g: 0,
        b: 0,
        a: 0.7
      },
    }
  }

  componentDidMount() {
    const image = new window.Image();
    image.src = 'https://images.unsplash.com/photo-1489564239502-7a532064e1c2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=161f6f5fde3b165653824fb4b9e21f40';
    image.onload = () => {
      this.setState({
        image: image,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      textValue: e.target.value
    });
  }

  handleRectColorChange = (color) => {
    this.setState({ rectBackground: color.rgb });
  }

  handleFontSizeChange = (value) => {
    this.setState({ textSize: value });
  }
  
  handleGroupDrag = (pos) => {
    let posY = pos.y;
    // take layer height instaed when rect height surpass layer's
    let rectHeight = this.rect.getHeight() > this.layer.getHeight() ? this.layer.getHeight() :  this.rect.getHeight();
    if (pos.y > this.layer.getHeight() - rectHeight) {
      posY = this.layer.getHeight() - rectHeight;
    } else if (pos.y < 0)  {
      posY = 0;
    }
    return {
      x: this.group ? this.group.getAbsolutePosition().x : pos.x,
      y: posY
    }
  }

  generatePhoto = () => {
    let generatedImage = this.layer.canvas.toDataURL();
    location.href = generatedImage;
  }

  render() {
    const { photo, defaultPhoto } = this.props;
    const { textValue, textSize, image, rectBackground } = this.state;
    const { isFetching, error } = photo;
    const renderImage = image;
    if (defaultPhoto && renderImage) {
      renderImage.src = defaultPhoto.urls.regular;
      renderImage.setAttribute('crossOrigin', 'anonymous');
    }
    return (
      <div className="col-12">
        <div className="row" style={{ marginBottom: '2em' }}>
          <div className="col-md-12 col-sm-12">
            <LoadingErrorWrapper loading={isFetching} error={error}>
              {defaultPhoto && (
                  <Stage width={renderImage ? renderImage.width : 400} height={renderImage ? renderImage.height : 267} ref={(stage) => { this.stage = stage; }}>
                    <Layer ref={(layer) => { this.layer = layer; }} style={{ textAlign: 'left' }}>
                      <Image
                        image={renderImage}
                      />
                      <Group
                        draggable
                        dragBoundFunc={this.handleGroupDrag}
                        ref={(group) => { this.group = group; }}
                      >
                        {textValue && (
                          <Rect
                            width={renderImage ? renderImage.width : 400}
                            height={this.text ? this.text.getHeight() : null}
                            fill={`rgb(${rectBackground.r},${rectBackground.g},${rectBackground.b})`}
                            opacity={rectBackground.a}
                            ref={(rect) => { this.rect = rect; }}
                          />
                        )}
                        <Text
                          text={textValue}
                          fontSize={textSize}
                          fontFamily='Calibri'
                          fill='white'
                          width={renderImage ? renderImage.width : 400}
                          align='center'
                          padding={20}
                          ref={(text)  => { this.text = text; }}
                        />
                      </Group>
                    </Layer>
                  </Stage>
              )}
            </LoadingErrorWrapper>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <TextareaAutosize
              minRows={1}
              className="form-control"
              placeholder="Feeling..."
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
              <SketchPicker 
                color={rectBackground}
                onChange={this.handleRectColorChange}
              />
          </div>
          <div className="col-md-6">
              <InputRange
                maxValue={90}
                minValue={30}
                value={textSize}
                onChange={this.handleFontSizeChange} 
              />
          </div>
        </div>
        <button className="btn btn-default" onClick={this.generatePhoto} style={{ marginTop: '2em' }}>Generate</button>
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
