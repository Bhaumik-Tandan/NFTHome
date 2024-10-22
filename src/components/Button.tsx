import React from 'react'
import COLOR from '../constants/color';
import { title } from 'process';

function Button({title,icon}) {
  return (
    <div style={styles.button}>
        <img src={require(`../assets/${icon}.png`)} alt="icon" style={styles.icon}/>
        <span style={styles.title}>{title}</span>
    </div>
  )
}

export default Button;

const styles = {
    button:{
        backgroundColor: COLOR.BUTTON,
        gap:'0.52vw',
        borderRadius: '0.52vw',
        padding: '0.52vw 1.04vw',
    },
    icon:{
        width:'1.04vw',
        aspectRatio: '1'
    },
    title:{
        fontWeight: 600,
        fontFamily: "'Work Sans', sans-serif",
        fontSize: '1.04vw',
        color:COLOR.TEXT_PRIMARY
    }
};