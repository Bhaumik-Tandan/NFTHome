import React from 'react'
import NavBar from '../components/NavBar';
import COLOR from '../contants/color';

function Home() {
  return (
    <div style={styles.home}>
      <NavBar />
    </div>
  )
}

export default Home;

const styles={
  home:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: COLOR.BACKGROUND
  }
};
