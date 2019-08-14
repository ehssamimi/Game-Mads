import React, {Component} from 'react';
import img from './../../img/Game_web_svg/Rectangle 3.svg'
import {TweenMax, Power2,Bounce,Back,SlowMo} from "gsap/TweenMax";
class RightMenu extends Component {
    constructor(props) {
        super(props);
        this.state={
            toggel:false
        }
    }

    handelMoveRightMenu(){
        console.log('click');
        this.setState(preState=>({
            toggel:!preState.toggel
        }));
        if (this.state.toggel===true){
            const $el = document.getElementById(`rightMenu`);
            const duration = 1; const from = {rotation:0,x:'0px'};
            TweenMax.to($el, duration, from);

            const $elMenu = document.getElementById(`menuIcon`);
            const durationMenu = 1; const fromMenu = {x:'0',rotation:0};
            TweenMax.to($elMenu, durationMenu, fromMenu);


            const $top = document.getElementById(`menuIconTop`);
            TweenMax.to($top, durationMenu, {rotation:0, });

            const $center = document.getElementById(`menuIconCenter`);
            TweenMax.to($center, durationMenu, {opacity:1});

            const $button = document.getElementById(`menuIconButton`);
            TweenMax.to($button, durationMenu, {rotation:0, y:'0em'});


            const $textMenu1 = document.getElementById(`textMenu1`);
            TweenMax.to($textMenu1, durationMenu, {opacity:1,ease: Back.easeIn.config(1.7)});

            const $textMenu2 = document.getElementById(`textMenu2`);
            TweenMax.to($textMenu2, durationMenu/6, {opacity:0,ease: Back.easeIn.config(1.7)});


        }else {

            const $el = document.getElementById(`rightMenu`);
            const duration = 1; const from = {rotation:15,x:'600px'};
            TweenMax.to($el, duration, from);

            const $elMenu = document.getElementById(`menuIcon`);
            const durationMenu = 1; const fromMenu = {x:'300x'};
            TweenMax.to($elMenu, durationMenu, fromMenu);


            const $top = document.getElementById(`menuIconTop`);
            TweenMax.to($top, durationMenu, {rotation:45, });

            const $center = document.getElementById(`menuIconCenter`);
            TweenMax.to($center, durationMenu, {opacity:0});

            const $button = document.getElementById(`menuIconButton`);
            TweenMax.to($button, durationMenu, {rotation:-45, y:'-55em'});


            const $textMenu1 = document.getElementById(`textMenu1`);
            TweenMax.to($textMenu1, durationMenu/6, {opacity:0,ease: Back.easeIn.config(1.7)});

            const $textMenu2 = document.getElementById(`textMenu2`);
            TweenMax.to($textMenu2, durationMenu, {opacity:1,ease:Back.easeIn.config(1.7)});



        }


    }
    handelHover(){
        let{toggel}=this.state;
        console.log(this.state.toggel);
        if (toggel===true) {
            const $elMenu = document.getElementById(`menuIcon`);
            let duration = 1;
            // TweenMax.to($elMenu, duration, {rotation:"+=360" ,transformOrigin:" 45px 50px"});
            // TweenMax.to($elMenu, duration, {rotation:"+=360" ,transformOrigin:" 1.9vw 6vh"});
            TweenMax.to($elMenu, duration, {rotation:"360" ,transformOrigin:" 1.9vw 6vh"});
        }else {
            const menuIconCenter = document.getElementById(`menuIconCenter`);
            let duration = 1;
            TweenMax.to(menuIconCenter, duration / 4, {x:50, ease:Power2.easeOut});
            TweenMax.to(menuIconCenter, duration / 2, {x:0, ease:Bounce.easeOut, delay:duration / 4});
        }

    }
    render() {
        return (
            <div>
                <div >
                    <div className='redRightMenu' id='rightMenu'>

                    </div>
             <span className='menuText' id='textMenu1'>menu</span>
             <span className='menuText2' id='textMenu2'>close</span>
                    <div onClick={this.handelMoveRightMenu.bind(this)} className='menuIcon ' id='menuIcon' onMouseOver={this.handelHover.bind(this)} >

                        <div className='position-relative '  onClick={this.handelMoveRightMenu.bind(this)} >
                            <img src={img} alt="img" className='menuIconTop' id="menuIconTop"  onClick={this.handelMoveRightMenu.bind(this)} />
                            <img src={img} alt="img"  className='menuIconCenter' id="menuIconCenter"  onClick={this.handelMoveRightMenu.bind(this)}/>
                            <img src={img} alt="img" className='menuIconButton' id="menuIconButton"  onClick={this.handelMoveRightMenu.bind(this)}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default RightMenu;