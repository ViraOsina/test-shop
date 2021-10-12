import React from 'react';
import IMAGE from '../assets/image.jpeg';
import './ProductPage.css';

const ProductPage = props => {
    return (
        <>
        <div className="product__container">
            <div className="side__images">
                <div className="small__image">
                    <img src={IMAGE} alt="small-image"></img>
                </div>
                <div className="small__image">
                    <img src={IMAGE} alt="small-image"></img>
                </div>
                <div className="small__image">
                    <img src={IMAGE} alt="small-image"></img>
                </div>
            </div>
            <div className="main__image">
                <img src={IMAGE} alt="main-image"></img>
            </div>
            <div className="information__container">
                <p className="product__name">Apollo</p>
                <p className="product__type">Running Short</p>
                <p className="size__label">size:</p>
                <div className="sizes">
                    <div className="size__box absent">XS</div>
                    <div className="size__box">S</div>
                    <div className="size__box">M</div>
                    <div className="size__box">L</div>
                </div>
                <p className="price__label">price:</p>
                <p className="price">$50.00</p>
                <button type="submit" className="add__to__cart__btn">Add to cart</button>
                <p className="product__description">Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
            </div>
        </div>
        </>
    )
}

export default ProductPage;