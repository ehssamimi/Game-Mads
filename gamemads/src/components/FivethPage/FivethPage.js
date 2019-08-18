import React, {Component} from 'react';
import top from "../../img/1234/1234/Group 11@2x.png";

import button from "../../img/1234/1234/board.svg";
import tablet from "../../img/1234/1234/Group 10.png";
import mobile from "../../img/1234/1234/Group 9.png";
import { FaInstagram } from "react-icons/fa";
import {IconContext} from "react-icons";
import BoxContactUs from "./BoxContactUS";


class FivethPage extends Component {
    render() {
        return (
            <div >
                <div className='fivePage position-relative d-flex flex-column'>
                    <img src={top} alt="top" className='topFirstPage' />
                    <div className='position-relative DeviceFive w-50 h50vh'>
                        <div className='h50vh'>
                            <img src={tablet} alt='tablet'  className='ChildImage'/>
                        </div>
                        <div className='hMobile'>
                            <img src={mobile} alt='mobile' className='ChildImage'/>
                        </div>
                    </div>

                    <img src={button} alt="top" className='ButtonFivePage' />
                    <div className='LastBox mt-auto'>
                        <div className='container'>
                            <h6 className='d-flex justify-content-start text-white'>follow US</h6>
                             <BoxContactUs/>
                            <hr className='hr'/>
                        </div>


                    </div>
                </div>
            </div>

        );
    }
}

export default FivethPage;