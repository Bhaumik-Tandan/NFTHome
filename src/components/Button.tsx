import React from 'react';
import COLOR from '../constants/styles/color';
import ButtonProps from 'types/props/ButtonProps';
import { CSSProperties } from 'react';

function Button({ title, icon, filled = true }: ButtonProps) {
  const buttonStyle: CSSProperties = {
    ...styles.button,
    ...(filled ? {} : styles.notFilled)
  };

  return (
    <div style={buttonStyle}>
      <img src={require(`../assets/${icon}.png`)} alt="icon" style={styles.icon} />
      <span style={styles.title}>{title}</span>
    </div>
  );
}

export default Button;

const styles: Record<string, CSSProperties> = {
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: COLOR.BUTTON,
    gap: '0.52vw',
    borderRadius: '0.52vw',
    padding: '0.52vw 1.04vw',
    cursor: 'pointer',
    height: '2.08vw',
  },
  icon: {
    width: '1.04vw',
    aspectRatio: '1',
  },
  title: {
    fontWeight: 600,
    fontFamily: "'Work Sans', sans-serif",
    fontSize: '1.04vw',
    color: COLOR.TEXT_PRIMARY,
  },
  notFilled: {
    backgroundColor: "transparent",
    border: `1px solid ${COLOR.BUTTON}`,
  }
};