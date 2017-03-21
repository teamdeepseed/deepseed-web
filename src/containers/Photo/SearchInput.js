import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPhotos, searchPhotos } from './actions';
import { isAcceptableKey } from 'utils/helpers';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typingTimer: 0,
      doneTypingInterval: 400,
      recentSearchValue: ''
    }
  }

  resetComponent() {
    this.setState({
      typingTimer: 0,
      doneTypingInterval: 400,
    })
  }

  handleKeyUp = (e) => {
    clearTimeout(this.state.typingTimer);
    if (e.target.value && isAcceptableKey(e.which)) {
      this.setState({
        typingTimer: setTimeout(this.searchPhotos, this.state.doneTypingInterval),
      });
    } else {
      this.resetComponent();
    }
  }

  handleKeyDown = (e) => {
    clearTimeout(this.state.typingTimer);
  }

  handleChange = (e) => {
    // Load default photos when text value is empty
    if (!e.target.value) {
      this.props.fetchPhotos();
    }
  }

  searchPhotos = () => {
    if (this.input.value !== this.state.recentSearchValue) {
      this.setState({
        recentSearchValue: this.input.value,
      },
        () => {
          this.props.searchPhotos(this.input.value);
        }
      )
    }
  }

  render() {
    return (
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          placeholder="Search photos..."
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          onChange={this.handleChange}
          ref={(input) => { this.input = input }}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchPhotos: (query) => dispatch(searchPhotos(query)),
  fetchPhotos: () => dispatch(fetchPhotos()),
});

const mapStateToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);