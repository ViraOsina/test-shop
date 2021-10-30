import React from 'react';
import IMAGE from '../assets/image.jpeg';
import './DropdownCart.css';

class DropdownCart extends React.Component {
    constructor () {
        super ();
    }

    render(){
        return(
            <div className="blurred__background">
                <div className="dropdown__cart__container">
                    <div className="header">
                        <h2 className="cart__header">My bag,</h2>
                        <span className="number__of__cart__items">2 items</span>
                    </div>
                    <div className="dropdown__products">
                    <div className="dropdown__product__container">
                        <div className="dropdown__product__description">
                            <p className="dropdown__item__name">Apollo</p>
                            <p className="dropdown__item__type">Running Short</p>
                            <p className="dropdown__item__price">$50.00</p>
                            <div className="dropdown__item__size">
                                <div className="dropdown__size__icon">S</div>
                                <div className="dropdown__size__icon">M</div>
                            </div>
                        </div>
                        <div className="dropdown__product__image">
                            <div className="product__qty">
                                <button className="dropdown__increment">+</button>
                                <span className="dropdown__product__count">1</span>
                                <button className="dropdown__decrement">-</button>
                            </div>
                            <div className="picture">
                                <img src={IMAGE} alt="cart-image"></img>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown__product__container">
                        <div className="dropdown__product__description">
                            <p className="dropdown__item__name">Apollo</p>
                            <p className="dropdown__item__type">Running Short</p>
                            <p className="dropdown__item__price">$50.00</p>
                            <div className="dropdown__item__size">
                                <div className="dropdown__size__icon">S</div>
                                <div className="dropdown__size__icon">M</div>
                            </div>
                        </div>
                        <div className="dropdown__product__image">
                            <div className="product__qty">
                                <button className="dropdown__increment">+</button>
                                <span className="dropdown__product__count">1</span>
                                <button className="dropdown__decrement">-</button>
                            </div>
                            <div className="picture">
                                <img src={IMAGE} alt="cart-image"></img>
                            </div>
                        </div>
                    </div>

                    <div className="dropdown__product__container">
                        <div className="dropdown__product__description">
                            <p className="dropdown__item__name">Apollo</p>
                            <p className="dropdown__item__type">Running Short</p>
                            <p className="dropdown__item__price">$50.00</p>
                            <div className="dropdown__item__size">
                                <div className="dropdown__size__icon">S</div>
                                <div className="dropdown__size__icon">M</div>
                            </div>
                        </div>
                        <div className="dropdown__product__image">
                            <div className="product__qty">
                                <button className="dropdown__increment">+</button>
                                <span className="dropdown__product__count">1</span>
                                <button className="dropdown__decrement">-</button>
                            </div>
                            <div className="picture">
                                <img src={IMAGE} alt="cart-image"></img>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="dropdown__cart__total">
                        <span className="dropdown__cart__total__label">total:</span>
                        <span className="dropdown__cart__total__sum">$50.00</span>
                    </div>
                    <div className="cart__buttons">
                        <button className="view__cart">view bag</button>
                        <button className="checkout">checkout</button>
                    </div>
                </div>
            </div>
        )
    }
    

}

export default DropdownCart;