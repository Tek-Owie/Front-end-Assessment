import React from 'react';
import * as markup from './Product.css';
import PopUp from '../../../Elements/PopUp';
import creatGallery from './ProdUtils/CreatGallery';

class ProductImages extends React.PureComponent { 
  constructor(props) {
    super(props);    
    this.state = {
      bigImage: '',
      imageIndex: 0    
    }
    this.setBigImage = this.setBigImage.bind(this)         
  }

  setBigImage(arg) {
    this.setState({   
      bigImage: arg,
         
      });
  }

  changeMainImage(index) {
    this.setState({   
      imageIndex: index,         
      });
  }

  creatGallery = () => creatGallery.call(this)

  render() {
    const {bigImage, imageIndex} = this.state
    const {gallery} = this.props

    return (
      <section className="ProductImages">
        <div className={markup.galleryWrapper}>
          <ul className={markup.galleryList}>
            {this.creatGallery()}
          </ul>        

          <div className={markup.imgProd} style={bigImage === 'main' ? {display: 'none'} : {display: 'block'}}>
            <img onClick={() => this.setBigImage('main')} src={gallery[imageIndex]} alt="#"/>
          </div>

          <PopUp inner={'img'} img={gallery[imageIndex]} 
          style={bigImage === 'main' ? {display: 'block'} : {display: 'none'}} 
          bigImage={bigImage} setBigImage={this.setBigImage}/>

        </div>
      </section>
    ); 
  } 
}

export default ProductImages;