import React from 'react';
import ImagePlaceHolder from "assets/Image Placeholder.png";
import Avatar from "assets/Avatar.png";
import Style from 'types/props/Style';
const NFTCard = ({ title, artist, price, highestBid }:{
  title:string, artist:string, price:string, highestBid:string
}) => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.imageContainer}>
        <img 
          src={ImagePlaceHolder}
          alt={title}
          style={styles.artwork}
        />
      </div>
      <div style={styles.infoContainer}>
        <h3 style={styles.title}>{title}</h3>
        <div style={styles.artistRow}>
          <img 
            src={Avatar}
            alt={artist}
            style={styles.artistAvatar}
          />
          <span style={styles.artistName}>{artist}</span>
        </div>
        <div style={styles.priceRow}>
          <div style={styles.priceColumn}>
            <span style={styles.label}>Price</span>
            <span style={styles.value}>{price} ETH</span>
          </div>
          <div style={styles.priceColumn}>
            <span style={styles.label}>Highest Bid</span>
            <span style={styles.value}>{highestBid} wETH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const NFTCollection = () => {
  const nfts = [
    {
      id: 1,
      title: "Distant Galaxy",
      artist: "MoonDancer",
      price: "1.63",
      highestBid: "0.33",
    },
    {
      id: 2,
      title: "Life On Edena",
      artist: "NebulaKid",
      price: "1.63",
      highestBid: "0.33",
    },
    {
      id: 3,
      title: "AstroFiction",
      artist: "Spaceone",
      price: "1.63",
      highestBid: "0.33",
    }
  ];

  return (
    <div style={styles.collectionWrapper}>
      <div style={styles.collectionGrid}>
        {nfts.map((nft) => (
          <NFTCard
            key={nft.id}
            title={nft.title}
            artist={nft.artist}
            price={nft.price}
            highestBid={nft.highestBid}
          />
        ))}
      </div>
    </div>
  );
};

export default NFTCollection;

const styles:Style = {
  collectionWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px'
  },
  collectionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px'
  },
  cardContainer: {
    backgroundColor: '#2B2B2B',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'transform 0.2s ease-in-out'
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    paddingTop: '75%', // 4:3 aspect ratio
    overflow: 'hidden'
  },
  artwork: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  infoContainer: {
    padding: '20px'
  },
  title: {
    color: '#FFFFFF',
    fontSize: '22px',
    fontWeight: '600',
    margin: '0 0 12px 0'
  },
  artistRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px'
  },
  artistAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    marginRight: '12px'
  },
  artistName: {
    color: '#FFFFFF',
    fontSize: '16px'
  },
  priceRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
    padding: '12px 0',
    borderTop: '1px solid #3B3B3B'
  },
  priceColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    color: '#858584',
    fontSize: '12px',
    marginBottom: '4px'
  },
  value: {
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '500'
  }
};