import React from 'react'
import Text from '../Text'
import Style from 'types/props/Style';
import Button from '../Button';
import ArtistCard from '../ArtistCard';
import ArtistGrid from '../ArtistGrid';
function Trending() {
  return (
    <div style={styles.container}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            }}>
            <div>
        <Text style={styles.heading}>Trending Creators</Text>
        <Text style={styles.content}>Checkout Top Rated Creators on the NFT Marketplace</Text>
        </div>
        <Button title={"View Rankings"} icon="RocketLaunch" filled={false} />
        </div>
        <ArtistGrid />
    </div>
  )
}

export default Trending;

const styles:Style = {
    container: {
        padding: "5vw"
    },
    heading:{
        fontSize: "38px",
        fontWeight: 600,
    },
    content:{
        fontSize: "22px",
        fontWeight: 400,
    }
};