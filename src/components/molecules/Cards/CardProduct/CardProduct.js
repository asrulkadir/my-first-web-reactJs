import React from 'react';
import "./CardProduct.scss";

const CardProduct = ({image, product, ...rest}) => {
    return (
        <div {...rest} className="card-product-wrapper">
            <img className="img-card-product" src={image} alt="product" />
            <p className="title-card-product">{product}</p>
        </div>
    )
}

export default CardProduct;
