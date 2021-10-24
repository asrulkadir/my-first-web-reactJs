import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import "./Footer.scss";
import Icon from '../../atoms/Icon/Icon';
import { Facebook, Instagram, Whatsapp } from '../../../assets/assets';

const Footer = () => {
    return (
        <div className= "footer-wrapper">
            <div className="footer">
                <div>
                    <div className="logo-wrapper">
                        <Logo />
                        <p className="title-footer">Kaos Bugis Pinrang</p>
                    </div>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /> Desa Polewali Kec. Suppa Kab. Pinrang</p>
                    <p><FontAwesomeIcon icon={faPhoneAlt} size="lg" /> +62 822 3822 8544</p>
                    <p><FontAwesomeIcon icon={faEnvelope} size="lg" /> asrulkadir.asus4@gmail.com</p>
                    <div className="medsos-wrapper">
                        <Icon img={Facebook} />
                        <Icon img={Instagram} />
                        <Icon img={Whatsapp} /> 
                    </div>
                </div>

                <div className="pages-footer-wrapper">
                    <p className="title-footer">Pages</p>
                    <p><a href="/">About Us</a></p>
                    <p><a href="/">How to Order</a></p>
                    <p><a href="/">Cara Pembayaran</a></p>
                    <p><a href="/">Term and Conditions</a></p>
                    <p><a href="/">Contact Us</a></p>
                </div>

                <div className="products-footer-wrapper">
                    <p className="title-footer">Products</p>
                    <p><a href="/">T-shirt</a></p>
                    <p><a href="/">Raglan</a></p>
                    <p><a href="/">Polo</a></p>
                    <p><a href="/">Jaket</a></p>
                    <p><a href="/">Child & Baby</a></p>
                    <p><a href="/">Ladies</a></p>
                </div>
            </div>

            <div className="copyright">
                <p>&copy; Copyright 2021 by Asrul Kadir All Right Reserved</p>
            </div>

        </div>
    )
}

export default Footer;
