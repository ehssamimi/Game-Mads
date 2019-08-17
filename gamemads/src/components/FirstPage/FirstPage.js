import React, {Component} from 'react';
import top from  './../../img/1234/1234/Group 11@2x.png'
// import button from  './../../img/1234/1234/33.svg'
// import top from  './../../img/1234/1234/bala.svg'
import button from  './../../img/1234/1234/board.svg';
import flowers from  './../../img/1234/1234/324.png';
import Tilt from 'react-tilt'
import man from "../../img/1234/1234/banner main.png";
import font from "../../img/1234/1234/w3.svg";





class FirstPage extends Component {
    render() {
        return (
            <div >
                <div className='firstPage position-relative'>
                    <img src={top} alt="top" className='topFirstPage' />
                    <div className='position-relative'>
                        <img src={man} alt="top" className='man'/>
                    </div>

                    <Tilt className="Tilt" options={{
                        max:            35,

                        // reverse:        false,  // reverse the tilt direction
                        // max:            35,     // max tilt rotation (degrees)
                        // perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
                        // scale:          1.1,      // 2 = 200%, 1.5 = 150%, etc..
                        // speed:          1000,    // Speed of the enter/exit transition
                        // transition:     true,   // Set a transition on enter/exit.
                        // axis:           null,   // What axis should be disabled. Can be X or Y.
                        // reset:          true ,   // If the tilt effect has to be reset on exit.
                        // easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
                    }}  >
                        <img src={flowers} alt="flowers" className="flowers"/>



                        {/*<div className="Tilt-inner">*/}
                            {/*/!*<div className='flowers'></div>*!/*/}
                            {/**/}
                        {/*</div>*/}


                    </Tilt>


                    {/*<div className='container-first'>*/}
                        {/*<Tilt className="Tilt " options={{ max : 25 }} >*/}
                            {/*<img src={flowers} alt="flowers" className='flowers' />*/}
                            {/*<div className="Tilt-inner ">*/}
                                {/*<img src={flowers} alt="flowers" className='flowers' />*/}
                            {/*</div>*/}
                        {/*</Tilt>*/}
                    {/*</div>*/}

                    <img src={font} alt="font" className='font' />
                    <img src={button} alt="top" className='ButtonFirstPage' />
                </div>
            </div>

        );
    }
}

export default FirstPage;