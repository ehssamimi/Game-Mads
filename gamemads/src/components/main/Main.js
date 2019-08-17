import React, {Component} from 'react';
import RightMenu from "../RightMenu/RightMenu";
import FirstPage from "../FirstPage/FirstPage";
import SecondPage from "../SecondPages/SecondPage";
import ThirdPages from "../thirdPages/thirdPages";

class Main extends Component {
    render() {
        return (
            <div>
                <div className='mainBack'>
                    <RightMenu/>
                    <FirstPage/>
                    <SecondPage/>
                    <ThirdPages/>

                </div>

            </div>
        );
    }
}

export default Main;