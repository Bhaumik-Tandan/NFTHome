import React from 'react';
import type Style from 'types/props/Style';
import ImagePlaceHolder from "assets/Image Placeholder.png";
function ArtistCard() {
  return (
    <div style={styles.container}>
      <div style={styles.rankContainer}>
        <span style={styles.rankNumber}>1</span>
      </div>
      
      <div style={styles.avatarWrapper}>
        <div style={styles.avatarCircle}>
         
            <img 
          src={ImagePlaceHolder}
          alt="NFT" 
          style={styles.avatar}
        />
        </div>
      </div>
      
      <div style={styles.infoContainer}>
        <h3 style={styles.username}>Keepitreal</h3>
        <p style={styles.salesText}>
          Total Sales: <span style={styles.ethAmount}>34.53 ETH</span>
        </p>
      </div>
    </div>
  );
}

export default ArtistCard;

const styles: Style = {
  container: {
    backgroundColor: '#1E1E1E',
    borderRadius: '12px',
    padding: '16px',
    width: '256px',
    position: 'relative',
  },
  rankContainer: {
    position: 'absolute',
    top: '8px',
    left: '8px',
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
    borderRadius: '50%',
    padding: '2px 8px',
  },
  rankNumber: {
    color: '#9CA3AF',
    fontSize: '14px',
  },
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '12px',
  },
  avatarCircle: {
    width: '80px',
    height: '80px',
    backgroundColor: '#2D7D7D',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  infoContainer: {
    textAlign: 'center',
    marginTop: '12px',
  },
  username: {
    color: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 600,
    margin: 0,
  },
  salesText: {
    color: '#9CA3AF',
    fontSize: '14px',
    marginTop: '8px',
  },
  ethAmount: {
    color: '#FFFFFF',
  },
};