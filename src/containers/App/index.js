import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'styles/main.scss';

import ApiToggleCheckbox from 'components/General/ApiToggleCheckbox';
import { toggleApi } from './actions';

class App extends Component {
  render() {
    const { toggleApi, liveApis } = this.props;
    return (
      <div className="App container">
        <ApiToggleCheckbox
          onChange={toggleApi}
          checked={liveApis}
        />
        {this.props.children}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
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
)(App);
