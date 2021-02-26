import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    // console.log(props);
    const {img, name, price, seller, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <br/>
                <p>${price}</p>
                <p><small>only {stock} left in store - order soon</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} />  add to cart</button>
            </div>
        </div>
    );
};

export default Product;