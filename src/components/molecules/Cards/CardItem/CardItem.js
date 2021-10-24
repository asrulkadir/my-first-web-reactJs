import React from 'react';
import "./CardItem.scss";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaThumbsUp, FaTruckMoving } from "react-icons/fa";

const CardItem = () => {
    return (
        <div className="main-card-item-wrapper">
            <div data-aos="fade-up" className="card-item-wrapper">
                <p className="icon-card-item"><RiCustomerService2Fill /></p>
                <p className="title-card-item">Pelayanan Pelanggan</p>
                <p className="description-card-item">Kami melayani pelanggan pada hari kerja, Senin sampai Sabtu pukul 08:00 - 17:00</p>
            </div>
            <div data-aos="fade-up" className="card-item-wrapper">
                <p className="icon-card-item"><FaThumbsUp /></p>
                <p className="title-card-item">Barang Berkualitas</p>
                <p className="description-card-item">Barang yang kami jual berkualitas dan nyaman, sudah lulus Quality Control</p>
            </div>
            <div data-aos="fade-up" className="card-item-wrapper">
                <p className="icon-card-item"><FaTruckMoving /></p>
                <p className="title-card-item">Barang Dijamin Sampai</p>
                <p className="description-card-item">Barang yang anda beli akan dikirim dan dipastikan akan sampai di tangan anda</p>
            </div>
        </div>
    )
}

export default CardItem;
