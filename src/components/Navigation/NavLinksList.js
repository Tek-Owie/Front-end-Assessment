import { NavLink } from 'react-router-dom';
import * as markup from './Nav.css';

function NavLinksList() {
  const {category, markActive, savedCategory, changeCurrentCategory} = this.props
  return this.context.categoriesList && this.context.categoriesList.map(item => // eslint-disable-next-line
    <li onClick={() => markActive(item.category)} className={(category === item.category || category === '' && savedCategory === item.category) ? markup.active : markup.menuItem} key={item.category}>
      <NavLink onClick={() => changeCurrentCategory(item.category)} className={markup.link} to={"/categ/" + item.category}>
         {item.category}
      </NavLink>
    </li>      
  )
}

export default NavLinksList;