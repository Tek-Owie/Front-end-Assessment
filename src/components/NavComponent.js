import React from "react";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        }

        this.toggleActive = this.toggleActive.bind(this);
    }

    toggleActive() {    
        this.setState(prevState => ({active: !prevState.active}));  
    }

    render() 
    { 
        return (
        <div className="navbar">
            <nav>
                <div className="menu-links">
                    <ul>
                        <li><a href="#" onClick={this.toggleActive} className={this.state.active ? 'active' : ''}>women</a></li>
                        <li><a href="#" onClick={this.toggleActive} className={this.state.active ? 'active' : ''}>men</a></li>
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