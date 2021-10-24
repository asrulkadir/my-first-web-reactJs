import React from 'react';
import "./Jumbotron.scss";

const Jumbotron = ({image}) => {
    const style = {
        backgroundImage: `url(${image})`,
    }
    return (
        <div className="jumbotron" style={style}>
            <p className="title-jumbotron">Jual Kaos Polos, Jaket, Polo, Raglan dan lain-lain</p>
            <p className="text-jumbotron">Kami menyidakan kaos cotton 20s dan 30s, kaos polo, jaket, sweater, harga bersaing dan berkualitas</p>
        </div>
    )
}

export default Jumbotron;
