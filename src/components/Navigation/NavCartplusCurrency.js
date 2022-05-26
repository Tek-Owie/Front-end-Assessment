/* eslint-disable no-useless-constructor */
import React from 'react';
import { NavLink } from 'react-router-dom';

import * as markup from './Nav.css';
import MyContext from '../../MyContextFile';

import offLink from './OffLink';
import CurrencyButton from './CurrencyButton';
import CurrencySymbol from './CurrencySymbol';

class NavCartPlusCurrency extends React.PureComponent { 
  constructor(props) {
    super(props);
  }

  offLink = (event) => offLink.call(this, event)

  CurrencySymbol = (index) => CurrencySymbol.call(this, index)  
  
  CurrencyButton = () => CurrencyButton.call(this)  

  render() {
    const {category, showCartMini, displayCountCart, countCart} = this.props
    return (
      <section className={markup.cartWrapper}>
        <span className={markup.currency}>{this.context.currencySimbol}</span>

        <div className={markup.chooseCurrency}>
          <ul>
            {this.CurrencyButton()}                   
          </ul>
        </div>

        <div onClick={() => {showCartMini()}} className={markup.cartLink}>                  
          <span className={markup.cartLinkIcon} style={displayCountCart === "yes" ? {display: 'flex'} : {display: 'none'}}>{countCart}</span>

          <NavLink onClick={(event) => this.offLink(event)} className={markup.fromCartLink}  to={"/fake-cart/" + category}>                  
          </NavLink>                  
        </div>
      </section>            
    );
  } 
}

NavCartPlusCurrency.contextType = MyContext;

export default NavCartPlusCurrency;