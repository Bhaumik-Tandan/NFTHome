import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import ImagePlaceholder from 'assets/Image Placeholder.png';
const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imageSection}>
          <img
            src={ImagePlaceholder}
            alt="Astronaut reading"
            style={styles.image}
          />
        </div>
        
        <div style={styles.contentSection}>
          <h2 style={styles.title}>Join Our Weekly Digest</h2>
          <p style={styles.subtitle}>
            Get Exclusive Promotions & Updates Straight To Your Inbox.
          </p>
          
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputWrapper}>
              <input
                type="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
              <button type="submit" style={styles.button}>
                <Mail size={20} style={styles.icon} />
                <span>Subscribe</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;

const styles = {
  container: {
    width: '100%',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    display: 'flex',
    backgroundColor: '#2B2B2B',
    borderRadius: '20px',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  imageSection: {
    flex: '1',
    minHeight: '320px',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  contentSection: {
    flex: '1',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: '38px',
    fontWeight: '600',
    marginBottom: '10px',
    '@media (max-width: 768px)': {
      fontSize: '28px',
    },
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: '22px',
    marginBottom: '30px',
    opacity: '0.8',
    '@media (max-width: 768px)': {
      fontSize: '16px',
    },
  },
  form: {
    width: '100%',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      gap: '16px',
    },
  },
  input: {
    flex: '1',
    padding: '16px 20px',
    fontSize: '16px',
    backgroundColor: '#FFFFFF',
    border: 'none',
    borderRadius: '20px',
    marginRight: '-100px',
    zIndex: 1,
    '@media (max-width: 480px)': {
      marginRight: 0,
    },
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 40px',
    backgroundColor: '#A259FF',
    border: 'none',
    borderRadius: '20px',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    zIndex: 2,
    ':hover': {
      backgroundColor: '#8247E5',
    },
  },
  icon: {
    marginRight: '12px',
  },
};