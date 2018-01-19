import React, { Component } from 'react';
import './App.css';
import Meme from './components/Meme';
import { audio_path }from './audio/audio_paths';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          memes: [],
          key: 0,
          images: this.importImages()

      };
  }

  /*
  * imports the images from ./images/meme_images in formats png, jpeg, svg, jpg
   */
  importImages() {
    const r = require.context('./images/meme_images', false, /\.(png|jpe?g|svg|jpg)$/)
    return r.keys().map(r);
  }

    /*
    * Fires when the user has clicked on the website. It takes a random image from the images list
    * and renders a <Meme/> component with the random image. The <Meme/> component is appended to the
    * list of memes. The appending causes a state change which re-renders the website.
     */
  onClickNewMeme = () => {
    //This row below randomizes the image in the list uniformly. You can change this to random the way you like it.
    const image = this.state.images[Math.floor(Math.random() * this.state.images.length)];
    //The url to the audo file to be played when clicked, can be changed to a relative path as well

    const newMeme = <Meme key={this.state.key}
                          image_source={image}
                          audio={audio_path}
                    />;
    const nextMeme = [...this.state.memes, newMeme];
    this.setState({ memes: nextMeme, key: this.state.key + 1});
  };

  render() {
    return (
      <div  className="App" onClick={this.onClickNewMeme}>
          <div className="bg">
            {this.state.memes}
          </div>
      </div>
    );
  }
}

export default App;
