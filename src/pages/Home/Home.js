import React, {useEffect} from "react";
import { Jaket, JumbotronImg1, Kemeja, Kids, Ladies, Polo, Raglan, Shirt, Trouser } from "../../assets/assets";
import CardItem from "../../components/molecules/Cards/CardItem/CardItem";
import CardProduct from "../../components/molecules/Cards/CardProduct/CardProduct";
import ComponentCarousel from "../../components/molecules/Carousel/Carousel";
import Jumbotron from "../../components/molecules/Jumbotron/Jumbotron";
import "./Home.scss";
import AOS from 'aos';
import "aos/dist/aos.css";
import CardBlog from "../../components/molecules/Cards/CardBlog/CardBlog";
import Button from "../../components/atoms/Button/Button";
// import { useHistory } from "react-router";

const Home = () => {
    // const history = useHistory()
    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, []);

    return (
        <div className="home">
            <Jumbotron image={JumbotronImg1} />
            <ComponentCarousel />
            <CardItem />
            <hr />
            <div className="sub-title">
                <h1>OUR PRODUCTS</h1> 
            </div>
            <hr />
            <div className="product-wrapper">
                <CardProduct data-aos="fade-up" image={Shirt} product="Kaos Polos" />
                <CardProduct data-aos="fade-up" image={Polo} product="Polo" />
                <CardProduct data-aos="fade-up" image={Raglan} product="Raglan" />
                <CardProduct data-aos="fade-up" image={Jaket} product="Jacket" />
                <CardProduct data-aos="fade-up" image={Ladies} product="Ladies" />
                <CardProduct data-aos="fade-up" image={Kids} product="Kids & Babies" />
                <CardProduct data-aos="fade-up" image={Kemeja} product="Kemeja" />
                <CardProduct data-aos="fade-up" image={Trouser} product="Celana" />
            </div>
            <hr />
            <div className="main-blog-wrapper">
                <h1 style={{color: "#FF4500"}}>BLOG</h1> 
                <div className="blog-wrapper">
                    <CardBlog image="https://placeimg.com/300/150/arch" title="Lorem Ipsum Dorem" />
                    <CardBlog image="https://placeimg.com/300/150/arch" title="Lorem Ipsum Dorem" />
                    <CardBlog image="https://placeimg.com/300/150/arch" title="Lorem Ipsum Dorem" />
                    <CardBlog image="https://placeimg.com/300/150/arch" title="Lorem Ipsum Dorem" />
                </div>
                <div className="button-more">
                    <Button title="More" />
                </div>
            </div>
        </div>
    )
}

export default Home; 