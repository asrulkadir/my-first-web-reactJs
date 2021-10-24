import React from 'react';
import "./ColorBox.scss";

const ColorBox = ({color, style, ...rest}) => {
    return (
        <div className="color-box" style={{...style, backgroundColor: `${color}`}} {...rest}>
            
        </div>
    )
}

export default ColorBox;
