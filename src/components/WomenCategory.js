import React from 'react';
import { NavLink } from "react-router-dom";
import GreenCart from '../assets/green-cart.png';
import IMAGE from '../assets/image.jpeg';


class WomenCategory extends React.Component {
    constructor () {
        super ();
    }

    render(){
    return (
        <main>
        <div className="category__name">Category name</div>
        <div className="container">
           
            <div className="item__box">
                <div className="out__of__stock">out of stock</div>
                <div className="item__image">
                    <img src={IMAGE} alt="item_image"></img>
                    <div className="green__cart">
                        <img src={GreenCart} alt="green-cart"></img>
                    </div>
                </div>

                <div className="item__name">Apollo running short</div>
                <div className="item__price">$49.99</div>
            </div>
            <NavLink to="/product">
            <div className="item__box">
                <div className="item__image">
                    <img src={IMAGE} alt="item_image" />
                    <div className="green__cart">
                        <img src={GreenCart} alt="green-cart"></img>
                    </div>
                </div>
                
                <div className="item__name">Apollo running short</div>
                <div className="item__price">$49.99</div>
            </div>
            </NavLink>
            <div className="item__box">
                <div className="item__image">
                    <img src={IMAGE} alt="item_image" />
                    <div className="green__cart">
                        <img src={GreenCart} alt="green-cart"></img>
                    </div>
                </div>
                
                <div className="item__name">Apollo running short</div>
                <div className="item__price">$49.99</div>
            </div>
            <div className="item__box">
                <div className="item__image">
                    <img src={IMAGE} alt="item_image" />
                    <div className="green__cart">
                        <img src={GreenCart} alt="green-cart"></img>
                    </div>
                </div>
                
                <div className="item__name">Apollo running short</div>
                <div className="item__price">$49.99</div>
            </div>
            
        </div>
        </main>
    )
    }
}

export default WomenCategory;