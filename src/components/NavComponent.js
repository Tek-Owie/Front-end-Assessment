import React from "react";
import { NavLink } from  'react-router-dom';
import { categories } from "../shared/categories";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories
        }
    }
    render()
    {
        return (
        <div className="navbar">
            <nav>
                <div className="menu-links">
                    <ul>
                        {
                            this.state.categories.map((category) => (
                                <li><NavLink to={category.name} key={category.id}>{category.name}</NavLink></li>
                            ))
                        }
                    </ul>
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
            </nav>
        </div>
    )}
}