import React from 'react';
import { Wallet, FolderUp, ShoppingCart } from 'lucide-react';
import Style from 'types/props/Style';

const InstructionCard = ({ icon: Icon, title, description }:{
  icon:any, title:string, description:string
}) => {
  return (
    <div style={styles.card}>
      <div style={styles.iconWrapper}>
        <div style={styles.iconBackground}>
          <Icon size={24} color="#FFFFFF" strokeWidth={2} />
        </div>
        <div style={styles.decorativeElements}>
          {[...Array(4)].map((_, i) => (
            <div 
              key={i} 
              style={{
                ...styles.decorativeItem,
                transform: `rotate(${i * 90}deg) translate(40px)`,
              }}
            />
          ))}
        </div>
      </div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const InstructionSteps = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Setup Your Wallet",
      description: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
    },
    {
      icon: FolderUp,
      title: "Create Collection",
      description: "Upload your work and setup your collection. Add a description, social links and floor price."
    },
    {
      icon: ShoppingCart,
      title: "Start Earning",
      description: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {steps.map((step, index) => (
          <InstructionCard
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default InstructionSteps;

const styles:Style = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px'
  },
  card: {
    backgroundColor: '#2B2B2B',
    borderRadius: '20px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  iconWrapper: {
    position: 'relative',
    width: '100px',
    height: '100px',
    marginBottom: '20px',
  },
  iconBackground: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #A259FF 0%, #FF6250 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  decorativeElements: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
  },
  decorativeItem: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  description: {
    color: '#858584',
    fontSize: '16px',
    lineHeight: '1.4',
    margin: 0,
  }
};