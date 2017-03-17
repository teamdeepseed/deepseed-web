import React, { Component } from 'react';
import 'styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App container">
        {this.props.children}
      </div>
    );
  }
}

export default App;