import React, {Component} from 'react';
import RightMenu from "../RightMenu/RightMenu";
import FirstPage from "../FirstPage/FirstPage";
import SecondPage from "../SecondPages/SecondPage";
import ThirdPages from "../thirdPages/thirdPages";
import FourthPages from "../fourthPages/FourthPages";
import FivethPage from "../FivethPage/FivethPage";

class Main extends Component {
    render() {
        return (
            <div>
                <div className='mainBack'>
                    <RightMenu/>
                    <FirstPage/>
                    <SecondPage/>
                    <ThirdPages/>
                    <FourthPages/>
                    <FivethPage/>

                </div>

            </div>
        );
    }
}

export default Main;