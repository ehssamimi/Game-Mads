import React, {Component} from 'react';
// import top from "../img/1234/1234/";
// import button from "../img/1234/1234/33.svg";
// import top from  './../../img/1234/1234/bala.svg'
import top from  './../../img/1234/1234/bala.svg'
import button from  './../../img/1234/1234/board.svg'
import {Player} from "video-react";
import banner from '../../img/1234/1234/banne2332r.png'
import video from '../../video/gadpap23.mp4'
import "../../../node_modules/video-react/dist/video-react.css"; // import css

class SecondPage extends Component {
    render() {
        return (
            <div className='secondPage'>
                <img src={top} alt="top" className='topSecondPage' />

                <div  className='videoPageTwo'>
                    <Player
                        playsInline
                        poster={banner}
                        src={video}
                        fluid={false}
                        width={'100%'}
                        height={'90%'}

                    />
                </div>


                <img src={button} alt="top" className='ButtonFirstPage2' />
            </div>
        );
    }
}

export default SecondPage;