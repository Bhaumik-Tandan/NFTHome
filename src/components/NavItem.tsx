import React from 'react'
import COLOR from '../constants/styles/color';


export default function NavItem({title}:{title:string}) {
  return (
    <span style={styles.title}>{title}</span>
  )
};

const styles = {
    title:{
        fontWeight: 600,
        fontFamily: "'Work Sans', sans-serif",
        fontSize: '1.04vw',
        color:COLOR.TEXT_PRIMARY
    }
};