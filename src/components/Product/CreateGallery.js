import * as markup from './Product.css';

function createGallery() {
  const {gallery} = this.props
  const gl = gallery.length;
  if (gl === 1) {
    return ''
  } else {
    return gallery && gallery.map((item, index) =>
      <li key={item} className={markup.galleryItem}>
        <div className={this.state.bigImage === index ? markup.imgBig : markup.imgSmall}>
          <img onClick={() => this.changeMainImage(index)} 
          className={markup.imgGalleryItem} src={item} alt="#"/>            
        </div>          
      </li>
    )
  }
} 

  export default createGallery