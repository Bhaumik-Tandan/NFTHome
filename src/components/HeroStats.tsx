import React from 'react'
import heroData from 'constants/heroData';
import Text from './Text';

function HeroStats() {
  return (
    <div style={styles.container}>
        {
            heroData.map((data, index) => {
                return (
                    <Text key={index}>
                        <h1>{data.title}</h1>
                        <p>{data.value}</p>
                    </Text>
                )
            }
            )
        }
    </div>
  )
}

export default HeroStats;

const styles = {
    container:{
        display: "flex",
        justifyContent: "space-between",
        margin: "20px"
    }
};