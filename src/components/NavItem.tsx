import React from 'react'

export default function NavItem({title}:{title:string}) {
  return (
    <span style={styles.title}>{title}</span>
  )
};

const styles = {
    title:{
        fontWeight: 600,
        font: 'Work Sans',
        fontSize: '1.04vw',
    }
};