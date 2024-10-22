import React from 'react'
import heroData from '../constants/heroData';


function HeroStats() {
  return (
    <div>
        {
            heroData.map((data, index) => {
                return (
                    <div key={index}>
                        <h1>{data.title}</h1>
                        <p>{data.value}</p>
                    </div>
                )
            }
            )
        }
    </div>
  )
}

export default HeroStats;