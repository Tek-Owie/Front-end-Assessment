/* eslint-disable no-useless-constructor */
import React from 'react';

import { NavLink } from 'react-router-dom';

import MyContext from '../../MyContextFile';
import * as markup from './Category.css';
import signIn from '../../../Utils/SignIn';
import creatAttributeOrdersList from '../../../Utils/CreatAttributeOrdersList';
import creatAttributeNameList from '../../../Utils/CreatAttributeNameList';

class CategoryProduct extends React.PureComponent {
  constructor(props) {
    super(props);   
  }
  
  signIn = () => signIn.call(this)

  creatAttributeNameList = (arg) => creatAttributeNameList.call(this, arg)
  
  creatAttributeOrdersList = (arg) => creatAttributeOrdersList.call(this, arg)  

  render() {
    const { 
        id, setCurrentProduct, gallery, item, prices, addToCart, 
        currentCategoryData, attributes, displaySignIn 
    } = this.props
    
    return (
      <section className={markup.categProduct}>
        <NavLink className={markup.prodLink} to={"/product/" + id}> 
          <img onClick={() => setCurrentProduct(id)} className={markup.imgProd} src={gallery[0] || gallery} alt="#"/>
        </NavLink>

        <div className={markup.prodInf}>
          <h3 className={markup.prodTitle}>{item.brand} <span className={markup.subtitle}>{item.name}</span></h3>
       
          <div className={markup.prodPrice}>
            <span>{this.context.currencySimbol}</span><span className={markup.priceNumber}>{prices[this.context.currencyNumber].amount}</span>
          </div>
        </div>

        <div className={markup.prodAddWrapper}>
        <button onClick={() => {
          addToCart(item.inStock, id, this.creatAttributeNameList(currentCategoryData.attributes), 
          this.creatAttributeOrdersList(currentCategoryData.attributes), attributes, 
          (attributes[0] ? attributes[0].items : ''), prices.map(item => item.amount), gallery, item.name, item.brand);
        }}
        className={(item.inStock ? markup.prodAdd : markup.inStockFalse)}><span className={markup.cartIcon}><span className={markup.redLine}></span></span></button>

        <button className={markup.prodSignIn} onClick={() => this.signIn()} 
        style={displaySignIn === 'yes' ? {display: 'block'} : {display: 'none'}}>Press to sign in</button>
        </div>
      </section>
    );
  } 
}

CategoryProduct.contextType = MyContext;

export default CategoryProduct;