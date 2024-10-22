import React, { useState } from 'react';
import { Store, Mail } from 'lucide-react';
import ImagePlaceHolder from 'assets/Image Placeholder.png';
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribe:', email);
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Marketplace Info */}
          <div style={styles.column}>
            <div style={styles.brand}>
              <Store size={32} color="#A259FF" />
              <h2 style={styles.brandName}>NFT Marketplace</h2>
            </div>
            <p style={styles.description}>
              NFT marketplace UI created with Anima for Figma.
            </p>
            <div style={styles.community}>
              <h4 style={styles.communityTitle}>Join our community</h4>
              <div style={styles.socialLinks}>
                <a href="#" style={styles.socialLink}>
                  <img src={ImagePlaceHolder}  alt="Discord" />
                </a>
                <a href="#" style={styles.socialLink}>
                  <img src={ImagePlaceHolder}  alt="YouTube" />
                </a>
                <a href="#" style={styles.socialLink}>
                  <img src={ImagePlaceHolder}  alt="Twitter" />
                </a>
                <a href="#" style={styles.socialLink}>
                  <img src={ImagePlaceHolder}  alt="Instagram" />
                </a>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Explore</h3>
            <nav style={styles.nav}>
              <a href="#" style={styles.navLink}>Marketplace</a>
              <a href="#" style={styles.navLink}>Rankings</a>
              <a href="#" style={styles.navLink}>Connect a wallet</a>
            </nav>
          </div>

          {/* Newsletter */}
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Join Our Weekly Digest</h3>
            <p style={styles.description}>
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} style={styles.subscribeForm}>
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
                  <Mail size={20} style={styles.buttonIcon} />
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div style={styles.copyright}>
          <hr style={styles.divider} />
          <p style={styles.copyrightText}>
            © NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    backgroundColor: '#2B2B2B',
    padding: '40px 0',
    color: '#FFFFFF',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginBottom: '30px',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  brandName: {
    fontSize: '22px',
    margin: 0,
    fontFamily: 'Space Mono, monospace',
  },
  description: {
    color: '#CCCCCC',
    fontSize: '16px',
    lineHeight: '1.4',
    margin: 0,
  },
  community: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  communityTitle: {
    fontSize: '16px',
    margin: 0,
  },
  socialLinks: {
    display: 'flex',
    gap: '10px',
  },
  socialLink: {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#3B3B3B',
    transition: 'background-color 0.2s ease',
    ':hover': {
      backgroundColor: '#A259FF',
    },
  },
  columnTitle: {
    fontSize: '22px',
    margin: 0,
    marginBottom: '10px',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  navLink: {
    color: '#CCCCCC',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    ':hover': {
      color: '#A259FF',
    },
  },
  subscribeForm: {
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
    zIndex: 1,
    ':hover': {
      backgroundColor: '#8247E5',
    },
  },
  buttonIcon: {
    marginRight: '12px',
  },
  copyright: {
    marginTop: '30px',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #3B3B3B',
    margin: '0 0 20px 0',
  },
  copyrightText: {
    color: '#CCCCCC',
    fontSize: '12px',
    margin: 0,
  }
};