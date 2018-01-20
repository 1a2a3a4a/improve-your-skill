import React, { Component } from 'react';
import '../App.css'
import Sound from 'react-sound';

import {VelocityTransitionGroup} from 'velocity-react';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'

class Meme extends Component {


    calcPosition() {
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
        return position;
    }

    randomAnimation(){
        const animations = [
            'swoopIn',
            'bounceIn',
            'whirlIn',
            'expandIn',
            'flipBounceXIn',
            'flipBounceYIn',

        ]
        return 'transition.' + animations[[Math.floor(Math.random() * animations.length)]]
    }

    render(){
        const position = this.calcPosition();
        const animation = this.randomAnimation();
        return(
            <div>
                <Sound
                    url={this.props.audio}
                    playStatus={Sound.status.PLAYING}
                    volume={30}
                />
                <VelocityTransitionGroup
                    runOnMount={true}
                    enter={animation}
                >
                    <img style={position} alt="meme" src={this.props.image_source}/>
                </VelocityTransitionGroup>
            </div>
        )
    }
}

export default Meme;