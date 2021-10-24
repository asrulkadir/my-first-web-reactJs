import React from 'react';
import "./CardBlog.scss";

const CardBlog = ({image, title}) => {
    return (
        <div className="card-blog-wrapper">
            <img className="img-card-blog" src={image} alt="Blog" />
            <p className="title-card-blog">{title}</p>
            <hr />
            <p className="posted-card-blog">Posted by Asrul K - 18/10/2021</p>
        </div>
    )
}

export default CardBlog;
