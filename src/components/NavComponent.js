import React from "react";

export default class NavBar extends React.Component {
    render() 
    { 
        return (
        <nav className="nav">
            <div className="navbar">
                <div className="menu-links">
                    <a href="#">women</a>
                    <a href="">men</a>
                    <a href="">kids</a>
                </div>
                <div className="brand-logo">
                    <img src="assets/a-logo.svg" alt="brand logo" />
                </div>
                <div className="checkout">
                    <select name="currency" id="">
                        <option value="dollars">$</option>
                    </select>
                    <div>
                        <span className="cart">
                            <img src="assets/shopping-cart.svg" alt="shopping cart" />
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )}
}