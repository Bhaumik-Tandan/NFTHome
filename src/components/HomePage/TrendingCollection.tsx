import React from 'react';
import { User } from 'lucide-react';
import Text from 'components/Text';
import ImagePlaceHolder from 'assets/Image Placeholder.png';
const CollectionCard = ({ mainImage, thumbnails, title, creator }) => {
  return (
    <div style={styles.card}>
      <div style={styles.mainImage}>
        <img 
          src={mainImage} 
          alt={title} 
          style={styles.mainImageContent}
        />
      </div>

      <div style={styles.thumbnailGrid}>
        {thumbnails.map((img, i) => (
          <div key={i} style={styles.thumbnail}>
            <img 
              src={img} 
              alt={`${title} thumbnail ${i + 1}`} 
              style={styles.thumbnailImage}
            />
          </div>
        ))}
        <div style={styles.countBox}>
          <span style={styles.countText}>1025+</span>
        </div>
      </div>

      <div style={styles.cardInfo}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <div style={styles.creator}>
          <div style={styles.creatorAvatar}>
            <User size={14} color="white" />
          </div>
          <span style={styles.creatorName}>{creator}</span>
        </div>
      </div>
    </div>
  );
};

const TrendingCollection = () => {
  const collections = [
    {
      mainImage: ImagePlaceHolder,
      thumbnails: [
        ImagePlaceHolder,
        ImagePlaceHolder
      ],
      title: "DSGN Animals",
      creator: "MrFox"
    },
    {
      mainImage: ImagePlaceHolder,
      thumbnails: [
        ImagePlaceHolder,
        ImagePlaceHolder
      ],
      title: "Magic Mushrooms",
      creator: "Shroomie"
    },
    {
      mainImage: ImagePlaceHolder,
      thumbnails: [
        ImagePlaceHolder,
        ImagePlaceHolder
      ],
      title: "Disco Machines",
      creator: "BeKind2Robots"
    }
  ];

  return (
    <section style={styles.container}>
      <div style={styles.wrapper}>
        <Text style={styles.header}>
          <h2 style={styles.title}>Trending Collection</h2>
          <p style={styles.subtitle}>
            Checkout Our Weekly Updated Trending Collection.
          </p>
        </Text>

        <Text style={styles.cardsContainer}>
          {collections.map((collection, index) => (
            <CollectionCard 
              key={index} 
              {...collection} 
            />
          ))}
        </Text>
      </div>
    </section>
  );
};

const styles = {
  container: {
    width: '100%',
    padding: '80px 0'
  },
  wrapper: {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0 32px'
  },
  header: {
    marginBottom: '56px'
  },
  title: {
    fontSize: '38px',
    fontWeight: 600,
    color: 'white',
    marginBottom: '12px'
  },
  subtitle: {
    fontSize: '22px',
    color: 'white'
  },
  cardsContainer: {
    display: 'flex',
    gap: '32px',
    overflowX: 'auto',
    paddingBottom: '16px'
  },
  card: {
    width: '330px',
    flexShrink: 0
  },
  mainImage: {
    width: '100%',
    height: '330px',
    borderRadius: '20px',
    overflow: 'hidden'
  },
  mainImageContent: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)'
    }
  },
  thumbnailGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    marginTop: '12px'
  },
  thumbnail: {
    aspectRatio: '1',
    borderRadius: '20px',
    overflow: 'hidden'
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  countBox: {
    aspectRatio: '1',
    borderRadius: '20px',
    backgroundColor: '#A259FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  countText: {
    color: 'white',
    fontSize: '18px',
    fontWeight: 600
  },
  cardInfo: {
    marginTop: '16px'
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: 600,
    color: 'white',
    marginBottom: '8px'
  },
  creator: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  creatorAvatar: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#A259FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  creatorName: {
    color: 'white',
    fontSize: '16px'
  }
};

export default TrendingCollection;