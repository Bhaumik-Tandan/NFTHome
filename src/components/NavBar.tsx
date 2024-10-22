import React from 'react'
import NAV_ITEMS from '../constants/navItems';
import NavItem from './NavItem';
import Button from './Button';
function NavBar() {
  return (
    <div style={styles.navBar}>
      <div style={styles.navTitle}>
        <img style={styles.navTitleImage} src={require('../assets/Storefront.png')} alt="logo" />
        <img style={styles.navTitleText} src={require('../assets/NFT Marketplace.png')} alt="logo" />
      </div>
      {
        NAV_ITEMS.map((item, index) => (
          <NavItem key={index} title={item.title} />
        ))
      }
      <Button title="Sign Up" icon="User" />
    </div>
  )
}

export default NavBar;

const styles={
  navBar:{
    padding: '1.04vw 2.6vw',
    display: 'flex',
    justifyContent: 'space-between',
  },
  navTitle:{
    gap:'0.52vw',
    display: 'flex',
    alignItems: 'center',

  },
  navTitleText:{
     width: '10.38vw',
      height: '1.03vw',
      left: '2.29vw',
      display: 'flex',
      alignItems: 'center',
  },
  navTitleImage:{
    width:'2.96vh',
    aspectRatio: '1'
  }
};