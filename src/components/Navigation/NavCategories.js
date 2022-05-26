import React from 'react';
import * as markup from './Nav.module.css';
import MyContext from '../../MyContextFile';
import NavLinksList from './NavLinksList';

class NavCategories extends React.PureComponent {
  constructor(props) {
    super(props);
    this.menuRef = React.createRef();

    this.state = {
      menu: '',
      btnShow: '',
      btnClose: ''
    }   
  }

  NavLinksList = () => NavLinksList.call(this)

  showMenu() {
    this.setState({
      menu: 'visible',
      btnClose: 'visible',
      btnShow: 'hidden'     
    })
  }

  closeMenu(event) {
    if (this.menuRef.current && !this.menuRef.current.contains(event.target)) {
    this.setState({
      menu: 'hidden',
      btnClose: 'hidden',
      btnShow: 'visible'     
    })
  }
  }

  render() {
    const {menu, btnClose, btnShow} = this.state 
    return (      
      <section>
        <button onClick= {() => this.showMenu()} style={btnShow === 'visible' ? {display: 'block'} : {display: 'none'}}  
        className={markup.showMenu}>Menu</button>

         <button style={btnClose === 'hidden' ? {display: 'none'} : {display: 'block'}} className={markup.closeMenu}>Click outside to close menu</button>                   

        <div onClick= {(event) => this.closeMenu(event)} className={(menu === '' || menu === 'visible') ? markup.menuOpenWrapper : markup.menuWrapper}>
          <ul ref={this.menuRef} className={markup.menu} style={menu === 'hidden' ? {display: 'none'} : {display: 'flex'}}>                
            {this.NavLinksList()}                
          </ul>
        </div>                 
      </section>
    );
  } 
}

NavCategories.contextType = MyContext;

export default NavCategories;