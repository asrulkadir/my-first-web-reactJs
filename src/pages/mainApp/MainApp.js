import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop/ScrollToTop";
import Footer from "../../components/molecules/Footer/Footer";
import Header from "../../components/molecules/Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import Home from "../Home/Home";
import Products from "../Products/Products";
import "./mainApp.scss";
import PriceList from "../PriceList/PriceList";
import Blog from "../Blog/Blog";

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Router>
                <Switch>
                    <Route path="/about-us">
                        <ScrollToTop />
                        <Header />
                        <AboutUs />
                        <Footer />
                    </Route>
                    <Route path="/products">
                        <ScrollToTop />
                        <Header />
                        <Products />
                        <Footer />
                    </Route>
                    <Route path="/price-list">
                        <ScrollToTop />
                        <Header />
                        <PriceList />
                        <Footer />
                    </Route>
                    <Route path="/blog">
                        <ScrollToTop />
                        <Header />
                        <Blog />
                        <Footer />
                    </Route>
                    <Route path="/">
                        <ScrollToTop />
                        <Header />
                        <Home />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default MainApp;