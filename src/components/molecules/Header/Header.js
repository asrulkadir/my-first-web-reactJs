import React, { useState } from "react";
import Cart from "../../atoms/Cart/Cart";
import Logo from "../../atoms/Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { useHistory } from "react-router";

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const history = useHistory();

    const handleClick = (e) => {
        switch(e.target.innerText) {
            case "HOME":
                history.push("/");
                break;
            case "PRODUCTS":
                history.push("/products");
                break;
            case "ABOUT US":
                history.push("/about-us");
                break;
            case "PRICE LIST":
                history.push("/price-list");
                break;
            case "BLOG":
                history.push("/blog");
                break;
            default:
                history.push("/")
        }
        setToggle(true);
    }

    const activeTab = (history, path) => {
        if (history.location.pathname === path) {
          return { color: "rgb(255, 159, 122)" };
        }
      };

    const handleToggle = () => {
        if(toggle) {
            setToggle(false);
        } else {
            setToggle(true);
        }
    }

    return (
        <div className="header-wrapper">
            <div className="header-container">
            <Logo />
                <div className="nav-wrapper">
                    <div className={!toggle ? "item-wrapper show-item" : "item-wrapper"}>
                        <h4 className="item" onClick={handleClick} style={activeTab(history, "/")}>HOME</h4>
                        <h4 className="item" onClick={handleClick} style={activeTab(history, "/about-us")}>ABOUT US</h4>
                        <h4 className="item" onClick={handleClick} style={activeTab(history, "/products")}>PRODUCTS</h4>
                        <h4 className="item" onClick={handleClick} style={activeTab(history, "/price-list")}>PRICE LIST</h4>
                        <h4 className="item" onClick={handleClick} style={activeTab(history, "/blog")}>BLOG</h4>
                    </div>
                    <Cart />
                    <button className="button-nav" 
                    onClick={handleToggle}>
                        {
                            toggle ?  <FontAwesomeIcon icon={faBars}  size="lg" /> :
                            <FontAwesomeIcon icon={faTimes}  size="lg" />
                        } 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;