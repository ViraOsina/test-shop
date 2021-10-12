import React from 'react';
import './CartPage.css';
import IMAGE from '../assets/image.jpeg';

const CartPage = props => {
    return (
        <> 
       {/* <div className="category__name">Your cart is empty now</div>*/}
       <div className="category__name"> Cart </div>
        <div className="cart__container">
            <div className="product__line">
                <div className="item__information">
                    <p className="item__name">Apollo</p>
                    <p className="item__type">Running Short</p>
                    <p className="item__price">$50.00</p>
                    <div className="item__size">
                        <div className="size__icon selected">S</div>
                        <div className="size__icon">M</div>
                    </div>
                </div>
                <div className="item__photo">
                    <div className="counter">
                        <button className="increment">+</button>
                        <span className="product__count">1</span>
                        <button className="decrement">-</button>
                    </div>
                    <div className="pictures">
                        <img src={IMAGE} alt="cart-image"></img>
                    </div>
                </div>
            </div>

            <div className="product__line">
                <div className="item__information">
                    <p className="item__name">Apollo</p>
                    <p className="item__type">Running Short</p>
                    <p className="item__price">$50.00</p>
                    <div className="item__size">
                        <div className="size__icon">S</div>
                        <div className="size__icon">M</div>
                    </div>
                </div>
                <div className="item__photo">
                    <div className="counter">
                        <button className="increment">+</button>
                        <span className="product__count">1</span>
                        <button className="increment">-</button>
                    </div>
                    <div className="pictures">
                        <img src={IMAGE} alt="cart-image"></img>
                    </div>
                </div>
            </div>
            <div className="cart__total">
                <span className="cart__total__label">total:</span>
                <span className="cart__total__sum">$50.00</span>
            </div>
        </div>
        </>
    )
}

export default CartPage;