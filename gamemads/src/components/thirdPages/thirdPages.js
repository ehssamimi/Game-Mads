import React, {Component} from 'react';
import Sliders from "../Slider/Sliders";
import top from "../../img/1234/1234/1.svg";
// import button from "../../img/1234/1234/33.svg";
import button from "../../img/1234/1234/board.svg";
import { Colxx, Separator } from "./../Slider/CustomBootstrap";


class ThirdPages extends Component {
    render() {
        return (

            <div className='firstPage'>
                <img src={top} alt="top" className='topFirstPage' />
                {/*<Colxx xxs="12" className="pl-0 pr-0 mb-5">*/}
                    {/*<Sliders/>*/}
                {/*</Colxx>*/}

                <img src={button} alt="top" className='ButtonFirstPage' />

            </div>

        );
    }
}

export default ThirdPages;