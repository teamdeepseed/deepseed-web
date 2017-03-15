import React, { Component } from 'react';
import './index.css';
// import Unsplash from 'unsplash-js';

// const unsplash = new Unsplash({
//   applicationId: "78af4955e5dbe0c6a709f8e40a3af19b2f86c0c07a158a02fff6b33eb8b916e3",
//   secret: "681c93eaffbdddea0f921ef70da4e6a6a39061ff7edcab3700131abfcb11be16"
// });

class App extends Component {
  componentWillMount() {
    // unsplash.photos.listPhotos(2, 15, "latest")
    //   .then((response) => response.json())
    //   .then(json => {
    //     console.log(json);
    // });
  }

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
