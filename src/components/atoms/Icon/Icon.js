import React from 'react';
import "./Icon.scss";

const Icon = ({img}) => {
    return (
        <div>
            <img className="icon-medsos" src={img} alt="Icon Medsos" />
        </div>
    )
}

export default Icon;
