/* eslint-disable no-useless-constructor */
import React from 'react';
import Category from './Category';

class CategoryIndex extends React.PureComponent {
    constructor(props) { 
      super(props);  
    }
    
    componentDidMount() {
      this.props.changeStartPage('no')
    }

    componentWillUnmount() {
      this.props.changeStartPage('no')
    }  
  
    render() {
      const {currentCategory, categoryChanged, setDefaultCategoryChanged, startPage, changeStartPage, setCurrentProduct, addToCart, setDisplaySignIn, displaySignIn} = this.props
      return (        
        <Category currentCategory={currentCategory} 
        categoryChanged={categoryChanged} 
        setDefaultCategoryChanged={setDefaultCategoryChanged} 
        startPage={startPage} changeStartPage={changeStartPage} 
        setCurrentProduct={setCurrentProduct} addToCart={addToCart} 
        setDisplaySignIn={setDisplaySignIn} displaySignIn={displaySignIn}/>     
      );
    } 
  }

  export default CategoryIndex;