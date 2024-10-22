import React from 'react';
import COLOR from 'constants/styles/color';

const NFTCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img 
          src={require("../assets/Image Placeholder.png")}
          alt="NFT" 
          style={styles.mainImage}
        />
      </div>

      {/* Card Content */}
      <div style={styles.label}>
        {/* Title */}
        <p style={styles.title}>
          Space Walking
        </p>

        {/* Creator Info */}
        <div style={styles.creatorContainer}>
          <img 
            src={require("../assets/Avatar.png")}
            alt="Avatar"
            style={styles.avatarImage}
          />
          <span style={styles.creatorName}>
            Animakid
          </span>
        </div>
      </div>
    </div>
  );
};

const styles:any = {
  card: {
    maxWidth: '320px',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: COLOR.BACKGROUND_SECONDARY
  },
  imageContainer: {
    position: 'relative',
    width: '100%'
  },
  mainImage: {
    width: '100%',
    height: '256px',
    objectFit: 'cover'
  },
  label: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    backgroundColor: COLOR.BACKGROUND_SECONDARY
  },
  title: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#FFFFFF',
    margin: 0
  },
  creatorContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  avatarImage: {
    width: '32px',
    height: '32px',
    borderRadius: '50%'
  },
  creatorName: {
    color: '#CCCCCC',
    fontSize: '14px'
  }
};

export default NFTCard;