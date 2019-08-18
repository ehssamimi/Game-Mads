import React, {Component} from 'react';
import top from "../../img/1234/1234/1.svg";
import button from "../../img/1234/1234/board.svg";

import img from './../../img/1234/1234/banne2435332r.png'

class FourthPages extends Component {
    render() {
        return (
            <div className='thirdPages '>
                <img src={top} alt="top" className='topFirstPage' />
                    <div className='mainFour'>
                        <div className='MainImgFourth'>
                            <img src={img} alt="img" className='card-img-left'/>
                        </div>
                    </div>
                    <div className='mainFour'>
                        {/*<div className='text-center fourthText'>*/}
                        <p className='TextAlineLeft'>the first News</p>
                        <p className='TextAlineLeft'>Adobe has done a good job of using
                            your computer's GPU to speed
                            products like Premiere Pro and
                            Photoshop. However, it hasn't given
                            Lightroom the same love, and with the
                            enormous 60-megapixel-plus ...
                        </p>
                        {/*</div>*/}
                    </div>



                <img src={button} alt="top" className='ButtonFirstPage' />

            </div>
        );
    }
}

export default FourthPages;