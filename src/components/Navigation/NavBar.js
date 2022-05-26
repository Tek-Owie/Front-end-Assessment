import React from 'react';
import { NavLink } from 'react-router-dom';
import imgLogo from '../../Images/a-logo.png'
import CartMini from '../UserCart/CartMini/CartMini';
import * as markup from './Nav.css';
import MyContext from '../../MyContextFile';
import NavCategories from './NavCategories';
import NavCartPlusCurrency from './NavCartplusCurrency';

class NavBar extends React.PureComponent { 
  constructor(props) {
    super(props);
    this.popUpRef = React.createRef();    

    this.state = {
      category: '',           
      popUp: markup.hidden     
    }

    this.hideCartMini = this.hideCartMini.bind(this)
    this.markActive = this.markActive.bind(this)
    this.showCartMini = this.showCartMini.bind(this)   
  }  

  showCartMini() {
    this.setState({
      popUp: markup.popUp      
    })    
  }

  hideCartMini() {    
    this.setState({        
      popUp: markup.hidden      
    })    
  }  

  hideCartMini_2(event) {
    if (this.popUpRef.current && !this.popUpRef.current.contains(event.target)) {
      this.setState({
        popUp: markup.hidden      
      })
    }
  } 

  markActive(category) {
    this.setState({
      category: category,
      popUp: markup.hidden      
    })
  }

  render() {
    const {category, popUp} = this.state
    const {changeCurrentCategory, savedCategory, changeCurrency, countCart, displayCountCart, savedHref, miniCartChanged, setSavedHref, miniCartProductChanged, setMiniCartProductChanged} = this.props 
    return (      
      <nav className={markup.nav}>
          <div className="container">
            <div className={markup.wrapper}>

              <NavCategories category={category} markActive={this.markActive} changeCurrentCategory={changeCurrentCategory} savedCategory={savedCategory}/>             

              <div className={markup.logo}>
                <NavLink onClick={() => {changeCurrentCategory(''); this.markActive('')}} className={markup.linkHome} to="/">
                  <img className={markup.imgLogo} src={imgLogo} alt="#"/>
                  <span className={markup.clue}>To All products</span>
                </NavLink>
              </div>

              <NavCartPlusCurrency changeCurrency={changeCurrency} countCart={countCart} displayCountCart={displayCountCart} savedHref={savedHref} category={category} showCartMini={this.showCartMini}/>              
            </div>
          </div>
              
          <div onClick={(event) => this.hideCartMini_2(event)} className={popUp}>
            <div ref={this.popUpRef} className={markup.innerPopUp}><CartMini hideCartMini={this.hideCartMini} category={category} miniCartChanged={miniCartChanged} setSavedHref={setSavedHref} savedHref={savedHref} miniCartProductChanged={miniCartProductChanged} setMiniCartProductChanged={setMiniCartProductChanged}
            /></div>
          </div>
      </nav>
    ); 
  } 
}

NavBar.contextType = MyContext;

export default NavBar;