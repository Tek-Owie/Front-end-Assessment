import React from 'react';
import * as markup from './Product.css';
import MyContext from '../../MyContextFile';
import signIn from '../../../Utils/SignIn';
import creatAttributeNameList from '../../../Utils/CreatAttributeNameList';
import creatAttributeOrdersList from '../../../Utils/CreatAttributeOrdersList';
import setAttributes from './ProdUtils/SetAttributes';
import returnAttributes from './ProdUtils/ReturnAttributes';

class ProductInfo extends React.PureComponent { 
  constructor(props) {
    super(props);
    this.descrRef = React.createRef(); 
  }

  setAttributes = (order) => setAttributes.call(this, order)

  returnAttributes = (arr) => returnAttributes.call(this, arr)
  
  signIn = () => signIn.call(this)

  creatAttributeNameList = (arg) => creatAttributeNameList.call(this, arg)
  
  creatAttributeOrdersList = (arg) => creatAttributeOrdersList.call(this, arg)

  componentDidMount() {
    const {attributeOrders, changeAttributeOrders} = this.props
    const {attributes, description} = this.props.savedState.product

    this.descrRef.current.innerHTML = description
    if (attributeOrders === '') {
      const orders = this.creatAttributeOrdersList(attributes)
      changeAttributeOrders(orders)
    }         
  }

  componentDidUpdate() {
    const {changeAttributeOrders} = this.props
    const {attributes, description} = this.props.savedState.product

    this.descrRef.current.innerHTML = description
    if (this.props.attributeOrders === '') {
      const orders = this.creatAttributeOrdersList(attributes)
      changeAttributeOrders(orders)      
    }
  }

  componentWillUnmount() {
    this.props.changeAttributeOrders('')
  }

  render() {
    const {savedPrices, addToCart, attributeOrders, displaySignIn} = this.props
    const {instock, attributes_1, gallery} = this.props.savedState
    const {brand, name, attributes, id} = this.props.savedState.product
    return (
      <section className="Product">         
              <div className={markup.prodWrapper}>
                <h3 className={markup.title}>{brand}</h3>
                <span className={markup.subtitle}>{name}</span>

                {attributes ? this.returnAttributes(attributes) : ''}                

                <h4 className={markup.priceTitle}>Price:</h4>

                <div className={markup.prodPrice}><span className={markup.currencySimbol}>{this.context.currencySimbol}</span><span className={markup.currencyAmount}>{savedPrices[this.context.currencyNumber]}</span></div>

                <div className={markup.addWrapper}>
                  <button onClick={() => {
                    addToCart(instock, id, this.creatAttributeNameList(attributes), attributeOrders, attributes, attributes_1,  savedPrices, gallery, name, brand);}}
                  className={(instock ? markup.add : markup.inStockFalse)}>
                    <span className={markup.out}>Out of stock</span><span className={markup.inStock}>Add to cart</span>                  
                  </button>

                  <button onClick={() => this.signIn()} className={markup.signIn} style={displaySignIn === 'yes' ? {display: 'block'} : {display: 'none'}}>Press to sign in</button>
                </div>              

                <div ref={this.descrRef} className={markup.prodDescription}></div>

              </div>
      </section>
    );
  } 
}

ProductInfo.contextType = MyContext;

export default ProductInfo;