import * as markup from './Product.css';

function returnAttributes(arr) {
  const {attributes} = this.props.savedState.product      
  return arr && arr.map((item, index) =>
    <div key={item.id} className="attrWrapper">
      <h4 className={markup.sizeTitle}>{attributes[index] ? this.creatAttributeNameList(attributes)[index] : ''}</h4>
      {this.setAttributes(index)}
    </div>
  )    
}

export default returnAttributes