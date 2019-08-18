import React, {Component} from 'react';
import ReactSiemaCarousel from "../ReactSiema/ReactSiemaCarousel";
import { Row, Card, CardBody, CardTitle } from "reactstrap";
import img from './../../img/1234/1234/banne2435332r.png'

const items = [
    {
        id: 1,
        title: "Homemade Cheesecake with Fresh Berries and Mint",
        img: img,
        detail: "10.12.2019",
        category: "Cupcakes",
        badges: [
            {
                color: "theme-1",
                title: "NEW"
            },
            {
                color: "theme-2",
                title: "ONHOLD"
            }
        ]
    },
    {
        id: 2,
        title: "Wedding Cake with Flowers Macarons and Blueberries",
        img: img,
        detail: "01.06.2019",
        category: "Cakes",
        badges: [
            {
                color: "theme-2",
                title: "DONE"
            },
            {
                color: "primary",
                title: "TRENDING"
            }
        ]
    },
    {
        id: 3,
        title: "Cheesecake with Chocolate Cookies and Cream Biscuits",
        img: img,
        detail: "27.05.2019",
        category: "Cupcakes",
        badges: [
            {
                color: "secondary",
                title: "PROCESSED"
            }
        ]
    },
    {
        id: 4,
        title: "Homemade Cheesecake with Fresh Berries and Mint",
        img: img,
        detail: "10.12.2019",
        category: "Cakes",
        badges: [
            {
                color: "primary",
                title: "NEW"
            }
        ]
    },
    {
        id: 5,
        title: "Homemade Cheesecake with Fresh Berries and Mint",
        img: img,
        detail: "10.12.2019",
        category: "Cakes",
        badges: [
            {
                color: "primary",
                title: "NEW"
            }
        ]
    },

];
const BasicCarouselItem = ({ title, img, detail, badges }) => {
    return (
        <div className="pr-3 pl-3">
            <div className="flex-row">
                {/*<div className="w-100 position-relative parentDiv mt-3">*/}
                <div className="w-100 position-relative parentDiv">
                    <img className="card-img-left" src={img} alt={title} />
                    {/*{badges &&*/}
                    {/*badges.map((b, index) => {*/}
                        {/*return (*/}
                            {/*<span*/}
                                {/*key={index}*/}
                                {/*className={`badge badge-pill badge-${*/}
                                    {/*b.color*/}
                                    {/*} position-absolute ${*/}
                                    {/*index === 0*/}
                                        {/*? "badge-top-left"*/}
                                        {/*: "badge-top-left-" + (index + 1)*/}
                                    {/*}`}*/}
                            {/*>*/}
                  {/*{b.title}*/}
                {/*</span>*/}
                        {/*);*/}
                    {/*})}*/}
                </div>
                {/*<div className="w-50">*/}
                    {/*<CardBody>*/}
                        {/*<h6 className="mb-4">{title}</h6>*/}
                        {/*<footer>*/}
                            {/*<p className="text-muted text-small mb-0 font-weight-light">*/}
                                {/*{detail}*/}
                            {/*</p>*/}
                        {/*</footer>*/}
                    {/*</CardBody>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

class Sliders extends Component {
    render() {
        return (
            <div className='w-100'>
                <ReactSiemaCarousel
                    perPage={{
                        0: 1,
                        1000: 2,
                        1400: 3
                    }}
                    loop={true}
                    controls={false}
                >
                    {items.map(item => {
                        return (
                            <div key={item.id}>
                                <BasicCarouselItem {...item} />
                            </div>
                        );
                    })}
                </ReactSiemaCarousel>

            </div>
        );
    }
}

export default Sliders;