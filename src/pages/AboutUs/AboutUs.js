import React from 'react';
import Button from '../../components/atoms/Button/Button';
import Underline from '../../components/atoms/Underline/Underline';
import "./AboutUs.scss";

const AboutUs = () => {
    return (
        <div className="about-wrapper">
            <h1>About Us</h1>
            <Underline />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non praesentium, earum id vel recusandae perferendis soluta eligendi pariatur, tempora quo nostrum saepe commodi voluptatem et? Eaque sequi cupiditate saepe ab quod iste rem, necessitatibus voluptates omnis nostrum hic velit doloremque, fuga culpa maxime, recusandae qui nulla accusantium perferendis adipisci suscipit?</p>

            <div className="visi-misi">
                <h2>Visi:</h2>
                <p className="visi-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, possimus.</p>
                <h2>Misi:</h2>
                <ol>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nam.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, omnis tempora.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque.</li>
                </ol>
            </div>

            <h2>Kaos Polos</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta consequatur rerum pariatur enim iste, molestiae consequuntur fugiat asperiores aut. Iste laboriosam numquam aspernatur deserunt et illo tenetur ab enim dicta?, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium corrupti alias quia voluptate optio sapiente, perferendis ipsa iure molestiae, natus tempora nam quae dignissimos a facilis. Natus quasi dolorum voluptatem.</p>
            
            <div className="lihat-produk-kami">
                <Button title="Lihat Produk Kami" />
            </div>
        </div>
    )
}

export default AboutUs;
