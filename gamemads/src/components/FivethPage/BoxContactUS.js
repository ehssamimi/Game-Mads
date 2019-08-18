import React, {Component} from 'react';
import { FaInstagram,FaYoutube,FaFacebookSquare,FaTwitter,FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";




class BoxContactUs extends Component {
    render() {
        return (
            <div className='w-100 d-flex'>
                <IconContext.Provider value={{ className: "contactUsButton" }}>

                    <div
                        // onClick={() => this.gotoPrev()}
                    >
                        <FaYoutube />
                    </div>
                    <div className='ml-3'
                        // onClick={() => this.gotoPrev()}
                    >
                        <FaFacebookSquare />
                    </div>
                    <div className='ml-3'
                        // onClick={() => this.gotoPrev()}
                    >
                        <FaInstagram />
                    </div>
                    <div className='ml-3'
                        // onClick={() => this.gotoPrev()}
                    >
                        <FaTwitter />
                    </div>
                    <div className='ml-3'
                        // onClick={() => this.gotoPrev()}
                    >
                        <FaLinkedin />
                    </div>


                </IconContext.Provider>

            </div>
        );
    }
}

export default BoxContactUs;