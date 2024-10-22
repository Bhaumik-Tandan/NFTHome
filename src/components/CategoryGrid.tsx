import React from 'react';
import { Palette, Layers, Music, Camera, Video, Wand2} from 'lucide-react';
import ImagePlaceHolder from "assets/Image Placeholder.png";
import Text from 'components/Text';
const CategoryCard = ({ title, icon: Icon, backgroundImage }) => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.imageOverlay}>
        <img 
          src={ImagePlaceHolder}
          alt={title}
          style={styles.backgroundImage}
        />
        <div style={styles.iconWrapper}>
          <Icon style={styles.icon} size={32} color="white" strokeWidth={1.5} />
        </div>
      </div>
      <div style={styles.titleContainer}>
        <h3 style={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

const CategoryGrid = () => {
  const categories = [
    { id: 1, title: 'Art', icon: Palette },
    { id: 2, title: 'Collectibles', icon: Layers },
    { id: 3, title: 'Music', icon: Music },
    { id: 4, title: 'Photography', icon: Camera },
    { id: 5, title: 'Video', icon: Video },
    { id: 6, title: 'Utility', icon: Wand2 },
    { id: 7, title: 'Sport', icon: Video },
    { id: 8, title: 'Virtual Worlds', icon: Music }
  ];

  return (
    <div style={styles.gridWrapper}>
        <Text>Browse Categories</Text>
      <div style={styles.grid}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;

const styles = {
  gridWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    '@media (max-width: 900px)': {
      gridTemplateColumns: 'repeat(2, 1fr)'
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: 'repeat(1, 1fr)'
    }
  },
  cardContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: '20px',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
    ':hover': {
      transform: 'translateY(-5px)'
    }
  },
  imageOverlay: {
    position: 'relative',
    width: '100%',
    height: '240px',
    overflow: 'hidden'
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'blur(1px)',
    transition: 'transform 0.3s ease'
  },
  iconWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  icon: {
    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))'
  },
  titleContainer: {
    padding: '20px',
    backgroundColor: '#2D2D2D'
  },
  title: {
    color: '#FFFFFF',
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
    textAlign: 'left'
  }
};