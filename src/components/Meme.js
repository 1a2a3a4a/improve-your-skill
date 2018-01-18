import React, { Component } from 'react';
import '../App.css'
import Sound from 'react-sound';
class Meme extends Component {

    render(){
        const min = 0;
        const max_height = window.innerHeight;
        const max_width = window.innerWidth;
        const rand_height = () => { return Math.floor(min + Math.random() * (max_height - min))};
        const rand_width = () => { return Math.floor(min + Math.random() * (max_width - min))};
        const unit = 'px';
        const position = {
            position: 'absolute',
            top: rand_height() + unit,
            right: rand_width() + unit,
            left: rand_width() + unit,
            bottom: rand_height() + unit,
        };
        return(
            <div >
                <Sound
                    url={this.props.sound}
                    playStatus={Sound.status.PLAYING}


                />
                <img style={position}alt="meme" src={this.props.image_source}/>
            </div>
        )
    }
}

export default Meme;