import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import Avatar from "assets/Avatar.png";
import StoreFront from "assets/Storefront.png";
import Style from 'types/props/Style';
const CountdownTimer = ({ hours, minutes, seconds }:{
  hours:number,
  minutes:number,
  seconds:number
}) => {
  return (
    <div style={styles.timerContainer}>
      <p style={styles.timerLabel}>Auction ends in:</p>
      <div style={styles.timerValues}>
        <div style={styles.timerBlock}>
          <span style={styles.timerNumber}>{hours}</span>
          <span style={styles.timerUnit}>Hours</span>
        </div>
        <span style={styles.timerSeparator}>:</span>
        <div style={styles.timerBlock}>
          <span style={styles.timerNumber}>{minutes}</span>
          <span style={styles.timerUnit}>Minutes</span>
        </div>
        <span style={styles.timerSeparator}>:</span>
        <div style={styles.timerBlock}>
          <span style={styles.timerNumber}>{seconds}</span>
          <span style={styles.timerUnit}>Seconds</span>
        </div>
      </div>
    </div>
  );
};

const NFTBanner = () => {
  const [time, setTime] = useState({
    hours: 59,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.backgroundOverlay}>
        <img 
          src={Avatar}
          alt="Magic Mashrooms"
          style={styles.backgroundImage}
        />
      </div>
      
      <div style={styles.content}>
        <div style={styles.artistTag}>
          <img 
            src={StoreFront}
            alt="Shroomie"
            style={styles.artistAvatar}
          />
          <span style={styles.artistName}>Shroomie</span>
        </div>

        <h1 style={styles.title}>Magic Mashrooms</h1>

        <button style={styles.seeNFTButton}>
          <Eye size={20} style={styles.buttonIcon} />
          <span>See NFT</span>
        </button>

        <div style={styles.timerWrapper}>
          <CountdownTimer 
            hours={time.hours}
            minutes={time.minutes}
            seconds={time.seconds}
          />
        </div>
      </div>
    </div>
  );
};

export default NFTBanner;

const styles:Style = {
  container: {
    position: 'relative',
    width: '100%',
    height: '600px',
    overflow: 'hidden',
  },
  backgroundOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%)',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 24px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  artistTag: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'rgba(22, 22, 22, 0.5)',
    borderRadius: '20px',
    padding: '8px 16px',
    marginBottom: '20px',
  },
  artistAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    marginRight: '12px',
  },
  artistName: {
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '500',
  },
  title: {
    color: '#FFFFFF',
    fontSize: '48px',
    fontWeight: '700',
    marginBottom: '30px',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  seeNFTButton: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    color: '#2B2B2B',
    border: 'none',
    borderRadius: '20px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    marginBottom: '30px',
  },
  buttonIcon: {
    marginRight: '12px',
  },
  timerWrapper: {
    display: 'inline-block',
  },
  timerContainer: {
    background: 'rgba(59, 59, 59, 0.5)',
    borderRadius: '20px',
    padding: '24px',
  },
  timerLabel: {
    color: '#FFFFFF',
    fontSize: '12px',
    marginBottom: '12px',
  },
  timerValues: {
    display: 'flex',
    alignItems: 'center',
  },
  timerBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timerNumber: {
    color: '#FFFFFF',
    fontSize: '38px',
    fontWeight: '700',
  },
  timerUnit: {
    color: '#FFFFFF',
    fontSize: '12px',
    marginTop: '4px',
  },
  timerSeparator: {
    color: '#FFFFFF',
    fontSize: '38px',
    fontWeight: '700',
    margin: '0 16px',
  },
};