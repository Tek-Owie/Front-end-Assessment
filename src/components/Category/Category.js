import React from 'react';

import loadAllCategories from '../../GraphQL/LoadAllCategories';
import loadCategory from '../../GraphQL/LoadCategory';
import * as markup from './Category.css';
import CategProduct from './CategProduct';

class Category extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {   
      currentCategoryData: ''
    }   
  }

  createList(data) {    
    return data && data.map((item, index) =>
      <li className={markup.productItem} id={item.id} key={item.id}>

        <CategProduct currentCategoryData={this.state.currentCategoryData[index]} 
            item={JSON.parse(JSON.stringify(item))} 
            id={item.id} setCurrentProduct={this.props.setCurrentProduct} 
            gallery={item.gallery} prices={item.prices} attributes={item.attributes} 
            addToCart={this.props.addToCart} displaySignIn={this.props.displaySignIn} 
            setDisplaySignIn={this.props.setDisplaySignIn}
            />
        
      </li>
    )
  } 
  
  async componentDidMount() {
    const {currentCategory, startPage, setSavedCategory} = this.props
    
    if (startPage && startPage === 'yes') {

      const resultAll = await JSON.parse(JSON.stringify((await loadAllCategories())))  
      
      this.setState({       
        currentCategoryData: JSON.parse(JSON.stringify(resultAll.category.products))
      });             
      return;             
      
    }   
    const category = currentCategory === '' ? this.props.match.params.categ : currentCategory
        
    setSavedCategory(category)

    const resultCategory = await JSON.parse(JSON.stringify((await loadCategory(category))))
        
    this.setState({        
      currentCategoryData: JSON.parse(JSON.stringify(resultCategory.category.products))
    });             
  }

  async componentDidUpdate() {
    const {currentCategory, categoryChanged, setDefaultCategoryChanged} = this.props

    if (categoryChanged !== 'no') {

    const category = currentCategory

    const resultCategory = await JSON.parse(JSON.stringify((await loadCategory(category))))
       
      this.setState({       
        currentCategoryData: JSON.parse(JSON.stringify(resultCategory.category.products))
      });
      setDefaultCategoryChanged()
    }
  }
  
  componentWillUnmount() {
    this.props.setDefaultCategoryChanged()    
  }  

  render() {
    return (
      <section className="category">
          <div className="container">
            <h3 className={markup.title}>{this.props.currentCategory === '' ? "All products" : this.props.currentCategory}</h3>
            <ul className={markup.products}>
             {this.createList(this.state.currentCategoryData)}             
            </ul>
          </div>
      </section>
    );
  } 
}

export default Category;