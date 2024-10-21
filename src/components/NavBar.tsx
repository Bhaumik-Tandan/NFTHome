import React from 'react'
import COLOR from '../contants/color';

function NavBar() {
  return (
    <div style={styles.navBar}>
      <div style={styles.navTitle}>
        <img style={styles.navTitleText} src={require('../assets/NFT Marketplace.png')} alt="logo" />
      </div>
    </div>
  )
}

export default NavBar;

const styles={
  navBar:{
    padding: '1.04vw 2.6vw',
  },
  navTitle:{
    gap:'0.52vw'
  },
  navTitleText:{
     width: '10.38vw',
      height: '1.03vw',
      top: '0.45vw',
      left: '2.29vw',
  }
};