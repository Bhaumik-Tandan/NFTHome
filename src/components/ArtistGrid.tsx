import React from 'react';
import ImagePlaceHolder from "assets/Image Placeholder.png";
import Style from 'types/props/Style';
const ArtistCard = ({ rank, username, sales }:{rank:number,username:string,sales:string}) => {
  return (
    <div style={styles.container}>
      <div style={styles.rankContainer}>
        <span style={styles.rankNumber}>{rank}</span>
      </div>
      
      <div style={styles.avatarWrapper}>
        <div style={styles.avatarCircle}>
          <img
            src={ImagePlaceHolder}
            alt={`${username} avatar`}
            style={styles.avatar}
          />
        </div>
      </div>
      
      <div style={styles.infoContainer}>
        <h3 style={styles.username}>{username}</h3>
        <p style={styles.salesText}>
          Total Sales: <span style={styles.ethAmount}>{sales}</span>
        </p>
      </div>
    </div>
  );
};

const ArtistGrid = () => {
  const artists = [
    { id: 1, username: "Keepitreal", sales: "34.53 ETH" },
    { id: 2, username: "DigiLab", sales: "34.53 ETH" },
    { id: 3, username: "GravityOne", sales: "34.53 ETH" },
    { id: 4, username: "Juanie", sales: "34.53 ETH" },
    { id: 5, username: "BlueWhale", sales: "34.53 ETH" },
    { id: 6, username: "Mr Fox", sales: "34.53 ETH" },
    { id: 7, username: "Shroomie", sales: "34.53 ETH" },
    { id: 8, username: "Robotica", sales: "34.53 ETH" },
    { id: 9, username: "RustyRobot", sales: "34.53 ETH" },
    { id: 10, username: "Animakid", sales: "34.53 ETH" },
    { id: 11, username: "Dotgu", sales: "34.53 ETH" },
    { id: 12, username: "Ghiblier", sales: "34.53 ETH" }
  ];

  return (
    <div style={styles.gridWrapper}>
      <div style={styles.grid}>
        {artists.map((artist) => (
          <ArtistCard
            key={artist.id}
            rank={artist.id}
            username={artist.username}
            sales={artist.sales}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtistGrid;

const styles:Style = {
  // Grid Container Styles
  gridWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px'
  },
  
  // Artist Card Styles
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
  }
};